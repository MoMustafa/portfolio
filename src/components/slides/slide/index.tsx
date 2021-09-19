import React, { FunctionComponent, ReactNode } from 'react'

interface Props {
  children: ReactNode
  containerClassName?: string
  contentClassName?: string
}

const Slide: FunctionComponent<Props> = ({ children, containerClassName, contentClassName }) => {
  console.log()
  return (
    <div className={containerClassName}>
      <div className={contentClassName}>{children}</div>
    </div>
  )
}

export default Slide
