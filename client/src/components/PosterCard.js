import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

import { FaArrowRight } from "react-icons/fa";

import posterImage from "../assets/mockups/laptop-resell-monster.png";

import "./posterCard.css";

export default function PosterCard() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      alignSelf="center"
      sx={{
        background:
          "linear-gradient(90deg, #949A9E 0%, #949A9E 49%, #EAECEB 100%)",
        padding: 2,
        paddingLeft: 8,
        overflow: "hidden",
        width: "95%",
      }}
    >
      <Grid item xs={5} style={{ marginTop: 140 }}>
        <Stack>
          <Typography
            style={{
              lineHeight: "1em",
              color: "white",
              fontSize: "calc(100vw / 42)",
              fontWeight: 500,
            }}
          >
            <span style={{ display: "block" }}>Better design,</span>
            <span>better experiences</span>
          </Typography>

          <Typography
            style={{
              color: "white",
              fontSize: "calc(100vw / 80)", // 80 is a guessed value
              fontWeight: 400,
              marginTop: 45,
            }}
          >
            As a designer and developer, I understand the perfect user interface
            should look good and work even better. Alongside my clients, I
            uncover problems and solve them. In short, I create bolder online
            experiences.
          </Typography>

          <Grid
            container
            justifyContent="left"
            alignItems="top"
            style={{ marginTop: 115, marginBottom: 30 }}
          >
            <Grid item xs={2}>
              <Typography
                style={{
                  color: "white",
                  fontSize: "calc(100vw / 120)", // 120 is a guessed value
                  fontWeight: 700,
                }}
              >
                Project
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <FaArrowRight
                fill="white"
                style={{
                  width: "calc(100vw / 150)",
                  height: "calc(100vw / 150)",
                }}
              />
            </Grid>
            <Grid item xs={3} className="poster-project-info">
              <Typography
                style={{
                  color: "white",
                  fontSize: "calc(100vw / 120)", // 120 is a guessed value
                  fontWeight: 700,
                }}
              >
                Resell Monster
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: "calc(100vw / 140)", // 120 is a guessed value
                  fontWeight: 400,
                  marginTop: 3,
                }}
              >
                Software Company
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
      <Grid item xs={7}>
        <img src={posterImage} alt="Laptop" style={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
}
