import {
  Box,
  Button,
  useMediaQuery,
  Link,
  ListItem,
  List,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Link as NavLink } from "gatsby";
import styled from "@emotion/styled";
const MobileMenu = () => {
  const [openNav, setOpenNav] = useState(false);
  const StyledListItem = styled(ListItem)({
    fontFamily: "Manrope",
    fontSize: 16,
    textDecoration: "none",
  });
  const StyledLink = styled(Link)({
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    color: "#000",
    textTransform: "capitalize",
  });
  let navItem = ["Products", "Template", "Blog", "Pricing"];
  const openMoblieMenu = () => {
    setOpenNav(!openNav);
  };
  return (
    <Box>
      <Menu onClick={openMoblieMenu} sx={{ bgcolor: "red" }} />
      {openNav && (
        <Box sx={{ position: "absolute", right: 0 }}>
          <List sx={{ display: "block" }}>
            {navItem.map((item) => (
              <StyledListItem>
                <StyledLink component={NavLink} to="/">
                  {item} <KeyboardArrowDown />
                </StyledLink>
              </StyledListItem>
            ))}
          </List>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button
              variant="text"
              sx={{ color: "#3734A9", mr: "20px", textTransform: "capitalize" }}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#3734A9",
                p: "16px 35px",
                textTransform: "capitalize",
              }}
            >
              Start Free
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};
export default MobileMenu