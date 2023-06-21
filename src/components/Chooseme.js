import React from "react";

import { Image } from "@mui/icons-material";
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
        py: "50px",
        maxWidth: "1340px",
        margin: "0 auto",
        mb: "73px",
      }}
    >
      <Box sx={{ textAlign: "center", mb: "70px" }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
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
            fontSize: "50px",
            fontFamily: "Manrope",
            fontWeight: 700,
          }}
        >
          Why Choose Us
        </Typography>
      </Box>
      <Stack
        // justifyContent={"space-between"}
        direction={"row"}
        flexWrap={"wrap"}
        gap={5}
        sx={{ px: "81px" }}
      >
        {arr.map((item) => (
          <Box sx={{ flexBasis: "47%" }}>
            <List
              sx={{
                background: "#fff",
                p: "30px 15px",
                borderRadius: "20px",
              }}
            >
              <ListItem alignItems="flex-start" sx={{ gap: "20px" }}>
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "24px",
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
                        fontSize: "18px",
                        color: "#757095",
                        fontFamily: "Manrope",
                        maxWidth: "320px",
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
