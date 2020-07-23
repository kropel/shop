import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "components/Nav/Nav";
import Container from "components/Container/Container";
import Footer from "components/Footer/Footer";

import AboutPage from "pages/About/AboutPage";
import CatalogPage from "pages/Catalog/CatalogPage";
import HomePage from "pages/Home/HomePage";

const App = () => (
  <Router>
    <Nav />
    <Container>
      <Route exact path="/" component={HomePage} />
      <Route path="/catalog" component={CatalogPage} />
      <Route path="/about" component={AboutPage} />
    </Container>
    <Footer />
  </Router>
);

export default App;
