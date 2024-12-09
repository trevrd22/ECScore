import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function FrontPage() {
	return (
		<div className="format">
        <h1 style={{ marginBottom: "20px" }}>Trevor's Room Booking Form</h1>
        <div>
		<Stack spacing={2} direction="column">
			<>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => {
						alert("WIP");
					}}
				>
					Book A Room
				</Button>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => {
						alert("WIP");
					}}
				>
					View Room Booking Statuses
				</Button>
			</>
		</Stack>
		</div>
		</div>
	);
}
