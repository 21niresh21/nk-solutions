import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Team() {
  return (
    <Box sx={{ top: "100px", position: "absolute" }}>
      <Grid container>
        <Grid sx={{ flexGrow: 1 }}>
          <Box></Box>
          <Typography>Nanda</Typography>
          <Stack direction="row" spacing={2}>
            <Grid container sx={{ gap: "10px", flexWrap: "nowrap" }}>
              <InstagramIcon />
              <Typography>Instagram</Typography>
            </Grid>

            <Grid container sx={{ gap: "10px", flexWrap: "nowrap" }}>
              <LinkedInIcon />
              <Typography>LinkedIn</Typography>
            </Grid>
          </Stack>
        </Grid>
        <Grid sx={{ flexGrow: 1 }}>
          <Box></Box>
          <Typography>Nanda</Typography>
          <Stack direction="row" spacing={2}>
            <Grid container sx={{ gap: "10px", flexWrap: "nowrap" }}>
              <InstagramIcon />
              <Typography>Instagram</Typography>
            </Grid>

            <Grid container sx={{ gap: "10px", flexWrap: "nowrap" }}>
              <LinkedInIcon />
              <Typography>LinkedIn</Typography>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Team;
