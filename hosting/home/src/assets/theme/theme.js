import { createTheme, responsiveFontSizes } from "@mui/material";

export const mktTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontWeightMedium: 600,
      fontSize: 12,
      title: {
        fontSize: 24,
        fontWeight: 500,
      },
    },
  })
);
