import {
  CssBaseline,
  Toolbar,
  Container,
  Stack,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import StickyFooter from "./pages/Home/components/footer";


function App() {
  return (
    <>
      <CssBaseline />
      <Stack direction="column" sx={{minHeight: '100vh'}}>
        <Navbar />
        <Toolbar />
        <Container component="main" sx={{ height: "100%", py: 2 }} maxWidth='xl'>
          <Outlet />
        </Container>
        <StickyFooter />
      </Stack>
    </>
  );
}

export default App;
