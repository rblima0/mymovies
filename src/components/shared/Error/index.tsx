import React from 'react'

import popcorn from '../../../assets/icons/popcorn.svg'

import { Wrapper } from './styles'

export function Error() {
  return (
    <Wrapper>
      <img src={popcorn} alt="Popcorn" />
      <h4>Tivemos um problema</h4>
      <p>Aproveite para pegar uma pipoca</p>
    </Wrapper>
  )
}
