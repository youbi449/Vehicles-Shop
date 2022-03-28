import { ThemeProvider } from "styled-components";
import VehiculeIndex from "./domains/Vehicles";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<VehiculeIndex />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
