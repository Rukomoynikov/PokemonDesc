import React from 'react'
import cn from 'classnames'

import style from './Navigation.module.scss'

export const Navigation = () => {
  return (
    <nav className={cn(style.navigation)}>
      <a className={cn(style.navigation__item, style.navigation__item_active)} href="#">Home</a>
      <a className={cn(style.navigation__item)} href="#">Pokédex</a>
      <a className={cn(style.navigation__item)} href="#">Legendaries</a>
      <a className={cn(style.navigation__item)} href="#">Documentation</a>
    </nav>
  )
}
