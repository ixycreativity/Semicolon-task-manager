import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  "&": {
    color: "#3754db",
    width: "22px",
    height: "22px",
  },
  "&.Mui-checked": {
    color: "#5B73E1",
  },
  "& .MuiSvgIcon-root": {
    borderRadius: "4px",
  },
  "&.Mui-disabled": {
    color: "#5B73E1",
    opacity: "0.2",
  },
}));

const CheckBox = ({ disabled, indeterminate, disabledChecked }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <StyledCheckbox
      checked={disabledChecked ? true : checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "secondary checkbox" }}
      disabled={disabled}
      indeterminate={indeterminate}
    />
  );
};

export default CheckBox;
