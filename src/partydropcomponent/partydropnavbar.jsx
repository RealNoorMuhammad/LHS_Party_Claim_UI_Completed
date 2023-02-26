import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "./lh.png";

export default function ButtonAppBar() {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <br />
      <br />
      <a href="./" style={{ display: "flex", justifyContent: "center" }}>
      <br/>
      <br/>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        
        </Typography>
      </a>
    </Box>
  );
}
