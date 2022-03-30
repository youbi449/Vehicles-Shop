import { ThemeProvider } from "styled-components";
import VehiculeIndex from "./domains/Vehicles";
import { VehiclesDetails } from "./domains/Vehicles/details";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PageTitle } from "./domains/Vehicles";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <PageTitle>
            <Link to="/">My Garage</Link>
          </PageTitle>
          <Routes>
            <Route path="/" element={<VehiculeIndex />} />
            <Route path=":id" element={<VehiclesDetails />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
