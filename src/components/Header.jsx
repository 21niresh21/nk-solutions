import { AppBar, Grid, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Grid>
            <Typography>NK Solutions</Typography>
          </Grid>
          <Grid sx={{ display: "flex", gap: "30px" }}>
            <Grid>Services and Tech</Grid>
            <Grid>The Team</Grid>
            <Grid>About Us</Grid>
            <Grid>Contact Us</Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
