import React from "react";
import { Stack } from "@mui/material";
import CheckBox from "../components/shared/check-box/CheckBox";
import ToggleSwitch from "../components/shared/toggle-switch/ToggleSwitch";

export const Checkboxes = () => {
  return (
    <Stack direction="column" spacing={1} alignItems="center">
      <CheckBox />
      <CheckBox disabled />
      <CheckBox disabled disabledChecked />
      <CheckBox indeterminate />
      <CheckBox indeterminate disabled />
      <ToggleSwitch />
    </Stack>
  );
};
