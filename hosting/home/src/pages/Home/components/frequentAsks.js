import { Container, Stack, Typography } from "@mui/material";
import React from "react";

const FrequentAsks = () => {
  
  return (
    <Stack
      direction="column"
      sx={{ height: "100vh", bgcolor: "#FFF", color: "#000" }}
    >
      <Container>
        <Typography variant="h5" textAlign='center'>Perguntas Frequentes</Typography>
      </Container>
    </Stack>
  );
};

export default FrequentAsks;
