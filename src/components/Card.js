import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import bgwaveImage from "../images/bgwave.png";
const Card = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgwaveImage})`,
        maxWidth: "1340px",
        margin: "0 auto",
      }}
    >
      <Stack direction={"row"} spacing={8} alignItems={"center"}>
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
              fontSize: "50px",
              letterSpacing: "-3%",
              fontWeight: 700,
              lineHeight: "56px",
              maxWidth: "580px",
              fontFamily: "Manrope",
            }}
          >
            Receive payments quickly from anywhere
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "18px",
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
        <Box
          sx={{
            flexBasis: "48%",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        >
          <StaticImage src="../images/Cards.png" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Card;
