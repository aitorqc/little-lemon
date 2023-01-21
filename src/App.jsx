import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./pages/Menu";
import ToTop from "./components/ToTop";
import Booking from "./pages/Booking";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/reservations" element={<Booking />} />
          <Route
            path='*'
            element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Footer />
      <ToTop />
    </Router>
  );
}

export default App;
