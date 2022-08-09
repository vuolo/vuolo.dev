import { Grid, Stack } from "@mui/material";
import { Breakpoint } from "react-socks";
import React from "react";

import BurgerMenu from "./BurgerMenu";

export default function GridLayout({ left, center, right }) {
  return (
    <>
      <Breakpoint medium up>
        <Grid
          container
          spacing={0}
          style={{ minHeight: "100vh", marginTop: 0, justifyContent: "center" }}
        >
          <Grid
            item
            xs={1.5}
            style={{
              position: "fixed",
              top: 0,
              left: "3.25vw",
            }}
          >
            {left}
          </Grid>
          <Grid item xs={9}>
            {center}
          </Grid>
          <Grid
            item
            xs={1.5}
            style={{
              position: "fixed",
              top: 0,
              right: "3.25vw",
            }}
          >
            {right}
          </Grid>
        </Grid>
      </Breakpoint>
      <Breakpoint small down>
        <Grid
          container
          spacing={0}
          style={{ minHeight: "100vh", marginTop: 0 }}
        >
          <Grid
            id="mobile-container"
            item
            xs={12}
            style={{ width: "100%", height: "100%" }}
          >
            <BurgerMenu
              right
              width={"100%"}
              pageWrapId="page-wrap"
              outerContainerId="mobile-container"
              itemListClassName="burger-menu-item"
            />
            {center}
          </Grid>
        </Grid>
      </Breakpoint>
    </>
  );
}
