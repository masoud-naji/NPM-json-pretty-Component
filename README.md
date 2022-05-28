# JSON pretty Textarea

JSON pretty Textareais a React library for dealing with json files and showing them on textarea.



## Installation

Use the package manager [npm](https://www.npmjs.com/) to install json-pretty-textarea.

```bash
npm i json-pretty-textarea
```



## Usage

```React
# import 
import { JsonPrettierTextarea } from "json-pretty-textarea";
```
```React
# return
 <JsonPrettierTextarea
              prettyjson={MockDocument}
              preBcl="white"
              stringCl="blue"
              numberCl="blue"
              booleanCl="red"
              nullCl="violet"
              keyCl="red"
              string_font_size="1rem"
              number_font_size="1rem"
              boolean_font_size="1rem"
              null_font_size="1rem"
              key_font_size="1rem"
              height="300px"
              width="300px"
              borderRadius="10px"
            />
```
---

![alt text](https://dub01pap003files.storage.live.com/y4m30TStT9GjkJ8CQsKTJ8f6CpRcTucFQI2NDeV5IKdWDx3LOXX-_IjAzWofcsE9xTnFVBeOwtO7HhxpdDPg6v2SrV8scH3NghHvuegxEbRYfpyhGxrsg8nA6wv4QwIEPIcP-M9NrPKcq2fyD2Ucs8ZddNeIxlFNS3FE2ynxj9bA0s14iCDzDOnxACR_Y0y2fDc?width=607&height=504&cropmode=none "Logo Title Text 1")

---
![alt text](https://dub01pap003files.storage.live.com/y4mrjlsIlPyII1uX5xKxO4LJtSR3lQTNxtpeBsisACqsfb2VpzAAD8pcXyzjD9YU4HGilApW-023OSueLbTSgQA9cXbQDv_OPYDmfBOVPgRl1MyHUZ9iwTvV5ZT0IH-vZjqjMWGQhjp5OtStBM0oaSUum-48JaFLGmPNYKJswgl9-sEuENncbEueyDxehFvUqVV?width=660&height=410&cropmode=none "Logo Title Text 1")

---

|    Property      |     type      |  Default   |       Description       |
| ---------------- |:-------------:|:----------:|:-----------------------:|
| prettyjson       | json data     |MockDocument|    Source File json     |
| preBcl           |       CSS     |    white   |Textarea BackGround color|
| stringCl         |       CSS     |    green   |   String Values color   |
| numberCl         |       CSS     | darkorange |   number Values color   |
| booleanCl        |       CSS     |     blue   |   boolean Values color  |
| nullCl           |       CSS     |   magenta  |   null Values color     |
| keyCl            |       CSS     |     red    |      key Values color   |
| string_font_size |       CSS     |     1rem   |       font_size         |
| number_font_size |       CSS     |     1rem   |        font_size        |
| boolean_font_size|       CSS     |     1rem   |        font_size        |
| null_font_size   |       CSS     |     1rem   |        font_size        |
| key_font_size    |       CSS     |     1rem   |        font_size        |
| height           |       CSS     |     100%   |    textarea height      |
| width            |       CSS     |     100%   |    textarea width       |
| borderRadius     |       CSS     |   0.5rem   |    border radius        |



## Sample Code
```React Code
import MockDocument from "./MOCK_DATA.json";
import { JsonPrettierTextarea } from "json-pretty-textarea";
export const test = () => {
  return (
  <JsonPrettierTextarea
              prettyjson={MockDocument}
              preBcl="white"
              stringCl="green"
              numberCl="skyblue"
              booleanCl="orange"
              nullCl="violet"
              keyCl="black"
              string_font_size="1rem"
              number_font_size="1rem"
              boolean_font_size="1rem"
              null_font_size="1rem"
              key_font_size="1.2rem"
              height="500px"
              width="800px"
              borderRadius="10px"
            />
  );
};
```


***
## CodeSandBox Sample
[json-pretty-textarea]https://codesandbox.io/s/json-pretty-textarea-qus7dk


## Contributing
For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


## License
[MIT](https://choosealicense.com/licenses/mit/)