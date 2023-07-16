import React from "react";
import { AppBar, Box, Toolbar, styled, useMediaQuery } from "@mui/material";

import { StaticImage } from "gatsby-plugin-image";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    background: "transparent",
    width: "1600px",
    maxWidth:"98%",
    margin: "0 auto",
    justifyContent: "space-between",
  });
  const matches = useMediaQuery("(max-width:960px)");

  return (
    <Box>
      <AppBar position="static" sx={{ bgcolor: "transparent", boxShadow: 0 }}>
        <StyledToolbar
        /*   sx={{
            width: {
              sm: "500px",
            },
          }} */
        >
          <Box>
            <StaticImage src="../images/logo.png" />
          </Box>
          {!matches && <DesktopMenu />}
          {matches && <MobileMenu />}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
