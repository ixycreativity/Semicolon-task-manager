import PropTypes from "prop-types";

/**
 * Imports Material UI components
 */
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";

/**
 * Imports styled components
 */
import { AvatarContainer, StyledAvatar } from "./Avatar.styles";

/**
 * Displays the component
 */
export const Avatar = (props) => {
  const {
    src,
    size,
    alt,
    variant,
    verified,
    lastName,
    firstName,
    showActiveStatus,
  } = props;

  /**
   * Returns the avatar width and height based on the size prop
   */
  const getAvatarSize = () => {
    const avatarSizes = {
      xs: 56,
      sm: 64,
      md: 72,
      lg: 90,
    };

    return {
      width: avatarSizes[size] || 56,
      height: avatarSizes[size] || 56,
    };
  };

  /**
   * Returns the image src based on the variant prop
   */
  const getImageSrc = () => {
    if (variant === "placeholder" || variant === "initials") return null;

    return src;
  };

  /**
   * Renders the placeholder avatar
   */
  const renderPlaceholder = () => {
    if (variant === "placeholder") {
      return <PersonAddAltRoundedIcon className="Avatar-placeholder" />;
    }
  };

  /**
   * Renders the initials
   */
  const renderInitials = () => {
    if (variant === "initials" && firstName && lastName) {
      return `${firstName[0]}${lastName[0]}`;
    }
  };

  /**
   * Renders the badge
   */
  const renderBadge = () => {
    if (showActiveStatus && !verified) {
      return <CircleRoundedIcon className="Avatar-status" />;
    }

    if (verified && !showActiveStatus) {
      return <VerifiedRoundedIcon className="Avatar-verified" />;
    }
  };

  return (
    <AvatarContainer size={size}>
      <StyledAvatar
        variant={variant}
        alt={alt}
        size={size || "xs"}
        src={getImageSrc()}
        sx={getAvatarSize()}
      >
        {renderPlaceholder()}
        {renderInitials()}
      </StyledAvatar>
      {renderBadge()}
    </AvatarContainer>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  verified: PropTypes.bool,
  showActiveStatus: PropTypes.bool,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["image", "placeholder", "initials"]).isRequired,
};
