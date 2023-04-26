'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function UseJsonPrettier({
  prettyjson,
  preBcl,
  stringCl,
  numberCl,
  booleanCl,
  nullCl,
  keyCl,
  string_font_size,
  number_font_size,
  boolean_font_size,
  null_font_size,
  key_font_size,
  height,
  width,
  borderRadius
}) {
  const [styles, setStyle] = React.useState({
    outline: "1px solid rgb(2, 175, 255)!important",
    padding: "5px!important",
    margin: "5px!important",
    backgroundColor: `white!important`,
    borderRadius: "0.5rem!important",
    height: `100%!important`,
    maxHeight: `100%!important`,
    width: `100%!important`,
    maxWidth: `100%!important`
  });
  const [spanStyles, setSpanStyle] = React.useState({
    stringClN: `green`,
    numberClN: `darkorange`,
    booleanClN: `blue`,
    nullClN: `magenta`,
    keyClN: `red`,
    string_font_sizeN: `1rem`,
    number_font_sizeN: `1rem`,
    boolean_font_sizeN: `1rem`,
    null_font_sizeN: `1rem`,
    key_font_sizeN: `1rem`
  });
  React.useEffect(() => {
    setSpanStyle({
      ...spanStyles,
      stringClN: `${stringCl}!important`,
      numberClN: `${numberCl}!important`,
      booleanClN: `${booleanCl}!important`,
      nullClN: `${nullCl}!important`,
      keyClN: `${keyCl}!important`,
      string_font_sizeN: `${string_font_size}!important`,
      number_font_sizeN: `${number_font_size}!important`,
      boolean_font_sizeN: `${boolean_font_size}!important`,
      null_font_sizeN: `${null_font_size}!important`,
      key_font_sizeN: `${key_font_size}!important`
    });
    setStyle({
      ...styles,
      backgroundColor: `${preBcl}`,
      height: `${height}`,
      maxHeight: `${height}`,
      width: `${width}`,
      maxWidth: `${width}`,
      borderRadius: `${borderRadius}`
    });
  }, [preBcl, stringCl, numberCl, booleanCl, nullCl, keyCl, string_font_size, number_font_size, boolean_font_size, null_font_size, key_font_size, height, width]);
  function syntaxHighlight(json) {
    json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      var cls = "number";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key";
        } else {
          cls = "string";
        }
      } else if (/true|false/.test(match)) {
        cls = "boolean";
      } else if (/null/.test(match)) {
        cls = "null";
      }
      switch (cls) {
        case "key":
          return `<span  style="color:${spanStyles.keyClN}; font-size: ${spanStyles.key_font_sizeN}" class="` + cls + `">` + match + `</span>`;
        case "string":
          return `<span  style="color:${spanStyles.stringClN}; font-size: ${spanStyles.string_font_sizeN}" class="` + cls + `">` + match + `</span>`;
        case "number":
          return `<span  style="color:${spanStyles.numberClN}; font-size: ${spanStyles.number_font_sizeN}" class="` + cls + `">` + match + `</span>`;
        case "boolean":
          return `<span  style="color:${spanStyles.booleanClN}; font-size: ${spanStyles.boolean_font_sizeN}" class="` + cls + `">` + match + `</span>`;
        case "null":
          return `<span  style="color:${spanStyles.nullClN}; font-size: ${spanStyles.null_font_sizeN}" class="` + cls + `">` + match + `</span>`;
      }
    });
  }
  let str = JSON.stringify(prettyjson, undefined, 4);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      backgroundColor: `${styles.backgroundColor}`,
      height: `${styles.height}`,
      maxHeight: `${styles.maxHeight}`,
      width: `${styles.width}`,
      maxWidth: `${styles.maxWidth}`,
      borderRadius: `${styles.borderRadius}`,
      whiteSpace: "pre-wrap"
    },
    dangerouslySetInnerHTML: {
      __html: syntaxHighlight(str)
    }
  });
}

const JsonPrettierTextarea = ({
  prettyjson,
  preBcl,
  stringCl,
  numberCl,
  booleanCl,
  nullCl,
  keyCl,
  string_font_size,
  number_font_size,
  boolean_font_size,
  null_font_size,
  key_font_size,
  height,
  width,
  borderRadius
}) => {
  return /*#__PURE__*/React__default["default"].createElement(UseJsonPrettier, {
    prettyjson: prettyjson || [],
    preBcl: preBcl,
    stringCl: stringCl,
    numberCl: numberCl,
    booleanCl: booleanCl,
    nullCl: nullCl,
    keyCl: keyCl,
    string_font_size: string_font_size,
    number_font_size: number_font_size,
    boolean_font_size: boolean_font_size,
    null_font_size: null_font_size,
    key_font_size: key_font_size,
    height: height,
    width: width,
    borderRadius: borderRadius
  });
};

exports.JsonPrettierTextarea = JsonPrettierTextarea;
