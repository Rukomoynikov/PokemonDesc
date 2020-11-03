import React from 'react'
import cn from 'classnames'

import style from './App.module.scss'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <div className={cn(style.layout)}>
      <Header />
      <div className={cn(style.layout__content)} />
      <Footer />
    </div>
  ) 
}
