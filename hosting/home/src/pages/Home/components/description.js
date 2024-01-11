import React from "react";
import { Box, Stack, Typography, Container } from "@mui/material";

const Description = () => {
  return (
    <>
      <Box sx={{ height: "100vh", width: "100%", bgcolor: "#FFF" }}>
        <Container maxWidth="md">
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ height: "100vh", bgcolor: "#FFF", color: "#000" }}
            spacing={4}
          >
            <Typography variant="h5">
              Como criador de conteúdo ou profissional de publicidade, você sabe
              o quão difícil é criar algo que se destaque em meio a todo o ruído
              da internet.
            </Typography>
            <Typography variant="h5">
              É por isso que a Future Machines criou o gptMkt - uma ferramenta
              de criação de conteúdo com inteligência artificial que transforma
              sua ideia em uma obra-prima. Não importa se você está escrevendo
              um artigo de blog, um anúncio ou um post nas redes sociais, o
              gptMkt ajuda você a criar conteúdo de qualidade superior.
            </Typography>
            <Typography variant="h5">
              Não importa se você está escrevendo um artigo de blog, um anúncio
              ou um post nas redes sociais, o gptMkt ajuda você a criar conteúdo
              de qualidade superior.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Description;
