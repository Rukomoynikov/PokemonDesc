import React from 'react'
import cn from 'classnames'
import { NavLink } from "react-router-dom";

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
          <NavLink
            to={menuItem.path}
            activeClassName={style.navigation__item_active}
            className={style.navigation__item}>
            {menuItem.title}
          </NavLink>
        )
      })}
    </nav>
  )
}
