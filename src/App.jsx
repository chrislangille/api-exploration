import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import NoPage from "./pages/NoPage.jsx";
import WeatherPage from "./pages/WeatherPage.jsx";
import ExploreAPIs from "./pages/ExploreAPIs.jsx";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="weather" element={<WeatherPage />} />
          <Route path="explore-apis" element={<ExploreAPIs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
