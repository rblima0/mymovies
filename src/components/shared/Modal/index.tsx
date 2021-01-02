import React, { ReactElement } from 'react'

import { ModalProps } from './types'
import { Wrapper, Overlay } from './styles'

export function Modal(props: ModalProps): ReactElement {
  const { children } = props

  return (
    <>
      <Overlay />
      <Wrapper>{children}</Wrapper>
    </>
  )
}
