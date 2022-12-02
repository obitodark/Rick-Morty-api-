import DataProvider from "./context/DataProvider";

import Router from "./router";

import { createTheme, ThemeProvider } from "@mui/material";
function App() {
  const myTheme = createTheme({
    // Theme settings
    palette: {
      mode: "dark",
      background: {
        default: "#141627",
      },
    },
  });
  return (
    <DataProvider>
      <ThemeProvider theme={myTheme}>
        <Router />
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
