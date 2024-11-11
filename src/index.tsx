import React, {ReactNode, createContext} from "react";
import {createDictionary} from "./createDictionary";
import {useLangChanger} from "./hooks/useLangChanger";
import useDictionary from "./hooks/useDictionary"

interface Props {
    languages: object,
    children: ReactNode
}

export interface DContext {
    languages: any,
}

export const DictionaryContext = createContext<DContext | null>(null)

export function Dictionary({languages, children}: Props) {

    const contextValue = React.useMemo(() => {
        return {languages}
    }, [languages])

    return <DictionaryContext.Provider value={contextValue}>{children}</DictionaryContext.Provider>
}

export {createDictionary, useDictionary, useLangChanger}