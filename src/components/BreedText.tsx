import type { ComponentPropsWithoutRef } from 'react'

export interface TextProps extends ComponentPropsWithoutRef<'p'> {
  textContent?: string
  labelText: string
  appendText?: string
}

export const BreedText = (props: TextProps) => {
  const { textContent, labelText, appendText, className, ...elementProps } =
    props

  return !!textContent ? (
    <p
      className={className}
      {...elementProps}
    >
      {labelText}:{' '}
      <span className='italic text-Blue-400'>
        {textContent} {appendText}
      </span>
    </p>
  ) : null
}
