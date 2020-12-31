import React, { ReactElement } from 'react'

import { Wrapper, Spinner } from './styles'

export function Loader(): ReactElement {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  )
}
