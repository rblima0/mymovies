import React from 'react'

import { ModalProps } from './types'
import { Wrapper, Overlay } from './styles'

export function Modal(props: ModalProps) {
  const { children } = props

  return (
    <>
      <Overlay />
      <Wrapper>{children}</Wrapper>
    </>
  )
}
