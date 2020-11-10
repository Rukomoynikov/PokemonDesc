import React from "react"

import Layout from './components/Layout'
import { Content } from './components/Content/'
import { Header } from './components/Header/'
import { Footer } from './components/Footer/'

import {useRoutes} from 'hookrouter'
import {routes} from './config/routes.tsx'

export default function App() {
  const routeResult = useRoutes(routes);

  return (
    <Layout>
      <Header />
      <Content>{routeResult}</Content>
      <Footer />
    </Layout>
  );
}
