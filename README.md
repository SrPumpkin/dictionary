
# Dictionary

Dictionary is a JS library that helps automate language switching.

This library can greatly speed up the development of language versions for any type of application. This library is new and requires a lot of improvements, but you can already try it out. Initially, it was supposed to use Dictionary with React.


## Installation

To install, use:

```bash
  npm install dictionary
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
// {} in the second parameter is required
const title = useDictionary(state => state.title, {}),
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
- Possibility to obtain processed data for the entire section at once



## Authors

- [@SrPumpkin](https://www.github.com/SrPumpkin)


## License

[MIT](https://choosealicense.com/licenses/mit/)

