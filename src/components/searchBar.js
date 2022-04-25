import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
	Link,
	matchPath,
	useLocation,
} from "react-router-dom";


function useRouteMatch(patterns) {
	const { pathname } = useLocation();
	for (let i = 0; i < patterns.length; i += 1) {
		const pattern = patterns[i];
		const possibleMatch = matchPath(pattern, pathname);
		if (possibleMatch !== null) {
			return possibleMatch;
		}
	}

	return null;
}
function MyTabs() {
	// You need to provide the routes in descendant order.
	// This means that if you have nested routes like:
	// users, users/new, users/edit.
	// Then the order should be ['users/add', 'users/edit', 'users'].
	const routeMatch = useRouteMatch(["/", "/search", "/gallery"]);
	const currentTab = routeMatch?.pattern?.path;

	return (
		<Tabs value={currentTab}>
			<Tab label="Home" value="/" to="/" component={Link} />
			<Tab label="Search" value="/search" to="/search" component={Link} />
			<Tab label="Gallery" value="/gallery" to="/gallery" component={Link} />
		</Tabs>
	);
}

export default function SearchAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ backgroundColor: "#FFFFFF", color: "#000000" }}>
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
					>
						DASHBOARD IMAGES
					</Typography>
					<MyTabs />

				</Toolbar>
			</AppBar>
		</Box>
	);
}
