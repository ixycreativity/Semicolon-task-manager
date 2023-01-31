import React from "react";
import { Stack } from "@mui/material";
import SideBar from "../components/shared/side-bar/SideBar";

export const SidebarPage = () => {
  return (
    <Stack
      direction="column"
      spacing={4}
      alignItems="flex-start"
      padding="40px"
      sx={{ backgroundColor: "#f5f7fe" }}
    >
      <SideBar />
    </Stack>
  );
};
