import { createTheme } from "@mui/material/styles";

export const themeOptions = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#230541",
    },
    secondary: {
      main: "#2eb4bf",
      dark: "#66bd30",
      light: "#2d89aa",
    },
    error: {
      main: "#7d0f2d",
    },
    info: {
      main: "#1b649e",
    },
    success: {
      main: "#59cb17",
    },
  },
  typography: {
    h1: {
      fontFamily: "Raleway",
      fontSize: "4rem",
      fontWeight: 500,
    },
    h2: {
      fontFamily: "Raleway",
      fontSize: "3rem",
    },
    h3: {
      fontFamily: "Open Sans",
      fontSize: "2rem",
    },
    h4: {
      fontFamily: "Open Sans",
    },
    h5: {
      fontFamily: "Open Sans",
    },
    h6: {
      fontFamily: "Open Sans",
    },
    subtitle1: {
      fontFamily: "Raleway",
      fontSize: "1rem",
      fontWeight: 600,
    },
    subtitle2: {
      fontFamily: "Open Sans",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "Raleway",
      fontWeight: 300,
    },
    body2: {
      fontFamily: "Raleway",
    },
    button: {
      fontFamily: "Raleway",
      fontWeight: 700,
    },
    caption: {
      fontFamily: "Open Sans",
    },
    overline: {
      fontFamily: "Open Sans",
    },
  },
});
