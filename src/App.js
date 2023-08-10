import { BrowserRouter, Routes, Route } from "react-router-dom";

// components:
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";



// publicly available pages:
import HomePage from "./pages/HomePage";
import CollegePage from "./pages/CollegePage";
import TrainPage from "./pages/TrainPage";
import BusPage from "./pages/BusPage";
import { TrainProvider } from "./context/TrainState";
import { BusProvider } from "./context/BusState";




function App() {
  return (
    <BrowserRouter>
    <TrainProvider>
    <BusProvider>
      <HeaderComponent />
      <Routes>
        {/* publicly available routes: */}
        <Route path="/" element={<HomePage />} />
        <Route path="/colleges" element={<CollegePage />} />
        <Route path="/train" element={<TrainPage />} />
        <Route path="/bus" element={<BusPage />} />
      </Routes>
      <FooterComponent />
      </BusProvider>
      </TrainProvider>
    </BrowserRouter>
  );
}

export default App;

