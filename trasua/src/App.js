import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import './assets/fonts/fontawesome-free-5.15.3/css/all.min.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";



const HomePage = React.lazy(() => import('./containers/HomePage'))
const CartDetailContainer = React.lazy(() => import('./containers/CartDetailContainer'))
const ProductDetailPage = React.lazy(() => import('./containers/ProductDetailPage'))
function App() {

  return (
    <div className="app">
      <Suspense fallback={<h2>Loading ...</h2>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/product/:slug" component={ProductDetailPage} />
            <Route exact path="/cart" component={CartDetailContainer} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
