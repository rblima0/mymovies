import React, { ReactElement } from 'react'

import { CardProps } from './types'
import { Wrapper } from './styles'

export function Card({ children, backdrop }: CardProps): ReactElement {
  return <Wrapper backdrop={backdrop}>{children}</Wrapper>
}
