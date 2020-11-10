import React from 'react'
import { HomePage } from '../components/HomePage/'
import { PokedexPage } from '../components/PokedexPage/'

export const routes = {
  '/': () => <HomePage />,
  '/pokedex': () => <PokedexPage />
}
