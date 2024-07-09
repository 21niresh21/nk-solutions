import { Box, Grid, Stack, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

function Contact() {
  return (
    <Box
      sx={{ top: "60px", position: "absolute", padding: "10px" }}
      id="contact-section"
    >
      <Grid container sx={{justifyItems: 'center', flexDirection: 'column'}}>
        <Grid sx={{display:'flex', gap: '10px'}}>
          <Stack direction="row" spacing={1} sx={{alignItems: 'center'}}>
            <CallIcon  fontSize="small" />
            <Typography>+91 9003777293, </Typography>
          </Stack>
          <Stack direction="row" spacing={1} sx={{alignItems: 'center'}}>
            <CallIcon  fontSize="small"  />
            <Typography>+91 9003777293</Typography>
          </Stack>
        </Grid>
        
      </Grid>
    </Box>
  );
}

export default Contact;
