import React, { useState } from "react";
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
import { useTheme } from '@mui/material/styles';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (isOpen) => {
    setMenuOpen(isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust for the app bar height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
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
          { text: "About Us", id: "team-section" },
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
    <header>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Typography variant="h6">NK Solutions</Typography>
            {/* <IconButton onClick={() => toggleDrawer(!menuOpen)} edge="start">
              <MenuIcon />
            </IconButton> */}
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
    </header>
  );
}

export default Header;
