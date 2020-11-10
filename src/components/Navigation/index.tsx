import React from 'react'
import cn from 'classnames'
import { A } from 'hookrouter'

import style from './Navigation.module.scss'

const menuItems = [
  { path: '/', title: 'Home' },
  { path: '/pokedex', title: 'Pokedex' },
]

export const Navigation = () => {
  return (
    <nav className={cn(style.navigation)}>
    {menuItems.map((menuItem) => {
      return (
        <A
          key={menuItem.title}
          className={style.navigation__item}
          href={menuItem.path}>
          {menuItem.title}
        </A>
      )
    })}
    </nav>
  )
}
