import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Breakpoint } from "react-socks";

import logoImage from "../assets/branding/logo.svg";

import PosterCard from "./PosterCard";

export default function HomeContent() {
  return (
    <Stack id="page-wrap" spacing={4}>
      <Breakpoint medium up>
        <Container
          style={{
            marginTop: 32,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Breakpoint large up>
            <img src={logoImage} alt="MV" style={{ width: 35 }} />
          </Breakpoint>
          <Breakpoint medium only>
            <img src={logoImage} alt="MV" style={{ width: 55 }} />
          </Breakpoint>
        </Container>
      </Breakpoint>
      <Breakpoint small down>
        <img
          src={logoImage}
          alt="MV"
          style={{
            position: "fixed",
            width: 55,
            top: 32,
            left: 32,
          }}
        />
      </Breakpoint>

      <Breakpoint large up>
        <PosterCard />
      </Breakpoint>
    </Stack>
  );
}
