import { useSyncExternalStore } from 'react';
import { getContext } from "./getContext";
import addDeps from "../utils/addDeps";

const useDictionary = (selector: (state: any) => any, dep: object = {}) => {
    const languages = getContext()
    const currentState = useSyncExternalStore(languages.subscribe, languages.getDictionary)

    let undepsData = selector(currentState)

    if (typeof undepsData === "object") return undepsData

    return addDeps(undepsData, dep)
}

export default useDictionary