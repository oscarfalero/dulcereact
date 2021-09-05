import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import RecList from "./pages/recipes/recList/RecList";
import ProductList from "./pages/products/productList/ProductList";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Post from "./components/post/Post";
import styles from "./app.module.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className={styles.container}>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/productos" exact component={() => <ProductList />} />
            <Route path="/recetas" exact component={() => <RecList />} />
            <Route path="/contacto" exact component={() => <Contact />} />
          </Switch>
        </div>
      </Router>
      <Post />
    </>
  );
}

export default App;
