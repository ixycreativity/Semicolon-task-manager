import { Stack } from "@mui/material";
import { Avatar } from "../components/avatar/Avatar";
import { PoseaTasksList } from "../components/tasks-list/PoseaTasksList";

const Avatars = () => {
  return (
    <Stack spacing={2} padding="30px">
      <PoseaTasksList />
      <Stack direction="row" spacing={2} sx={{ margin: 5 }}>
        <Stack direction="column">
          <Stack direction="column">
            <p> Size prop demo: </p>
            <Stack direction="row" spacing={2}>
              <Avatar variant="image" src="/avatars/girl.png" size="xs" />
              <Avatar variant="image" src="/avatars/girl.png" size="sm" />
              <Avatar variant="image" src="/avatars/girl.png" size="md" />
              <Avatar variant="image" src="/avatars/girl.png" size="lg" />
            </Stack>
          </Stack>
          <Stack direction="column">
            <p> Variant prop demo: </p>
            <Stack direction="row" spacing={2}>
              <Avatar variant="image" src="/avatars/girl.png" />
              <Avatar variant="placeholder" size="sm" />
              <Avatar
                variant="initials"
                size="md"
                firstName="Alex"
                lastName="East"
              />
            </Stack>
          </Stack>
          <Stack direction="column">
            <p> Verified: </p>
            <Stack direction="row" spacing={2}>
              <Avatar
                verified
                variant="image"
                src="/avatars/girl.png"
                size="xs"
              />
              <Avatar
                verified
                variant="image"
                src="/avatars/girl.png"
                size="sm"
              />
              <Avatar
                verified
                variant="image"
                src="/avatars/girl.png"
                size="md"
              />
              <Avatar
                verified
                variant="image"
                src="/avatars/girl.png"
                size="lg"
              />
            </Stack>
          </Stack>
          <Stack direction="column">
            <p> Online status: </p>
            <Stack direction="row" spacing={2}>
              <Avatar
                showActiveStatus
                variant="image"
                src="/avatars/girl.png"
                size="xs"
              />
              <Avatar
                showActiveStatus
                variant="image"
                src="/avatars/girl.png"
                size="sm"
              />
              <Avatar
                showActiveStatus
                variant="image"
                src="/avatars/girl.png"
                size="md"
              />
              <Avatar
                showActiveStatus
                variant="image"
                src="/avatars/girl.png"
                size="lg"
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Avatars;
