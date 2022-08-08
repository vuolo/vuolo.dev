import { Grid, Stack } from "@mui/material";
import React from "react";

const GridLayout = ({ left, center, right }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        {left}
      </Grid>
      <Grid item xs={8}>
        {center}
      </Grid>
      <Grid item xs={2}>
        {right}
      </Grid>
    </Grid>
  );
};

export default GridLayout;
