import type { ComponentPropsWithRef } from 'react'

export type ButtonProps = ComponentPropsWithRef<'button'>

export interface RandomImage {
  id: string
  url: string
  width: number
  height: number
}
