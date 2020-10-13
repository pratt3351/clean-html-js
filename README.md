## clean-html-js

[![A11yWatch](https://circleci.com/gh/A11yWatch/clean-html-js.svg?style=svg)](https://circleci.com/gh/A11yWatch/clean-html-js)

clean html content for reading. simply pass in your content as html and get a readability object

## Installation Instructions

```bash
$ yarn add clean-html-js
```

## Example

![Alt Text](https://i.imgur.com/WeROrao.gif)

```typescript
import cleanHtml from "clean-html-js";

const url = "https://www.a11ywatch.com";

async function grabReaderData() {
  const source = await fetch(url);
  const html = await source.text();
  const readabilityArticle = await cleanHtml(html, url);
}

async function grabReaderDataSimple() {
  const readabilityArticle = await cleanHtml("", url);
}

grabReaderData().then((data) => {
  console.log(data);
});

// or just the url
grabReaderDataSimple().then((data) => {
  console.log(data);
});
```

- For more help getting started checkout [Example](https://github.com/j-mendez/react-native-reader-example)

## Available Params

| param     | default | type   | description                                                          |
| --------- | ------- | ------ | -------------------------------------------------------------------- |
| html      | ""      | string | Required: html string to parse                                       |
| sourceUrl | ""      | string | Optional: url of the html source to prevent fetching extra resources |
| config    | {}      | Config | Optional: config object                                              |

If html is not provided and sourceUrl is found an attempt to fetch the html is done.

## Config

merges with [config](src/clean-html.ts)

| prop        | default | type             | description                                       |
| ----------- | ------- | ---------------- | ------------------------------------------------- |
| allowedTags | null    | array of strings | html elements allowed note:(svgs must be inlined) |
| nonTextTags | null    | array of strings | html elements that should not be treated as text  |
