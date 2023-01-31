import { Stack, Typography } from "@mui/material";
import Button from "../shared/button/Button";
import PropTypes from "prop-types";
import { HalfPage } from "../shared/layout/HalfPage";

export const Media = (props) => {
  const { align, hasCreate } = props;
  return (
    <HalfPage>
      <Stack
        direction="row"
        justifyContent="end"
        visibility={hasCreate ? "visible" : "hidden"}
      >
        <Button variant="create" href="/createaccount">
          Create Account
        </Button>
      </Stack>
      <Typography
        sx={{
          color: "#fff",
          fontWeight: 600,
          fontStyle: "normal",
          fontSize: "56px",
          lineHeight: "66px",
          letterSpacing: "-0.02em",
          paddingTop: "240px",
          textAlign: align,
        }}
      >
        Take your <br /> productivity to the <br /> next level.
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "66px",
          paddingTop: "308px",
          textAlign: align,
        }}
      >
        SkillBrain 2022 | All Rights Reserved
      </Typography>
    </HalfPage>
  );
};

Media.propTypes = {
  align: PropTypes.oneOf(["left", "right"]).isRequired,
  hasCreate: PropTypes.bool.isRequired,
};
