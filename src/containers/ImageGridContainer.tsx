import type { ComponentPropsWithoutRef } from 'react'

export interface GridProps extends ComponentPropsWithoutRef<'section'> {
  index?: number | string
}

export const ImageGridContainer = (props: GridProps) => {
  const { index, className, children, ...elementProps } = props
  return (
    <section
      key={index}
      className={`grid grid-cols-[repeat(4,_160px)] grid-rows-[grid-cols-[repeat(8,_160px)]] gap-4 ${className}`}
      {...elementProps}
    >
      {children}
    </section>
  )
}
