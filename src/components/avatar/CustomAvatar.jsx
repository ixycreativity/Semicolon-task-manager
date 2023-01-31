import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

const AVATAR_SIZES = [
  { id: "xs", width: 56, height: 56 },
  { id: "s", width: 64, height: 64 },
  { id: "m", width: 72, height: 72 },
  { id: "l", width: 90, height: 90 },
];

const CustomAvatar = (props) => {
  const { src, size } = props;
  const selectedSize = AVATAR_SIZES.find((item) => item.id === size);

  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        variant="rounded"
        src={src}
        sx={{
          width: selectedSize.width,
          height: selectedSize.height,
          borderRadius: "16px",
          // border: `0.5px solid #000`,
        }}
      />
    </Stack>
  );
};

CustomAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["xs", "s", "m", "l"]).isRequired,
};

export default CustomAvatar;
