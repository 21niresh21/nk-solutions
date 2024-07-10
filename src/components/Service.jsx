const { Grid, Paper, Typography, Divider } = require("@mui/material");

function Service({ imgURL, description }) {
  return (
    <>
      <Paper elevation={3} sx={{ margin: "10px", borderRadius: "10px" }}>
        <Grid container>
          <Grid sx={{ paddingLeft: "10px" }}>
            <Typography variant="h6">Dashboards</Typography>
          </Grid>
          <Divider />
          <Grid container sx={{ flexWrap: "nowrap" }}>
            <Grid>
              <img
                src={`${process.env.PUBLIC_URL}/assets/dashboard.jpg`}
                width="200px"
                alt="dashbaord"
              />
            </Grid>
            <Grid sx={{ padding: "10px" }}>
              <Typography>
                hello this is a desfommfe ferf efew efrewf
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Service;
