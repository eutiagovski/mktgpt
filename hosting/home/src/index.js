import React from "react";
import ReactDOM from "react-dom/client";

import { routes } from "./routes";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { mktTheme } from "./assets/theme/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mktTheme}>
      <CssBaseline />
      <RouterProvider router={createBrowserRouter(routes)} />
    </ThemeProvider>
  </React.StrictMode>
);

