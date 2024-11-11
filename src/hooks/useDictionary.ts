import { useSyncExternalStore } from 'react';
import { getContext } from "./getContext";
import addDeps from "../utils/addDeps";

export default function useDictionary(selector: (state: any) => any, dep: object) {
    const languages = getContext()
    const currentState = useSyncExternalStore(languages.subscribe, languages.getDictionary)

    let undepsData: string = selector(currentState)

    return addDeps(undepsData, dep)
}