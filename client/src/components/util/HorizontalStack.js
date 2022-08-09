import { Stack } from "@mui/material";
import React from "react";

export default function HorizontalStack(props) {
  return (
    <Stack direction="row" alignItems="center" spacing={1} {...props}>
      {props.children}
    </Stack>
  );
}
