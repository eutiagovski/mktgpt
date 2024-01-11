import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import _Sidenav from "./components/sidenav/Sidenav";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  const [open, setOpen] = React.useState(
    window.innerWidth >= 600 ? true : false
  );
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar toggleDrawer={toggleDrawer} open={open} />
      <_Sidenav toggleDrawer={toggleDrawer} open={open} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ py:2, minHeight: '100vh', height:'100%' }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}
