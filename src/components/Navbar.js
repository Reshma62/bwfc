import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  Divider,
  styled,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () =>
{
   const StyledListItem = styled(ListItem)({
     fontFamily: "Manrope",
     fontSize: 16,
     textDecoration: "none",
   });
   const StyledLink = styled(Link)({
     textDecoration: "none",
     display: "flex",
     alignItems: "center",
     color: "#000",
     textTransform: "capitalize",
   });
  const isMobile = useMediaQuery("(max-width:960px)");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuIconClick = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const menuItems = ["Products", "Template", "Blog", "Pricing"];

  return (
    <AppBar position="static" sx={{ bgcolor: "#ffffff", color: "#000000" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <StaticImage src="../images/logo.png"/>
        </Box>
        {!isMobile && (
          <Box>
            {menuItems.map((item) => (
              <Button color="inherit" key={item}>
                {item}
              </Button>
            ))}
          </Box>
        )}
        <Box>
          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleMenuIconClick}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Button
                variant="text"
                sx={{
                  color: "#3734A9",
                  mr: "20px",
                  textTransform: "capitalize",
                }}
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#3734A9",
                  p: "16px 35px",
                  textTransform: "capitalize",
                }}
              >
                Start Free
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
      {isMobile && (
        <Drawer anchor="right" open={isMenuOpen} onClose={handleMenuClose}>
          <Box
            sx={{
              width: "250px",
              paddingTop: "20px",
            }}
            role="presentation"
            onClick={handleMenuClose}
            onKeyDown={handleMenuClose}
          >
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", pr: "8px" }}
            >
              <IconButton edge="end" color="inherit" onClick={handleMenuClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider />
            <List>
              {menuItems.map((item) => (
                <StyledListItem button key={item}>
                  <Button color="inherit">{item}</Button>
                </StyledListItem>
              ))}
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  px: "16px",
                  pb: "16px",
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    color: "#3734A9",
                    mr: "20px",
                    textTransform: "capitalize",
                    mt: "10px",
                  }}
                >
                  Sign In
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#3734A9",
                    p: "16px 35px",
                    textTransform: "capitalize",
                    mt: "20px",
                  }}
                >
                  Start Free
                </Button>
              </Box>
            </List>
          </Box>
        </Drawer>
      )}
    </AppBar>
  );
};

export default Navbar;
