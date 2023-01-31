import { Breadcrumbs, Link } from "@mui/material";

export const MuresanTasksList = () => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator="|"
      // maxItems={3}
      // itemsAfterCollapse={2}
      // itemsBeforeCollapse={2}
    >
      <Link underline="hover" href="../sidebarleft">
        Left Sidebar
      </Link>
      <Link underline="hover" href="../pagelayout">
        Page Layout
      </Link>
      <Link underline="hover" href="../tasks">
        Task Viewer + Task Board
      </Link>
      <Link underline="hover" href="../taskdetails">
        Task Details Card
      </Link>
      <Link underline="hover" href="../checkboxes">
        Checkboxes
      </Link>
      <Link underline="hover" href="../forgot">
        Forgot Password
      </Link>
      <Link underline="hover" href="../recover">
        Recover Password
      </Link>

      <Link underline="hover" href="../test">
        Test
      </Link>
    </Breadcrumbs>
  );
};
