import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import bgwaveImage from "../images/bgwave.png";
const Balance = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgwaveImage})`,
        width: "1340px",
        maxWidth: "100%",
        margin: "0 auto",
      }}
    >
      <Stack
        direction={{ md: "row", xs: "column-reverse" }}
        spacing={8}
        alignItems={"center"}
        sx={{}}
      >
        <Box
          sx={{
            flexBasis: { md: "48%", xs: "100%" },
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        >
          <StaticImage src="../images/Illustration.png" />
        </Box>
        <Stack sx={{ flexBasis: "50%" }}>
          <Typography
            variant="h5"
            sx={{
              color: "#3734A9",
              fontSize: "18px",
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
              fontSize: { lg: "50px", md: "35px", xs: "29px" },
              letterSpacing: "-3%",
              fontWeight: 700,
              lineHeight: { lg: "56px", md: "35px", xs: "32px" },
              maxWidth: "580px",
              fontFamily: "Manrope",
            }}
          >
            Receive payments quickly from anywhere
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              letterSpacing: "-2%",
              color: "#757095",
              maxWidth: "510px",
              my: { xs: "20px", md: "30px" },
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
                p: "15px 39px",
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
      </Stack>
    </Box>
  );
};

export default Balance;
