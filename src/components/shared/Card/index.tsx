import React from 'react'

import { CardProps } from './types'
import { Wrapper } from './styles'

export function Card(props: CardProps) {
  const { children } = props

  return <Wrapper>{children}</Wrapper>
}
