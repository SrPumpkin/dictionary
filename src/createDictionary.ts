

export const createDictionary = (languages: object, lang?: string) => {
    // TODO Добавить проверку есть ли указанный lang в переданном объекте languages

    // TODO Если lang не указан добавить стандартный язык тот что чаще используют посетители

    let currentState = {
        currentLang: lang || Object.keys(languages)[0],
        currentLanguage: languages[lang || Object.keys(languages)[0]],
        languages: languages,
    };
    let subscribers: Array<any> = [];

    return {
        getDictionary: () => currentState.currentLanguage,
        dispatch: (changeLang: string) => {
            // TODO добавить проверку на ввод существующего языка в changeLang

            currentState = {
                ...currentState,
                currentLang: changeLang,
                currentLanguage: languages[changeLang],
            }
            subscribers.forEach(cb => cb())
        },
        subscribe: (subscriber: any) => {
            subscribers = [...subscribers, subscriber];
            return () => {
                subscribers = subscribers.filter(s => s !== subscriber);
            };
        },
    }
}