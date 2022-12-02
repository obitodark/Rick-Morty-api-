import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Grid,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  IconButton,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Menu = ({ children, props, window }) => {
  const history = useNavigate();
  let trigger = null;
  const navItems = ["Character", "Episode"];
  function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Rick & Morty
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          style={{
            // backgroundColor: trigger ? "654EC4" : "#1416271A",
            background: "rgba(20, 22, 39,0.8)",
            backdropFilter: "blur(10px)",
            boxShadow: trigger
              ? "5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important"
              : undefined,
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography variant="h6" component="div">
                  Api Rick & Morty
                </Typography>
              </Grid>
              <Grid iten sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    onClick={() => history(`/${item}`)}
                    key={item}
                    sx={{ color: "#fff", textTransform: "capitalize" }}
                  >
                    {item}
                  </Button>
                ))}
              </Grid>
            </Grid>
            <Box component="nav">
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </Box>
          </Toolbar>
          {/* <Grid container>
            <Grid item>
              <Button>
                Cha
              </Button>
            </Grid>
          </Grid> */}
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container maxWidth="xl">
        <Box sx={{ my: 2 }}>{children}</Box>
      </Container>
    </React.Fragment>
  );
};
export default Menu;
