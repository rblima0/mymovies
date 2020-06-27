import React from 'react'

import { DetailsProps } from './types'
import { Wrapper, Info } from './styles'

export function Details(props: DetailsProps) {
  const { movie } = props

  return (
    <Wrapper>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <a href={movie.homepage} target="__blank">
        Assistir trailer
      </a>

      <h2>{movie.title}</h2>

      <p>{movie.overview}</p>

      <p>Informações adicionais sobre o filme</p>

      <Info>
        <p>Título Original: {movie.original_title}</p>
        <p>Idioma Original: {movie.spoken_languages[0].name}</p>
        <p>Data de Lançamento: {movie.release_date}</p>
        <p>Duração: {movie.runtime}</p>

        <br></br>

        <p>IMDB: {movie.imdb_id}</p>
        <p>Avaliação: {movie.vote_average}</p>
        <p>Quantidade de Avaliações: {movie.vote_count}</p>
        <p>Popularidade: {movie.popularity}</p>

        <br></br>

        <p>Orçamento: U$ {movie.budget.toLocaleString('en-US')}</p>
        <p>Receita: U$ {movie.revenue.toLocaleString()}</p>
      </Info>
    </Wrapper>
  )
}
