import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import bgwaveImage from "../images/bgwave.png";

const Account = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgwaveImage})`,
        maxWidth: "1340px",
        margin: "0 auto",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={8}
        alignItems={{ xs: "center", md: "flex-start" }}
        mt={{ xs: "30px", md: "50px" }}
      >
        <Stack flexBasis={{ xs: "100%", md: "50%" }}>
          <Typography
            variant="h5"
            sx={{
              color: "#3734A9",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              textTransform: "uppercase",
              fontWeight: 800,
              mb: "25px",
              fontFamily: "Manrope",
            }}
          >
            Our Feature
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "32px", sm: "40px", md: "50px" },
              letterSpacing: "-2px",
              fontWeight: 700,
              lineHeight: "56px",
              maxWidth: "496px",
              fontFamily: "Manrope",
            }}
          >
            All payments are linked to your Financy account
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              letterSpacing: "-2%",
              color: "#757095",
              maxWidth: "510px",
              my: "30px",
              fontFamily: "Manrope",
            }}
          >
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.{" "}
          </Typography>
          <Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#3734A9",
                p: { xs: "12px 32px", sm: "15px 39px" },
                textTransform: "capitalize",
                mr: 7,
                display: "inline-block",
                fontFamily: "Manrope",
              }}
            >
              Get Started
            </Button>
          </Box>
        </Stack>
        <Box
          flexBasis={{ xs: "100%", md: "48%" }}
          sx={{
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        >
          <StaticImage src="../images/account.png" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Account;
