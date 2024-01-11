import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Stack } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/eutiagovski"
        target="_blank"
      >
        FUTURE MACHINES
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  const location = window.location.hostname
  console.log(location)
  return (
    <>
      <Box
        component="footer"
        position="sticky"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="column" spacing={2}>
            <Link
              href="/"
              underline="none"
              color="inherit"
            >
              MktGpt
            </Link>

            <Stack direction="row" spacing={2}>
              <Link href="/termos-de-uso">
                Termo de Uso
              </Link>
              <Link href="/politica-de-privacidade">
                Política de Privacidade
              </Link>
            </Stack>
            <Copyright />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
