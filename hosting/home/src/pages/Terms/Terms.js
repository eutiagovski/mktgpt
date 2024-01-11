import { useState, useEffect } from "react";
import {  Typography, Stack, Container } from "@mui/material";

import usageTerms from "./terms/UsageTerms.md";
import PrivacyTerms from "./terms/PrivacyTerms.md";

const Terms = ({ term }) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(term === "usage" ? usageTerms : PrivacyTerms)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        const split = text.split("\r\n");
        setMarkdown(split);
      });
  }, []);
  return (
      <Container maxWidth="lg">
        <Typography variant="h3">{markdown[0]}</Typography>
        <Stack
          direction="column"
          spacing={2}
          sx={{ maxHeight: 600, overflow: "auto", mt:2 }}
        >
          <Typography variant="h6">{markdown[2]}</Typography>

          {markdown.length >= 2 &&
            markdown.slice(3).map((item, index) => (
              <>
                {index % 2 === 0 && <Typography variant="">{item}</Typography>}
                {index % 2 !== 0 && <Typography variant="">{item}</Typography>}
              </>
            ))}
        </Stack>
      </Container>
  );
};

export default Terms;
