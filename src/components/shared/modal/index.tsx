import React, { ReactElement } from 'react'

import { ModalProps } from './types'
import { Wrapper, Overlay } from './styles'

export function Modal({ children }: ModalProps): ReactElement {
  return (
    <>
      <Overlay />
      <Wrapper>{children}</Wrapper>
    </>
  )
}
