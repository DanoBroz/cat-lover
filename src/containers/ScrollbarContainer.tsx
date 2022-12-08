import classnames from 'classnames'
import { ComponentPropsWithoutRef } from 'react'

interface ScrollbarProps extends ComponentPropsWithoutRef<'div'> {
  isModal?: boolean
}

export const ScrollbarContainer = (props: ScrollbarProps) => {
  const { className, isModal = false, children, ...elementProps } = props
  return (
    <div
      className={classnames(
        'max-h-[70vh] scrollbar-thin scrollbar-track-Blue-100/80 scrollbar-thumb-Blue-300 scrollbar-track-rounded scrollbar-thumb-rounded hover:scrollbar-thumb-Blue-400',
        {
          '-mr-6 pr-6': !isModal,
        },
        className
      )}
      {...elementProps}
    >
      {children}
    </div>
  )
}
