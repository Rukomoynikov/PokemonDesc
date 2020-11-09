import React from 'react'

import style from './Heading.module.scss'
import cn from 'classnames'

interface HeadingProps {
  priority?: 'h1' | 'h2' | 'h3' | 'h6';
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  priority = 'h1'
  }) => {
    const HeadingTag = priority as keyof JSX.IntrinsicElements

    return (
      <HeadingTag 
        className={cn(style[priority])}>
        {children}
      </HeadingTag>
    )
}
