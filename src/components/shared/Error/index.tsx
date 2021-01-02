import React, { ReactElement } from 'react'

import popcorn from '../../../assets/icons/popcorn.svg'

import { ErrorProps } from './types'
import { Wrapper } from './styles'

export function Error(props: ErrorProps): ReactElement {
  const { title } = props

  return (
    <Wrapper>
      <img src={popcorn} alt="Popcorn" />
      <h4>{title}</h4>
      <p>Aproveite para pegar uma pipoca</p>
    </Wrapper>
  )
}
