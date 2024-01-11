import {
  Schedule,
  TrendingUp,
  Visibility,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Benefects = () => {
  const cards = [
    {
      title: "Economize tempo e esforço",
      text: "O gptMkt permite que você crie conteúdo de qualidade em questão de minutos, economizando horas de trabalho árduo",
      icon: <Schedule sx={{fontSize: 100}}/>,
    },
    {
      title: "Aumente sua visibilidade",
      text: "com conteúdo de qualidade superior, você se destaca da multidão e aumenta sua visibilidade online",
      icon: <Visibility sx={{fontSize: 100}}/>
    },
    {
      title: "Melhore seu ROI",
      text: "Conteúdo de qualidade superior atrai mais tráfego e aumenta as conversões, ajudando você a alcançar um melhor ROI.",
      icon: <TrendingUp sx={{fontSize: 100}}/>
    },
  ];
  return (
    <Stack direction="column" sx={{ height: '100%', bgcolor: "#D9D9D9", width: '100%', py: 10 }}>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent p={2}>
                {card.icon}
                  <Typography variant="h4">{card.title}</Typography>
                  <Typography>{card.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default Benefects;
