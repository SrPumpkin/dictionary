
# Dictionary

Dictionary is a JS library that helps automate language switching.

This library can greatly speed up the development of language versions for any type of application. This library is new and requires a lot of improvements, but you can already try it out. Initially, it was supposed to use Dictionary with React.


## Installation

To install, use:

```bash
  npm install dictionary
```

## Documentation

- createDictionary
- useDictionary
- useLangChanger


### createDictionary(languages: object, lang?: string)

Used to create a dictionary object where all languages will be stored.

```languages``` – here we place an object with languages

```lang``` – if necessary, we specify the default language from those available in the object. If the parameter is not specified, the library takes the first specified language from languages ​​as the default language.

### Exemple

```typescript
import { createDictionary } from "dictionary-react";
import english from "./english.json"
import deutschland from "./deutschland.json"

const initialState = {
    en: english,
    de: deutschland
}

export const dictionaryLangs = createDictionary(initialState)
```

### useDictionary(selector: (state: any) => any, dep?: object | undefined)

Used to get data from a dictionary. It is designed so that it will give out data of the language that is active.

```selector``` – we specify a function to get the section of the dictionary that is needed

```dep``` – an object with one or more variables specified in the received string is passed.

Note: For now, it only works when getting one string from the dictionary.

### Exemple

```typescript
import {useDictionary} from "dictionary-react";

const page = useDictionary(state =>  state.page)
// Returns an object containing information for page

// If the dictionary contains {page: {title: "Some title <d.exemple>"}}
page.title = useDictionary(state =>  state.page.title, {exemple: "testing"})
// Returns “Some title testing” 
```

### useLangChanger(lang: string)

Used when it is necessary to switch the language in the application.

```lang``` – we pass a string with the name of the language available in the dictionary

### Exemple

```typescript
const changeLang = useLangChanger()
const handleClick = changeLang("de")
```

## How to use

First, we create JSON files where all data that is subject to language change will be stored.
```javascript
//For English lang
{
    "title": "Dictionary"
}

//And for Deutschland lang
{
    "title": "Wörterbuch"
}
```

If the text should contain some dynamic parameter, add `<d.*someVariable*>` to this place, where `someVariable` is an identifier that is used to replace this section with the parameter being passed.
```javascript
// You can type any param name "param" or "num" or "sometrash". Wherever you want.
{
    "text": "Text for <d.param> exemple"
}
```

There may be several such parameters.
```javascript
{
    "text": "Text <d.num> for <d.param> exemple <d.param>"
}
```

Then we create an index file and create a dictionary.
```javascript
const initialState = {
    en: english,
    de: deutschland
}

export const dictionaryLangs = createDictionary(initialState)
```

To access the dictionary at the top level of the application, we need to connect our dictionary.
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Dictionary } from "./Dictionary";
import { dictionaryLangs } from "./dictionary/dictionaryLangs";

const root = ReactDOM.createRoot(
    document.getElementById('main') as HTMLElement
);

root.render(
    <Dictionary languages={dictionaryLangs}>
        <App />
    </Dictionary>
);
```

After that, to get data from the dictionary, we call the `useDictionary()` function.
```javascript
const title = useDictionary(state => state.title),
```

Here I should say that the dictionary selects the first language you added as the main one.

If the text contains a parameter that needs to be replaced, we pass it as the second argument.
```javascript
// Here we should use only those parameters that we have noted in the text.
const text = useDictionary(state => state.text, {param: "some param", num: 2}),
```

To change the language, you need to initialize the `useLangChanger()` function and then pass the name of the language you added earlier as an argument.
```javascript
const changeLang = useLangChanger()
const handleClick = () => {
    changeLang("de")
}
```

Congratulations, you are amazing.

## Features

- Code optimization
- AI translation

## Authors

- [@SrPumpkin](https://www.github.com/SrPumpkin)

## License

[MIT](https://choosealicense.com/licenses/mit/)

