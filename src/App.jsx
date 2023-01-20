import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
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
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/reservations" element={<Booking/>}/>
          <Route path='*' component={<Home />} />
        </Route>
      </Routes>
      <Footer />
      <ToTop/>
    </Router>
  );
}

export default App;
