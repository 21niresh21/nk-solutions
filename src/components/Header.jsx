import {
    AppBar,
    Drawer,
    Grid,
    IconButton,
    Toolbar,
    Typography,
    Box,
    ListItem,
    ListItemButton,
    ListItemText,
    List,
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
  import { useState } from "react";
  
  function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleDrawer = (isOpen) => {
      setMenuOpen(isOpen);
    };
  
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        toggleDrawer(false); // Close drawer after navigation
      }
    };
  
    const DrawerList = (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => toggleDrawer(false)}
      >
        <List>
          {[
            { text: "Services", id: "services-section" },
            { text: "The Team", id: "team-section" },
            { text: "About Us", id: "about-section" },
            { text: "Contact Us", id: "contact-section" },
          ].map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => scrollToSection(item.id)}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    return (
      <AppBar position="static">
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Typography variant="h6">NK Solutions</Typography>
            <IconButton onClick={() => toggleDrawer(!menuOpen)} edge="start">
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={menuOpen}
              onClose={() => toggleDrawer(false)}
            >
              {DrawerList}
            </Drawer>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Header;
  