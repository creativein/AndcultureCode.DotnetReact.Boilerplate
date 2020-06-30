import React from "react";
import { boolean, text } from "@storybook/addon-knobs";
import CheckboxFormField from "molecules/form-fields/checkbox-form-field";

export default {
    title: "Molecules | Forms / Checkbox Form Field",
    component: CheckboxFormField,
};

export const checkboxFormFieldKnobs = () => (
    <CheckboxFormField
        checked={boolean("Checked", false)}
        label={text("Label", "Remember Me")}
        disabled={boolean("Disabled", false)}
        onChange={() => {}}
    />
);
