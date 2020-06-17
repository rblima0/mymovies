import React from 'react'

import movie from '../../assets/movie2.jpg'

import { Wrapper, ContentImage, ContentInfo } from './styles'

export function Card() {
  return (
    <Wrapper>
      <ContentImage>
        <a href="/#">
          <img src={movie} alt="O Exterminador do Futuro: Destino Sombrio" />
        </a>
      </ContentImage>
      <ContentInfo>
        <a href="/#">
          <h3>O Exterminador do Futuro: Destino Sombrio</h3>
        </a>
        <span>Ação</span>
        <span>Aventura</span>
        <span>Ficção Científica</span>
        <p>
          Mais de duas décadas após os eventos de "O Julgamento Final", Sarah
          Connor (Linda Hamilton) precisa proteger uma jovem chamada Dani Ramos
          (Natalia Reyes) e seus amigos de um Exterminador (Gabriel Luna)
          enviado do futuro para aniquilá-las.
        </p>
      </ContentInfo>
    </Wrapper>
  )
}
