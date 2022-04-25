import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
export const Search = () => {
	const [search, setSearch] = useState("");
	const handleChange = (e) => setSearch(e.target.value);
	return (
		<>
			<Container sx={{
				paddingTop: "3.5rem"
			}}>
				<TextField
					id="search"
					label="Search..."
					value={search}
					onChange={handleChange}
					sx={{
						maxWidth: 900,
						width: "90%"
					}}
				/>
			</Container>
		</>
	);
};
