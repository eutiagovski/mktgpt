import React from "react";
import { Container, Link, Stack, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <Container maxWidth="lg">
      <Stack
        direction="column"
        // alignItems="center"
        justifyContent="center"
        sx={{ height: "100vh" }}
      >
        <Typography variant="h1" color="inherit">
          Transforme sua criação de conteúdo em uma obra-prima com o mktGpt
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" my={4}>
          <Button variant="outlined" color="inherit" size="large" href="https://app.mktgpt.com.br" sx={{height: 80, width: 240, fontSize: 16}}>
            Experimente
          </Button>
          {/* <Link href="/" color="inherit" sx={{fontSize: 14}}>
            Acompanhe-nos no instagram
          </Link> */}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Header;
