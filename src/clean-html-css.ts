import {AllowedAttribute} from "sanitize-html";

const nonTextTags = [
  "style",
  "script",
  "textarea",
  "noscript",
  "html",
  "body",
  "div",
  "span",
];

const allowedTags = [
  "html",
  "body",
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "section",
  "div",
  "span",
];

const allowedAttributes:Record<string, AllowedAttribute[]> = {
  img: [ 'src', 'srcset', 'alt', 'title', 'width', 'height', 'loading' ]
}

export { allowedTags, nonTextTags, allowedAttributes };
