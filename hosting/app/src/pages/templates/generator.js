import { ArrowBackIos, CopyAll } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MultiInput from "../../components/inputs/Inputs";
import { getTemplates } from "../../calls/templates.calls";
import { Form, useLoaderData, useNavigate } from "react-router-dom";

import { httpsCallable } from "firebase/functions";
import { functions } from "../../configs/firebase.config";
import Loading from "../../components/loading/Loading";

export const templateLoader = async (request, params) => {
  const result = await getTemplates();
  return result.filter((template) => template.id === request.params.templateId);
};

const TextGenerator = () => {
  const [template, setTemplate] = useLoaderData();
  const navigate = useNavigate();

  String.prototype.interpolate = function (params) {
    const names = Object.keys(params);
    const vals = Object.values(params);
    return new Function(...names, `return \`${this}\`;`)(...vals);
  };

  const [values, setValues] = useState({});
  const [chatResponse, setChatResponse] = useState(false);
  const [chatLoading, setChatLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setChatResponse(false);

    let _values = values;
    
    template.inputs.map(input => {
      if (input.type === 'select') {
       _values = {...values, [input.name]: input.options[0].label}
      }
    })

    setChatLoading(true);
    const _template = template.prompt;
    const result = _template.interpolate(_values);

    const directChat = httpsCallable(functions, "direct-chat");

    directChat({ prompt: result }).then(async ({ data }) => {
      setChatResponse(data.content);
      setChatLoading(false);
    });
  };

  const handleReset = () => {
    navigate(0);
  };

  const [_, setCopiedText] = useState(null);
  const copy = async (text) => {
    if (!navigator?.clipboard) {
      console.log("Clipboard is not supported");
      return false;
    }
    try {
      await navigator.clipboard.writeText(text.split('"')[1]);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      return false;
    }
  };

  const [loadingMessage, setLoadingMessage] = useState("Aguarde...");
  useEffect(() => {
    const messages = [
      "Só mais um instante...",
      "Estamos quase lá...",
      "Deixando seu texto perfeito...",
    ];
    function random_item() {
      return messages[Math.floor(Math.random() * messages.length)];
    }
    const timerId = setInterval(
      () => setLoadingMessage(random_item(messages)),
      4000
    );
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <>
      <Stack
        direction="column"
        spacing={1}
        sx={{ minHeight: "90vh", height: "100%" }}
      >
        <Stack direction="row" alignItems="center">
          <Stack direction="column" spacing={1} mb={1} mr={1}>
            <Typography variant="h5">{template.label}</Typography>
            <Typography variant="subtitle1">{template.text}</Typography>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIos />
          </IconButton>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "column" }}
          sx={{ width: "100%", p: 0, pb: 2 }}
          spacing={2}
        >
          <Box sx={{ bgcolor: "#333", p: 1 }} component={Paper}>
            <Typography variant="h5" p={1}>
              Informações
            </Typography>
            <Divider />
            <Grid container px={1}>
              <MultiInput
                inputs={template.inputs || []}
                values={values}
                setValues={setValues}
                title=""
              />
            </Grid>
            <Divider />
            <Stack direction="row" justifyContent="flex-end" spacing={1} p={1}>
              <Button variant="outlined" color="inherit" onClick={handleReset}>
                Limpar
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={handleSubmit}
                type="submit"
              >
                {chatResponse ? "Gerar novamente" : "gerar texto"}
              </Button>
            </Stack>
          </Box>

          <Box sx={{ bgcolor: "#333", p: 1 }} component={Paper}>
            <Typography variant="h5" p={1}>
              Resultados
            </Typography>
            <Divider />

            {chatResponse ? (
              <>
                {template.type === "text" ? (
                  <>
                    {chatResponse.split("\n").map((item) => (
                      <Typography variant="subtitle1" p={.5}>
                        {item}
                      </Typography>
                    ))}
                  </>
                ) : (
                  <>
                    <List p={2}>
                      {chatResponse.split("\n").map((item) => (
                        <>
                          {item && (
                            <ListItem>
                              <ListItemText>{item}</ListItemText>
                              <Stack
                                direction="row"
                                spacing={1}
                                justifyContent="flex-end"
                              >
                                <IconButton onClick={() => copy(item)}>
                                  <CopyAll />
                                </IconButton>
                              </Stack>
                            </ListItem>
                          )}
                        </>
                      ))}
                    </List>
                  </>
                )}
              </>
            ) : (
              <>
                {chatLoading ? (
                  <Box>
                    <Loading loadingMessage={loadingMessage} />

                    <Typography variant="subtitle2" textAlign="center">
                      Pode levar até 30 segundos
                    </Typography>
                  </Box>
                ) : (
                  <>
                    <Typography p={4} variant="subtitle1">
                      Começe adicionando um tema ou uma descrição.
                    </Typography>
                  </>
                )}
              </>
            )}
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default TextGenerator;
