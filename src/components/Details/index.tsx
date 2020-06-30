import React from 'react'

import { DetailsProps } from './types'
import { Wrapper, Section, Image, Resume, Information } from './styles'

export function Details(props: DetailsProps) {
  const { movie } = props

  return (
    <Wrapper>
      <Section>
        <Image>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <a href={movie.homepage} target="__blank">
            Página Oficial
          </a>
          <a href={movie.homepage} target="__blank">
            Assistir trailer
          </a>
        </Image>

        <Resume>
          <h2>{movie.title}</h2>
          <h4>{movie.original_title}</h4>

          <p>{movie.overview}</p>

          <Information>
            <h5>Informações adicionais sobre o filme</h5>

            <p>
              Título Original: <span>{movie.original_title}</span>
            </p>
            <p>
              Idioma Original: <span>{movie.spoken_languages[0].name}</span>
            </p>
            <p>
              Data de Lançamento: <span>{movie.release_date}</span>
            </p>
            <p>
              Duração: <span>{movie.runtime}</span>
            </p>

            <br></br>

            <p>
              IMDB: <span>{movie.imdb_id}</span>
            </p>
            <p>
              Avaliação: <span>{movie.vote_average}</span>{' '}
            </p>
            <p>
              Quantidade de Avaliações: <span>{movie.vote_count}</span>
            </p>
            <p>
              Popularidade: <span>{movie.popularity}</span>
            </p>

            <br></br>

            <p>
              Orçamento: U$ <span>{movie.budget.toLocaleString('en-US')}</span>{' '}
            </p>
            <p>
              Receita: U$ <span>{movie.revenue.toLocaleString()}</span>
            </p>
          </Information>
        </Resume>
      </Section>
    </Wrapper>
  )
}
