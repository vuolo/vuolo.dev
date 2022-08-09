import { Link, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";

import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const SocialLink = styled(Link)({
  fontSize: 18,
  color: "black",
  opacity: 0.33,
  "&:hover": {
    opacity: 1,
  },
});

export default function InfoSidebar() {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Stack spacing={2} sx={{ margin: 4 }} style={{ maxWidth: 0 }}>
        <Typography
          style={{
            fontWeight: 700,
            fontSize: 64,
            transform: "rotate(-90deg)",
            width: 550,
            marginLeft: -280,
            marginTop: 115,
          }}
        >
          Michael Vuolo
        </Typography>

        <Stack
          spacing={1}
          style={{
            position: "absolute",
            marginTop: "75vh",
            marginLeft: -15,
          }}
        >
          <SocialLink href="https://github.com/vuolo" target="_blank">
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/michael-vuolo/"
            target="_blank"
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="https://www.upwork.com/freelancers/~01e61e1da7ef424990"
            target="_blank"
          >
            <SiUpwork />
          </SocialLink>
          <SocialLink href="https://codepen.io/vuolo" target="_blank">
            <FaCodepen />
          </SocialLink>
        </Stack>
      </Stack>
    </Container>
  );
}
