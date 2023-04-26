import React from "react";
import {  Story } from "@storybook/react";
import { JsonPrettierTextarea } from "../components/JsonPrettierTextarea";
import MockDocument from "./MockDocument.json";

export default {
  title: "App Test",
  component: JsonPrettierTextarea,
};

const Template = (args) => <JsonPrettierTextarea {...args} />;

export const App = Template.bind({});
App.args = {
  prettyjson: MockDocument,
  preBcl: "gray",
  stringCl: "blue",
  numberCl: "darkorange",
  booleanCl: "red",
  nullCl: "magenta",
  keyCl: "red",
  string_font_size: "1rem",
  number_font_size: "1rem",
  boolean_font_size: "1rem",
  null_font_size: "1rem",
  key_font_size: "1.2rem",
  height: "300px",
  width: "300px",
  borderRadius: "1rem",
};
