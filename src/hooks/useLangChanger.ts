import {getContext} from "./getContext";

export function createDispatch() {
    const useDispatch = () => {
        const store = getContext()
        return store.dispatch
    }

    return useDispatch
}

export const useLangChanger = createDispatch()