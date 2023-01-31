import { styled } from "@mui/material/styles";

/**
 * Imports Material UI components
 */
import Avatar from "@mui/material/Avatar";

export const AvatarContainer = styled("div", {
  shouldForwardProp: (propName) => propName !== "size",
})((props) => {
  const { theme, size } = props;

  return {
    position: "relative",
    "& .Avatar-status": {
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      color: theme.palette.success.main,
      borderRadius: 25,
      ...(size === "xs" && {
        width: 25,
        height: 25,
        top: -10,
        right: -10,
      }),
      ...(size === "sm" && {
        width: 30,
        height: 30,
        top: -15,
        right: -15,
      }),
      ...(size === "md" && {
        width: 35,
        height: 35,
        top: -18,
        right: -15,
      }),
      ...(size === "lg" && {
        width: 40,
        height: 40,
        top: -20,
        right: -15,
      }),
    },
    "& .Avatar-verified": {
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      color: theme.palette.info.main,
      borderRadius: 25,
      ...(size === "xs" && {
        width: 25,
        height: 25,
        top: -10,
        right: -10,
      }),
      ...(size === "sm" && {
        width: 30,
        height: 30,
        top: -15,
        right: -15,
      }),
      ...(size === "md" && {
        width: 35,
        height: 35,
        top: -18,
        right: -15,
      }),
      ...(size === "lg" && {
        width: 40,
        height: 40,
        top: -20,
        right: -15,
      }),
    },
  };
});

export const StyledAvatar = styled(Avatar, {
  shouldForwardProp: (propName) =>
    propName !== "variant" && propName !== "size",
})((props) => {
  const { theme, variant, size } = props;

  /**
   * Returns the font size based on the size prop
   */
  const getFontSize = () => {
    switch (size) {
      case "sm":
        return 28;
      case "md":
        return 32;
      case "lg":
        return 44;
      default:
        return 24;
    }
  };

  return {
    borderRadius: 16,
    "& .Avatar-placeholder": {
      color: theme.palette.primary.main,
      ...(size === "xs" && {
        width: 31,
        height: 30,
      }),
      ...(size === "sm" && {
        width: 36,
        height: 34,
      }),
      ...(size === "md" && {
        width: 40,
        height: 38,
      }),
      ...(size === "lg" && {
        width: 42,
        height: 40,
      }),
    },
    ...(variant === "placeholder" && {
      cursor: "pointer",
      backgroundColor: theme.palette.info.main,
    }),
    ...(variant === "initials" && {
      fontSize: getFontSize(),
      backgroundColor: theme.palette.text.primary,
    }),
  };
});
