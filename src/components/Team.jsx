import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Team() {
  return (
    <Box sx={{ top: "100px", position: "absolute", padding: '10px' }} id="team-section">
      <Grid container sx={{gap: '15px'}} >
        <Grid
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "5px",
            boxShadow: "0px 0px 3px 1px #000000aa",
            padding: "10px",
          }}
        >
          <Box>
            <img
              src={`${process.env.PUBLIC_URL}/assets/nanda.jpeg`}
              alt="nanda"
              width="350px"
            />
          </Box>
          <Box
            sx={{
              display: " flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              sx={{ padding: "10px", paddingBottom: "0px" }}
            >
              Nanda Kishore
            </Typography>
            <Typography sx={{ paddingBottom: "10px" }}>Co-Founder</Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ paddingBottom: "20px" }}>
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
        <Grid
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "5px",
            boxShadow: "0px 0px 3px 1px #000000aa",
            padding: "10px",
          }}
        >
          <Box>
            <img
              src={`${process.env.PUBLIC_URL}/assets/nanda.jpeg`}
              alt="nanda"
              width="350px"
            />
          </Box>
          <Box
            sx={{
              display: " flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5">Niresh</Typography>
            <Typography>Co-Founder</Typography>
          </Box>

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
