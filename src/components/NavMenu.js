import { AppBar, Box, Toolbar, Typography, Tabs, Tab } from "@mui/material";
import {
	Link,
	matchPath,
	useLocation,
} from "react-router-dom";
import styled from "@emotion/styled";
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
	({ theme }) => ({
		textTransform: "none",
		fontWeight: theme.typography.fontWeightRegular,
		marginRight: theme.spacing(1),
		color: "rgba(255, 255, 255, 0.7)",
		"&.Mui-selected": {
			color: "#fff",
		},
		"&.Mui-focusVisible": {
			backgroundColor: "rgba(100, 95, 228, 0.32)",
		},
	}),
);
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

	const routeMatch = useRouteMatch(["/dashboard-images", "/dashboard-images/search", "/dashboard-images/gallery"]);
	const currentTab = routeMatch?.pattern?.path;

	return (
		<Tabs indicatorColor="secondary" textColor="secondary" color="secondary" value={currentTab}>
			<StyledTab label="Home" value="/dashboard-images" to="/dashboard-images" component={Link} />
			<StyledTab label="Search" value="/dashboard-images/search" to="/dashboard-images/search" component={Link} />
			<StyledTab label="Gallery" value="/dashboard-images/gallery" to="/dashboard-images/gallery" component={Link} />
		</Tabs>
	);
}

export function MenuAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" >
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, }}
					>
						DASHBOARD IMAGES
					</Typography>
					<MyTabs />

				</Toolbar>
			</AppBar>
		</Box>
	);
}
