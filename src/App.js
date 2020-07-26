import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "components/Nav/Nav";
import Container from "components/Container/Container";
import Footer from "components/Footer/Footer";

import AboutPage from "pages/About/AboutPage";
import CatalogPage from "pages/Catalog/CatalogPage";
import HomePage from "pages/Home/HomePage";
import { store } from "store";
import { fetchData } from "actions/products";
import ShoppingBag from "./components/ShoppingBag/ShoppingBag";
import { useSelector } from "react-redux";

const App = () => {
  useEffect(() => {
    store.dispatch(fetchData());
  }, []);
  const showShoppingBag = useSelector((store) => store.showShoppingBag);

  return (
    <>
      <Router>
        <Nav />
        <Container>
          <Route exact path="/" component={HomePage} />
          <Route path="/catalog" component={CatalogPage} />
          <Route path="/about" component={AboutPage} />
        </Container>
        <Footer />
      </Router>
      {showShoppingBag && <ShoppingBag />}
    </>
  );
};

export default App;
