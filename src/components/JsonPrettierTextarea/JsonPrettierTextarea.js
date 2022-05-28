import React from "react";
import UseJsonPrettier from "./useJsonPrettier";
export const JsonPrettierTextarea = ({
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
  borderRadius,
}) => {
  return (
    <UseJsonPrettier
      prettyjson={prettyjson || []}
      preBcl={preBcl}
      stringCl={stringCl}
      numberCl={numberCl}
      booleanCl={booleanCl}
      nullCl={nullCl}
      keyCl={keyCl}
      string_font_size={string_font_size}
      number_font_size={number_font_size}
      boolean_font_size={boolean_font_size}
      null_font_size={null_font_size}
      key_font_size={key_font_size}
      height={height}
      width={width}
      borderRadius={borderRadius}
    />
  );
};

