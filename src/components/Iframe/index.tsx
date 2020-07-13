import React, { useState } from 'react'

import { Modal } from '../shared/Modal'
import { IframeProps } from './types'
import { Frame, ButtonOpen, ButtonClose } from './styles'

export function Iframe(props: IframeProps) {
  const { trailer } = props

  const [IframeIsOpen, setIframeIsOpen] = useState(false)

  const handleToggleModal = () => setIframeIsOpen(!IframeIsOpen)

  return (
    <>
      {Object.entries(trailer.results).length > 0 && (
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
