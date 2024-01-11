import React from "react";
import { Box, CircularProgress, Typography } from '@mui/material';

const Loading = ({loadingMessage}) => {
  return (
    <Box
      sx={{
        height: "100%",
        minHeight: '30vh',
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
      <Typography variant='subtitle1'>
        {loadingMessage}
      </Typography>
    </Box>
  );
};

export default Loading;
