import { Grid, Stack } from "@mui/material";
import React from "react";

const GridLayout = ({ left, center, right }) => {
  return (
    <Grid container spacing={2} style={{ minHeight: "100vh", marginTop: 0 }}>
      <Grid item xs={1.5}>
        {left}
      </Grid>
      <Grid item xs={9}>
        {center}
      </Grid>
      <Grid item xs={1.5}>
        {right}
      </Grid>
    </Grid>
  );
};

export default GridLayout;
