import React from "react";
import { storiesOf } from "@storybook/react";
import { JsonPrettierTextarea } from "../components/JsonPrettierTextarea";
import MockDocument from "./MockDocument.json";

const stories = storiesOf("App Test", module);

stories.add("App", () => (
  <JsonPrettierTextarea
    prettyjson={MockDocument}
    preBcl="gray"
    stringCl="blue"
    numberCl="darkorange"
    booleanCl="red"
    nullCl="magenta"
    keyCl="red"
    string_font_size="1rem"
    number_font_size="1rem"
    boolean_font_size="1rem"
    null_font_size="1rem"
    key_font_size="1.2rem"
    height="300px"
    width="300px"
    borderRadius="1rem"

  />
));
