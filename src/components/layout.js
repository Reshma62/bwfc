import React from "react";
import { Box, Container } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  // console.log(children);
  return (
    <>
      <Navbar />
      <Container

        maxWidth={false}
        sx={{ width: "1600px", maxWidth:"98%", mx: "auto", fontFamily: "Manrope" }}
      >
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
