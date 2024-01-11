import { createTheme, responsiveFontSizes } from "@mui/material";

export const mktTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontWeight: 700,
      fontSize: 12,
    },
  })
);
