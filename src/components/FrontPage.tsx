import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function FrontPage() {
    const navigate = useNavigate(); // Get the navigation function

    return (
      <div className="format">
        <h1 style={{ marginBottom: "20px" }}>Trevor's Room Booking Form</h1>
        <div>
          <Stack spacing={2} direction="column">
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
					navigate("/form");
                }}
              >
                Book A Room
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  navigate("/stattrak");
                }}
              >
                View Room Booking Statuses
              </Button>
            </>
          </Stack>
        </div>
      </div>
    );
};
