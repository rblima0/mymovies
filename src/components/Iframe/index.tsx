import React, { useState } from 'react'

import { IframeProps } from './types'
import { Modal, Overlay, ButtonOpen, ButtonClose } from './styles'

export function Iframe(props: IframeProps) {
  const { trailer } = props

  const [isOpen, setIsOpen] = useState(false)

  const handleShowModal = () => setIsOpen(!isOpen)

  return (
    <>
      {Object.entries(trailer.results).length > 0 && (
        <ButtonOpen onClick={handleShowModal}>Assistir Trailer</ButtonOpen>
      )}
      {isOpen ? (
        <>
          <Overlay />
          <Modal isOpen={isOpen}>
            <iframe
              src={`https://www.youtube.com/embed/${trailer.results[0].key}`}
              title={trailer.results[0].name}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <ButtonClose onClick={handleShowModal}>Fechar</ButtonClose>
          </Modal>
        </>
      ) : null}
    </>
  )
}
