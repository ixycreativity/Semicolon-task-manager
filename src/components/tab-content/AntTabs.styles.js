import { styled } from "@mui/material/styles";
import { Tabs } from "@mui/material";

export const AntTabs = styled(Tabs)((props) => {
  const { theme } = props;
  return {
    borderBottom: "0.34px solid #a9a9a9",
    // maxWidth: "100%",
  };
});
