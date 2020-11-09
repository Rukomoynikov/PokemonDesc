import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Layout from './components/Layout'
import { Header } from './components/Header/'
import { Footer } from './components/Footer/'
import { HomePage } from './components/HomePage/'
import { PokedexPage } from './components/PokedexPage/'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/pokedex" component={PokedexPage} />
        </Switch>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}
