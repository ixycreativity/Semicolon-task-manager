import { Breadcrumbs, Link } from "@mui/material";

export const ButaTasksList = () => {
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
      <Link underline="hover" href="../users">
        Table Component
      </Link>

      <Link underline="hover" href="../badges">
        Badge component
      </Link>

      <Link underline="hover" href="../dashboard">
        Sidebar Right
      </Link>

      <Link underline="hover" href="../test">
        Test
      </Link>
    </Breadcrumbs>
  );
};
