import React from 'react'
import cn from 'classnames'

import style from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={cn(style.footer)}>
      <div className={cn(style.footer__wrapper)}>
        <div>Make with ❤️</div>
        <div>Ours Team</div>
      </div>
    </div>
  )
}

