import React from 'react'
import cn from 'classnames'

import style from './HomePage.module.scss'

import { Header } from '../Header/'
import { Footer } from '../Footer/'
import { Button } from '../Button/'
import { Parallax } from '../Parallax/'
import { Heading } from '../Heading/'

export const HomePage = () => {
  return (
    <div className={cn(style.layout__content)}>
      <div className={cn(style.layout__descriptionSection)}>
        <Heading priority='h1'>
          <b>Find</b> all your favorite <b>Pokemon</b>
        </Heading>

        <Heading priority='h2'>
          You can know the type of Pokemon, its strengths, disadvantages and abilities
        </Heading>
        
        <Button
          onClick={(event) => console.log('event')}>
          See the Pokemons
        </Button>
      </div>
      <Parallax />
    </div>
  ) 
}
