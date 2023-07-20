import React from "react";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

const Chooseme = () => {
  let arr = [1, 2, 3, 4];
  return (
    <Box
      sx={{
        background: "#F3F7FA",
        borderRadius: "20px",
        py: { xs: "30px", md: "50px" },
        maxWidth: "1340px",
        margin: "0 auto",
        mb: "73px",
      }}
    >
      <Box sx={{ textAlign: "center", mb: { xs: "40px", md: "70px" } }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "18px", sm: "20px", md: "24px" },
            fontFamily: "Manrope",
            fontWeight: 800,
            color: "#3734A9",
          }}
        >
          Why Financy
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "32px", sm: "40px", md: "50px" },
            fontFamily: "Manrope",
            fontWeight: 700,
          }}
        >
          Why Choose Us
        </Typography>
      </Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        flexWrap={{ xs: "nowrap", md: "wrap" }}
        gap={5}
        px={{ xs: "20px", md: "81px" }}
      >
        {arr.map((item) => (
          <Box sx={{ flexBasis: { xs: "100%", md: "47%" } }} key={item}>
            <List
              sx={{
                background: "#fff",
                p: { xs: "20px 15px", md: "30px 15px" },
                borderRadius: "20px",
              }}
            >
              <ListItem

                alignItems={{ xs: "center", md: "flex-start" }}
                sx={{ gap: { xs: "20px", md: "20px" }, flexDirection:{xs: "column", md:"row"} }}
              >
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: "20px", sm: "24px" },
                        fontFamily: "Manrope",
                        fontWeight: 800,
                      }}
                    >
                      No Extra Fee
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "16px", sm: "18px" },
                        color: "#757095",
                        fontFamily: "Manrope",
                        lineHeight: "1.6",
                        maxWidth: { xs: "100%", sm: "320px" },
                      }}
                    >
                      End-to-end payments and financial management in a single
                      solution. Meet the right platform.
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Chooseme;
