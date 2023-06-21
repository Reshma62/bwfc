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
  const StyledListItem = styled(ListItem)({
    fontFamily: "Manrope",
    fontSize: 16,
    textDecoration: "none",
    paddingLeft: 0,
  });
  const StyledLink = styled(Link)({
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    color: "#fff",
    textTransform: "capitalize",
  });
  let companyItem = ["About Us", "Careers", "Blog", "Pricing"];
  let productItem = [
    "Invoicing Platform",
    "Accounting Plateform",
    "Create Proposal",
    "Contracts",
  ];
  let reseroceItem = [
    "Proposal Template",
    "Invoice Template",
    "Tuturoial",
    "How to write a contract",
  ];
  return (
    <footer
      style={{
        background: "#1B1C31",


        color: "#fff",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ p: "110px 120px" }}
      >
        <Box sx={{ flexBasis: "50%" }}>
          <StaticImage src="../images/whitelogo.png" />
          <Typography
            sx={{
              color: "rgba(255, 255, 255, .4)",
              fontFamily: "Manrope",
              maxWidth: "520px",
              mt: "20px",
            }}
          >
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment.
          </Typography>
        </Box>
        <Stack direction={"row"} gap={5}>
          <Box>
            <Typography variant="h5">Company</Typography>
            <List>
              {companyItem.map((item) => (
                <StyledListItem>
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
                <StyledListItem>
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
              {reseroceItem.map((item) => (
                <StyledListItem>
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
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ p: "20px 110px",borderTop:"1px solid #fff" }}
      >
        <Typography>
          2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of
          Services
        </Typography>
        <Typography>Supported by Microsoft Startup</Typography>
      </Stack>
    </footer>
  );
};

export default Footer;
