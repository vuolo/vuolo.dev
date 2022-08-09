import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Breakpoint } from "react-socks";

import logoImage from "../assets/branding/logo.svg";

import PosterCard from "./PosterCard";

export default function HomeContent() {
  return (
    <Stack spacing={4}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: 32 }}
      >
        <img src={logoImage} alt="MV" style={{ width: 35 }} />
      </Grid>

      <Breakpoint large up>
        <PosterCard />
      </Breakpoint>
      <Breakpoint large up>
        <PosterCard />
      </Breakpoint>
      <Breakpoint large up>
        <PosterCard />
      </Breakpoint>
      <Breakpoint large up>
        <PosterCard />
      </Breakpoint>
    </Stack>
  );
}
