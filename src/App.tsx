import React from 'react'
import cn from 'classnames'

import style from './App.module.scss'

export const App = () => {
  return (
    <div className={cn(style.header, 'color')}>
      This is App Component!
    </div>
  ) 
}
