import React from 'react'
import cn from 'classnames'

import style from './Button.module.scss'


interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: 'normal' | 'small';
  fullWidth?: boolean;
  color?: 'green' | 'yellow';
}

export const Button: React.FC<ButtonProps> = ({
  children, 
  onClick,
  size = 'normal',
  fullWidth = false,
  color = 'green'}) => {
    return (
      <button
        className={
          cn(style.root,
            style[color],
            fullWidth ? style.fullWidth : false,
            size == 'small' ? style.small : false)
        }
        type='button'>
          { children }

          {fullWidth}
      </button>
    )
}
