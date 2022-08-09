import { Link, Container, Stack } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { elastic as Menu } from "react-burger-menu";

import "./burgerMenu.css";

const NavLink = styled(Link)(({ selected }) => ({
  textDecoration: "none",
  textTransform: "uppercase",
  fontWeight: 700,
  fontSize: 36,
  color: "black",
  opacity: selected ? 0.33 : 1,
  "&:hover": {
    opacity: selected ? 0.165 : 0.33,
  },
}));

export default function BurgerMenu(props) {
  const [curPage, setCurPage] = useState("Home");

  return (
    <Menu
      {...props}
      style={{
        padding: 0,
      }}
    >
      <Stack
        spacing={1}
        sx={{ marginTop: 4 }}
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: 110,
        }}
        className="bm-item-list"
      >
        <NavLink href="/" selected={curPage == "Home"}>
          Home
        </NavLink>
        <NavLink href="/work" selected={curPage == "Work"}>
          Work
        </NavLink>
        <NavLink href="/insights" selected={curPage == "Insights"}>
          Insights
        </NavLink>
        <NavLink href="/contact" selected={curPage == "Contact"}>
          Contact
        </NavLink>
      </Stack>
    </Menu>
  );
}
