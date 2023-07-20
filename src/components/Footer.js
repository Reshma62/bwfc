import React from "react";
import {
  Box,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { Link as NavLink } from "gatsby";

const Footer = () => {
  const StyledListItem = styled(ListItem)(({ theme }) => ({
    fontFamily: "Manrope",
    fontSize: 16,
    textDecoration: "none",
    paddingLeft: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  }));

  const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    color: "#fff",
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  }));

  let companyItem = ["About Us", "Careers", "Blog", "Pricing"];
  let productItem = [
    "Invoicing Platform",
    "Accounting Plateform",
    "Create Proposal",
    "Contracts",
  ];
  let resourceItem = [
    "Proposal Template",
    "Invoice Template",
    "Tutorial",
    "How to Write a Contract",
  ];

  return (
    <footer
      style={{
        background: "#1B1C31",
        color: "#fff",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        sx={{ p: { xs: "20px", sm: "40px 20px" } }}
      >
        <Box sx={{ flexBasis: { xs: "100%", sm: "50%" } }}>
          <StaticImage src="../images/whitelogo.png" alt="Logo" />
          <Typography
            sx={{
              color: "rgba(255, 255, 255, .4)",
              fontFamily: "Manrope",
              maxWidth: "520px",
              mt: "20px",
              fontSize: { xs: 12, sm: 16 },
              lineHeight: { xs: 1.6, sm: 1.8 },
            }}
          >
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment.
          </Typography>
        </Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={5}
          sx={{ mt: { xs: 4, sm: 0 } }}
        >
          <Box>
            <Typography variant="h5">Company</Typography>
            <List>
              {companyItem.map((item) => (
                <StyledListItem key={item}>
                  <StyledLink component={NavLink} to="/">
                    {item}
                  </StyledLink>
                </StyledListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Typography variant="h5">Product</Typography>
            <List>
              {productItem.map((item) => (
                <StyledListItem key={item}>
                  <StyledLink component={NavLink} to="/">
                    {item}
                  </StyledLink>
                </StyledListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Typography variant="h5">Resources</Typography>
            <List>
              {resourceItem.map((item) => (
                <StyledListItem key={item}>
                  <StyledLink component={NavLink} to="/">
                    {item}
                  </StyledLink>
                </StyledListItem>
              ))}
            </List>
          </Box>
        </Stack>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          p: { xs: "10px 20px", sm: "20px 110px" },
          borderTop: "1px solid #fff",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 10, sm: 12 },
            textAlign: { xs: "center", sm: "left" },
            mb: { xs: 2, sm: 0 },
          }}
        >
          2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of
          Services
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 10, sm: 12 },
            textAlign: { xs: "center", sm: "right" },
          }}
        >
          Supported by Microsoft Startup
        </Typography>
      </Stack>
    </footer>
  );
};

export default Footer;
