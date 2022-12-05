import type { ButtonProps } from '../types'

export const Button = (props: ButtonProps) => {
  const { className, children, ...elementProps } = props

  return (
    <button
      className='rounded-lg bg-Blue-400 py-[10px] px-6 text-xl text-Blue-50 transition-colors hover:bg-Blue-400/80'
      {...elementProps}
    >
      {children}
    </button>
  )
}
