import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Chip,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTemplates } from "../../calls/templates.calls";
import useLocalStorage from "../../hooks/useLocalStorage";

const TemplatesHome = () => {
  const [templates, setTemplates] = useState([]);
  const [showTemplates, setShowTemplates] = useState([]);
  const [loadingTemplates, setLoadingTemplates] = useState(false);
  const [categories, setCategories] = useState([
    { label: "Todos", color: "warning", active: true },
    { label: "Favoritos", color: "warning", active: true },
  ]);
  const [userFavorites, setUserFavorites] = useLocalStorage("userFavorites", {
    templates: [],
  });
  const navigate = useNavigate();

  const handleFavoritize = (e) => {
    if (userFavorites.templates.includes(e)) {
      var { templates } = userFavorites;
      templates = templates.filter((template) => template !== e);
      setUserFavorites({ ...userFavorites, templates: templates });
    } else {
      setUserFavorites({
        ...userFavorites,
        templates: [...userFavorites.templates, e],
      });
    }
  };

  const handleCategorieFilter = (e) => {
    setCategories(
      categories.map((categorie) => {
        if (categorie.label === e.label) {
          return { ...categorie, active: !categorie.active };
        } else {
          return categorie;
        }
      })
    );
  };

  useEffect(() => {
    setLoadingTemplates(true);
    getTemplates().then((templates) => {
      var _categories = [];
      var _templates = [];

      if (window.location.hostname === "localhost") {
        _templates = templates;
      } else {
        _templates = templates.filter((template) => template.released);
      }

      _templates.map((template) => {
        template.categories.map((categorie) => _categories.push(categorie));
      });

      _categories = _categories
        .filter((value, index, array) => array.indexOf(value) === index)
        .map((categorie) => ({
          label: categorie,
          color: "success",
          active: false,
        }));

      setCategories([...categories, ..._categories]);
      setTemplates(_templates);
      setShowTemplates(_templates);
      setLoadingTemplates(false);
    });
  }, []);

  useEffect(() => {
    const _categories = categories
      .filter((categorie) => categorie.active)
      .map((categorie) => categorie.label);

    var _templates = [];

    if (_categories.includes("Todos")) {
      _templates = templates;
    } else if (_categories.includes("Favoritos")) {
      _templates = templates.filter((template) =>
        userFavorites.templates.includes(template.id)
      );
    } else {
      templates.map((template) => {
        template.categories.map((categorie) => {
          if (_categories.includes(categorie)) {
            if (!_templates.includes(template)) {
              _templates.push(template);
            }
          }
        });
      });
    }

    setShowTemplates(_templates);
  }, [categories]);
  return (
    <>
      <Stack direction="column" spacing={1}>
        <Typography variant="h4" fontWeight={600} p={1}>
          Criar com Modelos
        </Typography>
        <Grid container spacing={0}>
          {categories.map((categorie) => (
            <Grid item p={1} key={categorie}>
              <Chip
                label={categorie.label}
                sx={{ cursor: "pointer" }}
                color={
                  categorie.active ? categorie.color || "success" : "default"
                }
                onClick={() => handleCategorieFilter(categorie)}
              />
            </Grid>
          ))}
        </Grid>
        <Stack
          direction="column"
          sx={{ overflow: "auto", minHeight: "60vh", height: "100%" }}
        >
          <Grid container spacing={0}>
            {loadingTemplates && (
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CircularProgress />
              </Box>
            )}
            {showTemplates.map((card) => (
              <Grid item md={3} p={1} key={card.name}>
                <Paper
                  sx={{
                    width: "100%",
                    height: "100%",
                    bgcolor: "#333",
                    color: "#000",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    p: 1,
                    py: 2,
                    cursor: "pointer",
                  }}
                >
                  <Box display="flex" justifyContent="flex-end">
                    <IconButton onClick={() => handleFavoritize(card.id)}>
                      {userFavorites.templates.includes(card.id) ? (
                        <Favorite color="error" />
                      ) : (
                        <FavoriteBorder />
                      )}
                    </IconButton>
                  </Box>

                  <Box sx={{ px: 1 }}>
                    <IconButton
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        textAlign: "left",
                        alignItems: "flex-start",
                        p: 0,
                      }}
                      variant="square"
                      onClick={() => navigate(card.id)}
                      disabled={card.disabled}
                    >
                      {/* <Handshake /> */}
                      <Avatar src={card.icon} />
                      <Typography variant="h6" textAlign="left">
                        {card.label}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        textAlign="left"
                        color="default"
                      >
                        {card.text}
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        {card.chips?.map((chip) => (
                          <Chip color={chip.color} label={chip.label} />
                        ))}
                      </Stack>
                    </IconButton>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </>
  );
};

export default TemplatesHome;
