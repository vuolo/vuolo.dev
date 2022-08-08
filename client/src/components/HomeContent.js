import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import logoImage from "../assets/branding/logo.svg";
import posterImage from "../assets/mockups/laptop-resell-monster.png";

import HorizontalStack from "./util/HorizontalStack";

import "./homeContent.css";

const HomeContent = () => {
  return (
    <Stack spacing={4}>
      <div />
      <Grid container justifyContent="center" alignItems="center">
        <img src={logoImage} alt="MV" style={{ width: 35 }} />
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          background:
            "linear-gradient(90deg, #949A9E 0%, #949A9E 49%, #EAECEB 100%)",
          padding: 2,
          paddingLeft: 8,
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
              As a designer and developer, I understand the perfect user
              interface should look good and work even better. Alongside my
              clients, I uncover problems and solve them. In short, I create
              bolder online experiences.
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
                    width: "calc(100vw / 120)", // 120 is a guessed value
                    height: "calc(100vw / 120)", // 120 is a guessed value
                  }}
                />
              </Grid>
              <Grid item xs={3} class="poster-project-info">
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
          <img
            src={posterImage}
            alt="Laptop"
            style={{
              width: "100%",
              transform: "translateX(-1em) scale(1.25)",
            }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default HomeContent;
