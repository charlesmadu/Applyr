import React, { type ReactNode } from 'react'

interface CardProps{
    children: ReactNode,
    className?: string
}

const Card = ({children, className = ""}: CardProps) => {
  return (
    <div className={`bg-white rounded-xl border border-slate-200 shadow-sm ${className}`}>
        {children}
    </div>
  )
}

export default Card;
