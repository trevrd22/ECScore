import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function FPB() {
  return (
    <Stack spacing={2} direction="column">
      <>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            alert("WIP");
          }}
        >
          Book A Room
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            alert("WIP");
          }}
        >
          View Room Booking Statuses
        </Button>
      </>
    </Stack>
  );
}
