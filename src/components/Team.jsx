import { Box, Chip, Grid, IconButton, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Team() {
  return (
    <Box
      sx={{ top: "80px", position: "absolute", padding: "10px" }}
      id="team-section"
    >
      {/* <Typography variant="h4" sx={{ paddingBottom: "10px" }}>
        The Team
      </Typography> */}
      <Grid container sx={{ gap: "15px" }}>
        <Grid
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "5px",
            boxShadow: "0px 0px 3px 1px #000000aa",
            paddingBottom: "10px",
          }}
        >
          <Box>
            <img
              src={`${process.env.PUBLIC_URL}/assets/nanda.jpeg`}
              alt="nanda"
              width="410px"
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
            <Typography sx={{ paddingBottom: "5px" }}>Co-Founder</Typography>
          </Box>
          <Stack direction="row" spacing={2} >
            <Grid container sx={{ gap: "10px", flexWrap: "nowrap" }}>
              <IconButton component="a" href="https://www.instagram.com/nanda_kishore_b7">
                <InstagramIcon />
              </IconButton>

              {/* <Typography>Instagram</Typography> */}
            </Grid>

            <Grid container sx={{ gap: "10px", flexWrap: "nowrap" }}>
            <IconButton component="a" href="https://www.linkedin.com/in/nanda-kishore-899848204">
                <LinkedInIcon />
              </IconButton>
              {/* <Typography>LinkedIn</Typography> */}
            </Grid>
          </Stack>

          {/* <Stack direction="row" spacing={2} sx={{ paddingBottom: "20px" }}> */}
          <Grid
            container
            sx={{
              gap: "10px",
              flexWrap: "nowrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CallIcon fontSize="small" />
            <Typography>+91 9952402150</Typography>
          </Grid>

          <Grid
            container
            sx={{
              gap: "10px",
              flexWrap: "nowrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EmailIcon fontSize="small" />
            <Typography>pgsbssnk@gmail.com</Typography>
          </Grid>
          {/* </Stack> */}
        </Grid>
        <Grid
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "5px",
            boxShadow: "0px 0px 3px 1px #000000aa",
            paddingBottom: "10px",
          }}
        >
          <Box>
            <img
              src={`${process.env.PUBLIC_URL}/assets/WhatsApp Image 2024-07-10 at 10.36.22.jpeg`}
              alt="nanda"
              width="410px"
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
            <Typography sx={{ paddingBottom: "5px" }}>Co-Founder</Typography>
          </Box>

          <Stack direction="row" spacing={2}>
            <Grid container sx={{ gap: "10px", flexWrap: "nowrap" }}>
            <IconButton component="a" href="https://www.instagram.com/21st_century_niresh">
                <InstagramIcon />
              </IconButton>
              {/* <Typography>Instagram</Typography> */}
            </Grid>

            <Grid container sx={{ gap: "10px", flexWrap: "nowrap" }}>
            <IconButton component="a" href="https://www.linkedin.com/in/niresh-k-7b4071204">
                <LinkedInIcon />
              </IconButton>
              {/* <Typography>LinkedIn</Typography> */}
            </Grid>
          </Stack>

          {/* <Stack direction="row" spacing={2} sx={{ paddingBottom: "20px" }}> */}
          <Grid
            container
            sx={{
              gap: "10px",
              flexWrap: "nowrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CallIcon fontSize="small" />
            <Typography>+91 9003777293</Typography>
          </Grid>

          <Grid
            container
            sx={{
              gap: "10px",
              flexWrap: "nowrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EmailIcon fontSize="small" />
            <Typography>nireshvardhan@gmail.com</Typography>
          </Grid>
          {/* </Stack> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Team;
