import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Roboto"', "sans-serif"].join(","),
    h1: {
      fontFamily: ['"Kanit"', "sans-serif"].join(","),
    },
  },
  palette: {
    type: "light",
  },
});
