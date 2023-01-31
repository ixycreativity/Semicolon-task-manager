import { Breadcrumbs, Link } from "@mui/material";

export const PoseaTasksList = () => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator="|"
      // maxItems={3}
      // itemsAfterCollapse={2}
      // itemsBeforeCollapse={2}
    >
      <Link underline="hover" href="../">
        Home
      </Link>
      <Link underline="hover" href="../avatars">
        Avatars
      </Link>
      <Link underline="hover" href="../alerts">
        Alerts
      </Link>
      <Link underline="hover" href="../tabs">
        Tabs
      </Link>
      <Link underline="hover" href="../createaccount">
        Create Account
      </Link>
      <Link underline="hover" href="../login">
        Login
      </Link>
      <Link underline="hover" href="../inputs">
        Input
      </Link>
      <Link underline="hover" href="../modals">
        Modals
      </Link>
    </Breadcrumbs>
  );
};
