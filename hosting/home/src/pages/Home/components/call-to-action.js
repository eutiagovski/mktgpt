import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Button, Stack } from "@mui/material";

export default function CalltoAction() {
  return (
    <>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ height: "100vh" }}
      >
        <Container maxWidth='md'>
          <Typography variant="h2" component="h1" gutterBottom>
            Não perca mais tempo lutando para criar conteúdo de qualidade
            inferior.
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {
              "Experimente o gptMkt agora e transforme sua criação de conteúdo em uma obra-prima."
            }
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            mt={2}
            href="/app"
            sx={{height: 60, width: 160}}
          >
            Experimente
          </Button>
        </Container>
      </Stack>

    </>
  );
}
