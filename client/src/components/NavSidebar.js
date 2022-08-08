import { Link, Container, Stack } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";

const NavLink = styled(Link)(({ selected }) => ({
  textDecoration: "none",
  textTransform: "uppercase",
  fontWeight: 700,
  fontSize: "calc(100vw / 80)", // 80 is a guessed value, normally we'd use 18px
  color: "black",
  opacity: selected ? 0.33 : 1,
  "&:hover": {
    opacity: selected ? 0.165 : 0.33,
  },
}));

const NavSidebar = () => {
  const [curPage, setCurPage] = useState("Home");

  return (
    <Container sx={{ marginTop: 4 }} style={{ maxWidth: 165 }}>
      <Stack spacing={1}>
        <NavLink selected={curPage == "Home"} href="/">
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
};

export default NavSidebar;
