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
          fontSize: "40px",
          fontWeight: 800,
          letterSpacing: "-2px",
          lineHeight: "48px",
          fontFamily: "Manrope",
          maxWidth: "324px",
          mb: "40px",
        }}
      >
        Check what our clients are saying
      </Typography>

      <Swiper rewind={true} navigation={true} modules={[Navigation]}>
        {arr.map((item) => (
          <SwiperSlide>
            <Stack direction={"row"} spacing={8}>
              <Box flexBasis={"50%"}>
                <StaticImage src="../images/client.png" />
              </Box>
              <Box flexBasis={"50%"}>
                <StaticImage src="../images/coma.png" />
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    fontWeight: 800,
                    maxWidth: "300px",
                    my: "16px",
                  }}
                >
                  Save Time Managing Social Media For Your Business
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    fontSize: "16px",
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
                    fontSize: "16px",
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
                <Typography>Angela Taylor</Typography>
                <Typography>CEO SAMSUNG</Typography>
              </Box>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Stack direction={"row"} spacing={8}>
        <Box flexBasis={"50%"}>
          <StaticImage src="../images/client.png" />
        </Box>
        <Box flexBasis={"50%"}>
          <Typography variant="h4">
            Save Time Managing Social Media For Your Business
          </Typography>
          <Typography variant="p">
            Is be upon sang fond must shew. Really boy law county she unable her
            sister. Feet you off its like like six. Among sex are leave law
            built now. In built table in an rapid blush. Merits behind on afraid
            or warmly.
          </Typography>
          <Typography variant="p">
            Believing neglected so so allowance existence departure in. In
            design active temper be uneasy.
          </Typography>
          <Rating
            name="text-feedback"
            value={5}
            readOnly
            precision={0.5}
            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <Typography variant="p">Angela Taylor</Typography>
          <Typography variant="p">CEO SAMSUNG</Typography>
        </Box>
      </Stack> */}
    </Box>
  );
};

export default Testimonials;
