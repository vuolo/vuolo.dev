import { Link, Container, Stack } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";

const NavLink = styled(Link)(({ selected }) => ({
  textDecoration: "none",
  textTransform: "uppercase",
  fontWeight: 700,
  fontSize: 18,
  color: "black",
  opacity: selected ? 0.33 : 1,
  "&:hover": {
    opacity: selected ? 0.165 : 0.33,
  },
}));

export default function NavSidebar() {
  const [curPage, setCurPage] = useState("Home");

  return (
    <Container
      style={{
        padding: 0,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={1} sx={{ marginTop: 4 }} style={{ maxWidth: 165 }}>
        <NavLink href="/" selected={curPage == "Home"}>
          Home
        </NavLink>
        <NavLink selected={curPage == "Work"} href="/work">
          Work
        </NavLink>
        <NavLink selected={curPage == "Insights"} href="/insights">
          Insights
        </NavLink>
        <NavLink selected={curPage == "Contact"} href="/contact">
          Contact
        </NavLink>
      </Stack>
    </Container>
  );
}
