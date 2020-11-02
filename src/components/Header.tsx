import React from 'react'
import cn from 'classnames'

import styles from './Header.module.scss'

import logo from '../images/logo.svg';
import { Navigation } from './Navigation'

export const Header = () => {
  return (
    <div className={cn(styles.header)}>
      <div className={cn(styles.header__wrapper)}>
        <img src={logo} />

       <Navigation />
      </div>
    </div>
  )
}
