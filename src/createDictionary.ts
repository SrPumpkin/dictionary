

export const createDictionary = (languages: any, lang?: string) => {
    let currentState = {
        currentLang: lang || Object.keys(languages)[0],
        currentLanguage: languages[lang || Object.keys(languages)[0]],
        languages: languages,
    };
    let subscribers: Array<any> = [];

    return {
        getDictionary: () => currentState.currentLanguage,
        dispatch: (changeLang: string) => {
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