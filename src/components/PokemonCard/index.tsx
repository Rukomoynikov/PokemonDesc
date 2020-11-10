import React from 'react'

import style from './PokemonCard.module.scss'
import { IPokemon } from '../../config/pokemons.ts'
import { Heading } from '../Heading'

interface PokemonCardProps {
  pokemon: IPokemon
}

const titleize = (str: string) => {
  return str[0].toUpperCase() + str.slice(1, str.length)
}

export const PokemonCard: React.FC<PokemonCardProps> = ({pokemon}) => {
  return (
    <div className={style.pokemonCard}>
      <Heading
        styleName={style.pokemonCard__title}
        priority='h3'>{titleize(pokemon.name_clean)}</Heading>

      <div 
        className={style.pokemonCard__img} 
        style={{backgroundImage: `url(${pokemon.img})`}} />
    </div>
  )
}
