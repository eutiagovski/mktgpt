import {
  Menu,
  MenuOpen,
} from "@mui/icons-material";
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

const Navbar = ({ open, toggleDrawer }) => {
  const navigate = useNavigate();
  const isAuth = window.location.pathname.includes([""]);

  return (
    <AppBar
      color="default"
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Stack spacing={1} alignItems="center" direction="row">
          {isAuth && (
            <IconButton sx={{ p: 0 }} onClick={toggleDrawer}>
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
        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            color="inherit"
            href="https://mktgpt.com.br/ajuda"
            target="_blank"
          >
            Ajuda
          </Button>
          {/* <IconButton
            sx={{ p: 1 }}
            href="https://mktgpt.com.br/ajuda"
            target="_blank"
          >
            <Help />
          </IconButton>
          <IconButton sx={{ p: 1 }}>
            <Badge badgeContent={1}>
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton sx={{ p: 0 }}>
            <Avatar sx={{ width: 32, height: 32 }} />
          </IconButton> */}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
