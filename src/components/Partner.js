import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

const Partner = () => {
  return (
    <Box sx={{ textAlign: "center", mb: "73px" }}>
      <Typography variant="p" sx={{ fontSize: "22px" }}>
        Over 32k+ software businesses growing with AR Shakir
      </Typography>
      <Stack
        direction={"row"}
        spacing={5}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ mt: "36px" }}
      >
        <StaticImage src="../images/openZeplin.png.png" />
        <StaticImage src="../images/oracel.png" />
        <StaticImage src="../images/morphes.png" />
        <StaticImage src="../images/monday.png" />
        <StaticImage src="../images/sigment.png" />
        <StaticImage src="../images/samsung.png" />
      </Stack>
    </Box>
  );
};

export default Partner;
