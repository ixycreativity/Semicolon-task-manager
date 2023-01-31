import Badge from "../components/shared/badge/Badge";
import { Stack } from "@mui/system";

const Badges = () => {
  <Stack direction="column" spacing={5} alignItems="flex-start">
    <Badge variant="standard" badgeContent={3} color="primary"></Badge>
    <Badge variant="standard" badgeContent={3} color="secondary"></Badge>

    <Badge variant="standard" badgeContent={"Pending"} color="pending"></Badge>

    <Badge
      variant="standard"
      badgeContent={"In Progress"}
      color="inProgress"
    ></Badge>

    <Badge
      variant="standard"
      badgeContent={"In Review"}
      color="inReview"
    ></Badge>

    <Badge
      variant="standard"
      badgeContent={"Unassigned"}
      color="unassigned"
    ></Badge>

    <Badge
      variant="standard"
      badgeContent={"Unassigned"}
      color="unassignedGrey"
    ></Badge>

    <Badge variant="standard" badgeContent={5} color="primaryLight"></Badge>

    <Badge variant="standard" badgeContent={5} color="secondaryLight"></Badge>
  </Stack>;
};

export default Badges;
