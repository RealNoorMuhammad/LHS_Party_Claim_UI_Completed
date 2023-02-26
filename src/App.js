import "./App.css";
import Home from "./screens/Home";
import NotFound from "./NotFound.jsx";
import Lore from "./Lore.jsx";
import Partydrop from "./screens/Partydrop.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";

import theme from "./Theme";

import Society from "../src/screens/Society";

function App() {
  return (
    <div className="App">
      {" "}
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" exact={true} element={<Society />} />
            <Route path="/home" exact={true} element={<Home />} />
            <Route path="/partyclaim" exact={true} element={<Partydrop />} />
            <Route path="/lore" exact={true} element={<Lore />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
    // <Grid container >
    //   <Grid item md={6} >
    //     <Slider />
    //   </Grid>
    // </Grid>
  );
}

export default App;
