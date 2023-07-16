import React from "react";
import { Box, Button, Link, List, ListItem, styled } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Link as NavLink } from "gatsby";

const DesktopMenu = () => {
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
  let navItem = ["Products", "Template", "Blog", "Pricing"];
  return (
    <>
      <List sx={{ display: "flex" }}>
        {navItem.map((item) => (
          <StyledListItem>
            <StyledLink component={NavLink} to="/">
              {item} <KeyboardArrowDown />
            </StyledLink>
          </StyledListItem>
        ))}
      </List>
      <Box>
        <Button
          variant="text"
          sx={{ color: "#3734A9", mr: "20px", textTransform: "capitalize" }}
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
      </Box>
    </>
  );
};

export default DesktopMenu;
