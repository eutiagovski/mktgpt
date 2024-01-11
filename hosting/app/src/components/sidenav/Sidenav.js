import styled from "@emotion/styled";
import {
  Add,
  ChevronLeft,
  Dashboard,
  DocumentScanner,
  Help,
  Pages,
  Settings,
} from "@mui/icons-material";
import {
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";

import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import StickyFooter from "../footer/footer";
import { useNavigate } from "react-router-dom";

const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(0),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(0),
      },
    }),
  },
}));

const Sidenav = ({ open, toggleDrawer }) => {
  const navigate = useNavigate();
  const listItems = [
    { label: "Criar com Modelos", icon: <Pages /> },
  ];
  const options = [
    { label: "Configurações", icon: <Settings /> },
    { label: "Ajuda", icon: <Help /> },
  ];
  return (
    <Drawer
      variant={open ? "permanent" : "temporary"}
      open={open}
      ModalProps={{ onBackdropClick: toggleDrawer }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeft />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {listItems.map((item) => (
          <>
            <ListItemButton
              onClick={() => {
                navigate("/");
                toggleDrawer();
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
              <ListItemSecondaryAction>
                <IconButton>{item.action}</IconButton>
              </ListItemSecondaryAction>
            </ListItemButton>
          </>
        ))}
      </List>
      <Divider sx={{ my: 1 }} />
      <List component="nav">
        {options.map((item) => (
          <>
            <ListItemButton
              onClick={() => {
                navigate("/");
                toggleDrawer();
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
              <ListItemSecondaryAction>
                <IconButton>{item.action}</IconButton>
              </ListItemSecondaryAction>
            </ListItemButton>
          </>
        ))}
        {/* <Divider sx={{ my: 1 }} />
        {secondaryListItems} */}
      </List>
      <StickyFooter />
    </Drawer>
  );
};

export default Sidenav;
