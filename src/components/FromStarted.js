import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import bgwaveImage from "../images/bgwave.png";

const FromStarted = () => {
  return (
    <Box
      sx={{
        maxWidth: "1340px",
        margin: "0 auto",
        background: "#F3F7FA",
        borderRadius: "20px",

        mb: "73px",
      }}
    >
      <Stack
        direction={"row"}
        spacing={8}
        alignItems={"center"}
        sx={{ p: "75px 68px" }}
      >
        <Stack sx={{ flexBasis: "50%", mt: "50px !important" }}>
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
        </Stack>
        <Box
          sx={{
            flexBasis: "50%",
          }}
        >
          <Box maxWidth={"556px"}>
            <Typography
              variant="h5"
              sx={{
                color: "rgba(55, 52, 169, 1)",
                fontSize: "28px",
                textTransform: "capitalize",
                fontWeight: 700,
                mb: "25px",
                fontFamily: "Manrope",
              }}
            >
              Get Started for Free
            </Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              placeholder="Password"
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              placeholder="Password"
              sx={{ my: 3 }}
            />
            <Box>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  background: "#FF7F5C",
                  p: "15px 39px",
                  textTransform: "capitalize",
                  mr: 7,
                  display: "inline-block",
                  boxShadow:
                    "0px 67px 80px rgba(255, 127, 92, 0.07), 0px 43.4259px 46.8519px rgba(255, 127, 92, 0.0531481), 0px 25.8074px 25.4815px rgba(255, 127, 92, 0.0425185), 0px 13.4px 13px rgba(255, 127, 92, 0.035), 0px 5.45926px 6.51852px rgba(255, 127, 92, 0.0274815), 0px 1.24074px 3.14815px rgba(255, 127, 92, 0.0168519)",
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default FromStarted;
