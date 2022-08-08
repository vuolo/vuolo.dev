import "@mui/material";
import "react-icons";
import "react-icons/bi";
import "react-icons/md";
import "react-icons/bs";
import "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useAdobeFonts } from "react-adobe-fonts";

import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  useSearchParams,
} from "react-router-dom";
import theme from "./theme";

import HomeView from "./components/views/HomeView";

function App() {
  // Load 'aktiv-grotesk' Typekit
  useAdobeFonts({ kitId: "ezp7qhd" });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
