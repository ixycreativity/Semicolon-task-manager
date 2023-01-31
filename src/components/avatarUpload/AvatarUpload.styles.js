import { styled } from "@mui/material/styles";

export const Overlay = styled("div", {
  shouldForwardProp: (propName) => propName !== "size",
})((props) => {
  const { size } = props;

  const getMaxHeight = () => {
    switch (size) {
      case "sm":
        return 64;
      case "md":
        return 72;
      case "lg":
        return 90;
      default:
        return 56;
    }
  };

  return {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    maxHeight: getMaxHeight(),
  };
});

export const UploadIconContainer = styled("div")((props) => {
  const { theme } = props;

  return {
    width: 40,
    height: 40,
    background: "rgba(255, 255, 255, 0.25)",
    borderRadius: 12,
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      color: theme.palette.common.white,
    },
  };
});

export const Container = styled("div")(() => {
  return {
    position: "relative",
    "& .AvatarUpload-cancelBtn": {
      position: "absolute",
      background: "rgba(238, 240, 252, 0.7)",
      color: "#15256F",
      top: -15,
      right: -15,
      padding: 4,
    },
  };
});
