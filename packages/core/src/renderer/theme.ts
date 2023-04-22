import { ThemeOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#004392",
      light: "#3182DA",
      dark: "#001E5A",
    },
    secondary: {
      main: "#F2AF88",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    },
  },
};
export const theme = createTheme(themeOptions);