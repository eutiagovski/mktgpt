import { Logout, Menu, MenuOpen, Settings } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import OptionsMenu from "../options-menu/OptionsMenu";

const Navbar = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const isAuth = window.location.pathname.includes(["app"]);

  return (
    <AppBar
      color="default"
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Stack spacing={1} alignItems="center" direction="row">
          {isAuth && (
            <IconButton sx={{ p: 0 }} onClick={() => setOpen(!open)}>
              {open ? <MenuOpen /> : <Menu />}
            </IconButton>
          )}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            mktGpt
          </Typography>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        {isAuth ? (
          <>
            <Button variant="outlined" color="inherit">
              Ajuda
            </Button>
            {/* <IconButton sx={{ mx: 1 }}>
              <Settings />
            </IconButton>
            <IconButton sx={{ mr: 1 }}>
              <Logout />
            </IconButton>
            <IconButton>
              <Avatar />
            </IconButton> */}
           {/* <OptionsMenu /> */}
          </>
        ) : (
          <Button variant="outlined" color="inherit" href="https://app.mktgpt.com.br">
            Experimente
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
