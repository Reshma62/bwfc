import React from "react";
import { Box, Rating, Stack, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { Star } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const Testimonials = () => {
  let arr = [1, 2, 3, 4, 5, 6];
  return (
    <Box sx={{ maxWidth: "1340px", margin: "0 auto" }}>
      <Typography
        variant="h6"
        sx={{
          fontSize: "14px",
          color: "#3734A9",
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        Testimonials
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "32px", sm: "40px" },
          fontWeight: 800,
          letterSpacing: "-2px",
          lineHeight: { lg: "48px", md: "40px", xs: "35px" },
          fontFamily: "Manrope",
          maxWidth: "324px",
          mb: "40px",
        }}
      >
        Check what our clients are saying
      </Typography>

      <Swiper rewind={true} navigation={true} modules={[Navigation]}>
        {arr.map((item) => (
          <SwiperSlide key={item}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={8}
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              <Box
                flexBasis={{ xs: "100%", md: "50%" }}
                sx={{ textAlign: { xs: "center", md: "initial" } }}
              >
                <StaticImage src="../images/client.png" />
              </Box>
              <Box
                flexBasis={{ xs: "100%", md: "50%" }}
                sx={{ textAlign: { xs: "center", md: "initial" } }}
              >
                <StaticImage src="../images/coma.png" />
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Manrope",
                    fontSize: { xs: "18px", sm: "20px" },
                    fontWeight: 800,
                    maxWidth: "300px",
                    mx: { xs: "auto", md: "0" },
                    my: "16px",
                  }}
                >
                  Save Time Managing Social Media For Your Business
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    fontSize: { xs: "14px", sm: "16px" },
                    fontWeight: 400,
                    maxWidth: "450px",
                    mb: "16px",
                    color: "#757095",
                  }}
                >
                  Is be upon sang fond must shew. Really boy law county she
                  unable her sister. Feet you off its like like six. Among sex
                  are leave law built now. In built table in an rapid blush.
                  Merits behind on afraid or warmly.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    fontSize: { xs: "14px", sm: "16px" },
                    fontWeight: 400,
                    maxWidth: "450px",
                    mb: "16px",
                    color: "#757095",
                  }}
                >
                  Believing neglected so so allowance existence departure in. In
                  design active temper be uneasy.
                </Typography>
                <Rating
                  name="text-feedback"
                  value={5}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <Star style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px" },
                    fontWeight: 500,
                  }}
                >
                  Angela Taylor
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px" },
                    fontWeight: 500,
                  }}
                >
                  CEO SAMSUNG
                </Typography>
              </Box>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;
