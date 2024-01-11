import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { mktTheme } from "./assets/theme/theme";
import { routes } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mktTheme}>
      <CssBaseline />
      <RouterProvider router={createBrowserRouter(routes)} />
    </ThemeProvider>
  </React.StrictMode>
);

