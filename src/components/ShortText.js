import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

const ShortText = () => {
  return (
    <Box
      sx={{
        maxWidth: "1340px",
        margin: "0 auto",
        my: "73px",
        boxShadow: " 0px 24px 34px rgba(0, 0, 0, 0.03)",
        border: "1px solid #DEE1E6",
        borderRadius: "15px",
        pl: "28px",
        py: "40px",
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography
          fontSize={"22px"}
          color={"#757095"}
          maxWidth={"795px"}
          fontFamily={"Manrope"}
          letterSpacing={"-0.02em"}
        >
          And residence for met the estimable disposing. Mean if he they been no
          hold mr. Is at much do made took held help.
        </Typography>
        <Box>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FF7F5C",
              p: "16px 64px",
              textTransform: "capitalize",
              mr: 7,
              display: "inline-block",
              fontFamily: "Manrope",
              boxShadow:
                "0px 100px 80px rgba(255, 127, 92, 0.07), 0px 64.8148px 46.8519px rgba(255, 127, 92, 0.0531481), 0px 38.5185px 25.4815px rgba(255, 127, 92, 0.0425185), 0px 20px 13px rgba(255, 127, 92, 0.035), 0px 8.14815px 6.51852px rgba(255, 127, 92, 0.0274815), 0px 1.85185px 3.14815px rgba(255, 127, 92, 0.0168519)",
              borderRadius: "47px",
            }}
          >
            Get Started
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default ShortText;
