import { Button, Card, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import GridLayout from "../GridLayout";
import InfoSidebar from "../InfoSidebar";
import NavSidebar from "../NavSidebar";
import HomeContent from "../HomeContent";

export default function HomeView() {
  return (
    <Container disableGutters maxWidth={false}>
      <GridLayout
        left={<InfoSidebar />}
        center={<HomeContent />}
        right={<NavSidebar />}
      />
    </Container>
  );
}
