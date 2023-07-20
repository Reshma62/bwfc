import React from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { PlayCircle } from "@mui/icons-material";
import bgwaveImage from "../images/bannerWave.png";
const Banner = () =>
{
  const theme = useTheme()
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgwaveImage})`,
        backgroundRepeat: "no-repeat",
        maxWidth: "1400px",
        margin: "0 auto",
        mt: "140px",
        mt: { md: "80px", xs: "30px", lg: "140px" },
      }}
    >
      <Stack direction={"column"} sx={{ flexDirection: { md: "row" } }}>
        <Stack sx={{ flexBasis: "50%" }} justifyContent={"center"}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { md: "50px", xs: "23px", lg: "60px" },
              fontWeight: 800,
              letterSpacing: "-3%",
            }}
          >
            Managing business payments has never been easier
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: { md: "16px", xs: "16px", lg: "22px" },
              color: "#64607D",
              mt: "22px",
              maxWidth: "446px",
            }}
          >
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </Typography>
          <Box sx={{ mt: "26px", display: "flex" }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#3734A9",
                // p: { xs: "5px 8px", md: "15px 39px" },
                p: theme.breakpoints.between("md", "lg")
                  ? "10px 15px"
                  : "15px 39px",
                textTransform: "capitalize",
                borderRadius: theme.breakpoints.between("md", "lg")
                  ? "40px"
                  : "47px",
                mr: { md: 4, xs: 1, lg: 7 },
                fontSize: { xs: "12px !important", md: "25px !important" },
              }}
            >
              Get Started
            </Button>
            <Button
              startIcon={
                <PlayCircle
                  sx={{
                    fontSize: { xs: "20px !important", md: "42px !important" },
                  }}
                />
              }
              variant="text"
              sx={{
                textTransform: "capitalize",
                fontSize: { xs: "12px !important", md: "20px !important" },
                fontWeight: 500,
                letterSpacing: "-2%",
              }}
            >
              See How It Works
            </Button>
          </Box>
        </Stack>
        <Box sx={{ flexBasis: "50%", mt: { xs: 5, md: 0 } }}>
          <StaticImage src="../images/banner.png" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Banner;
