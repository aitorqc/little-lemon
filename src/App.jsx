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

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu/>}/>
          <Route path='*' component={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
