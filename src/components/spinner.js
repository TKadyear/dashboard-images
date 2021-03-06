import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export function Spinner() {
	return (
		<Box sx={{ margin: "0 auto", width: "max-content" }}>
			<CircularProgress />
		</Box>
	);
}
