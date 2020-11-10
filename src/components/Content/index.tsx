import React from 'react'

import style from './Content.module.scss'

export const Content: React.FC = ({children}) => {
  return (
    <div className={style.content}>
      { children }
    </div>
  )
}
