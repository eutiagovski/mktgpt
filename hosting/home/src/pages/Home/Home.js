import React from "react";
import {
  CssBaseline,
  Toolbar,
} from "@mui/material";
import StickyFooter from "./components/footer";
import CalltoAction from "./components/call-to-action";
import Description from "./components/description";
import Navbar from "../../components/navbar/Navbar";
import Benefects from "./components/benefects";
import FrequentAsks from "./components/frequentAsks";
import { useState } from "react";
import Header from "./components/header";

const HomePage = () => {
  


  return (
    <>
      <CssBaseline />
      <Navbar />
      <Toolbar />
      <div id="header">
        <Header />
      </div>
      
    </>
  );
};

export default HomePage;
