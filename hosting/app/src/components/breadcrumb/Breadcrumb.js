import { Close } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Breadcrumb = () => {
  const navigate = useNavigate();
  const handleClick = () => {};

  var locations = window.location.pathname.split("/").slice(1);
  locations = locations.map((location) => {
    if (location !== "") {
      return location
        .split("-")
        .map((_location) => {
          return _location[0].toUpperCase() + _location.slice(1);
        })
        .join(" ");
    }
    return null;
  });

  return (
    <Stack direction="column" spacing={1}>
      <Stack direction="row" alignItems="center" py={2}>
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Início
            </Link>
            {locations.length >= 2 &&
              locations.map((location) => (
                <Typography color="text.primary" key={location}>
                  {location}
                </Typography>
              ))}
          </Breadcrumbs>
        </div>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={() => navigate(-1)} sx={{ p: 0 }}>
          <Close />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Breadcrumb;
