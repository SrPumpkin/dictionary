import React from "react"
import {DictionaryContext} from "../index.jsx"

export function getContext() {
    const { languages } = React.useContext(DictionaryContext)

    return languages
}