import React from 'react'

import { PokemonCard } from '../PokemonCard'
import { pokemons } from '../../config/pokemons.ts'

import style from './PokedexPage.module.scss'

export const PokedexPage = () => {
  return (
    <div className={style.pokemonCardsContainer}>
      {
        pokemons.map((pokemon) => {
          return <PokemonCard
            pokemon={pokemon}
            key={pokemon.id} />
        })
      }
    </div>
  )
}
