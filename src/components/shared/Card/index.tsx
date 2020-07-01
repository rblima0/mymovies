import React from 'react'

import { CardProps } from './types'
import { Wrapper } from './styles'

export function Card(props: CardProps) {
  const { children, backdrop } = props

  return <Wrapper backdrop={backdrop}>{children}</Wrapper>
}
