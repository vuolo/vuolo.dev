import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

import logoImage from "../assets/branding/logo.svg";

import PosterCard from "./PosterCard";

export default function HomeContent() {
  return (
    <Stack spacing={4}>
      <div />
      <Grid container justifyContent="center" alignItems="center">
        <img src={logoImage} alt="MV" style={{ width: 35 }} />
      </Grid>
      <PosterCard />
    </Stack>
  );
}
