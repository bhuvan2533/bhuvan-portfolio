import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.css";
import logo from "../../images/BSLogo.png";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const [colorChange, setColorchange] = React.useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 30) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        className={colorChange ? "navbar1 colorChange" : "navbar"}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <img src={logo} alt="" />
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                marginLeft: "12px",
              }}
            >
              <img src={logo} alt="" />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <Button
                className="navItems"
                href="#"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2.5,
                  mx: 5,
                  color: "white",
                  padding: "5px 15px",
                  fontSize: "1.03rem",
                  fontWeight: "300",
                  display: "block",
                  "&:hover": {
                    transition: "0.4s",
                    color: "#2ee6e3",
                    backgroundColor: "rgba(40, 39, 39, 0.9)",
                    boxShadow: "1",
                  },
                }}
              >
                Home
              </Button>
              <Button
                className="navItems"
                href="#about"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2.5,
                  mx: 5,
                  color: "white",
                  padding: "5px 15px",
                  fontSize: "1.03rem",
                  fontWeight: "300",
                  display: "block",
                  "&:hover": {
                    transition: "0.4s",
                    color: "#2ee6e3",
                    backgroundColor: "rgba(40, 39, 39, 0.9)",
                    boxShadow: "1",
                  },
                }}
              >
                About
              </Button>
              <Button
                className="navItems"
                href="#project"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2.5,
                  mx: 5,
                  color: "white",
                  padding: "5px 15px",
                  fontSize: "1.03rem",
                  fontWeight: "300",
                  display: "block",
                  "&:hover": {
                    transition: "0.4s",
                    color: "#2ee6e3",
                    backgroundColor: "rgba(40, 39, 39, 0.9)",
                    boxShadow: "1",
                  },
                }}
              >
                Projects
              </Button>
              <Button
                className="navItems"
                href="#contact"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2.5,
                  mx: 5,
                  color: "white",
                  padding: "5px 15px",
                  fontSize: "1.03rem",
                  fontWeight: "300",
                  display: "block",
                  "&:hover": {
                    transition: "0.4s",
                    color: "#2ee6e3",
                    backgroundColor: "rgba(40, 39, 39, 0.9)",
                    boxShadow: "1",
                  },
                }}
              >
                Contact
              </Button>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "block", md: "none" },
                position: "absolute",
                right: "12px",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem href="#" onClick={handleCloseNavMenu}>
                  <Button
                    href="#"
                    style={{ color: "rgba(0 ,0,0,0.8)" }}
                    textAlign="center"
                  >
                    Home
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button
                    href="#about"
                    style={{ color: "rgba(0 ,0,0,0.8)" }}
                    textAlign="center"
                  >
                    About
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button
                    href="#project"
                    style={{ color: "rgba(0 ,0,0,0.8)" }}
                    textAlign="center"
                  >
                    Projects
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button
                    href="#contact"
                    style={{ color: "rgba(0 ,0,0,0.8)" }}
                    textAlign="center"
                  >
                    Contact
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default ResponsiveAppBar;
