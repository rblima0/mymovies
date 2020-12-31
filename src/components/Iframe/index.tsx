import React, { ReactElement, useState } from 'react'
import * as R from 'ramda'

import { Modal } from '../shared/Modal'

import { IframeProps } from './types'
import { Frame, ButtonOpen, ButtonClose } from './styles'

export function Iframe(props: IframeProps): ReactElement {
  const { trailer } = props
  const [IframeIsOpen, setIframeIsOpen] = useState(false)

  const handleToggleModal = (): void => {
    setIframeIsOpen(!IframeIsOpen)
  }

  return (
    <>
      {!R.isEmpty(trailer.results) && (
        <ButtonOpen onClick={handleToggleModal}>Assistir Trailer</ButtonOpen>
      )}
      {IframeIsOpen && (
        <Modal>
          <Frame
            src={`https://www.youtube.com/embed/${trailer.results[0].key}`}
            title={trailer.results[0].name}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <ButtonClose onClick={handleToggleModal}>Fechar</ButtonClose>
        </Modal>
      )}
    </>
  )
}
