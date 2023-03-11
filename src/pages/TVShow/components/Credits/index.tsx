import React, { ReactElement } from 'react'
import * as R from 'ramda'

import notFound from 'assets/images/not-found.jpg'

import { CreditsProps } from './types'
import { Container, Wrapper, Content } from './styles'

export function Credits({
  tvShow,
  handleClickCast,
}: CreditsProps): ReactElement {
  return (
    <Container>
      {R.slice(0, 6, tvShow.credits.cast).map((item) => (
        <Wrapper
          onClick={(): void => handleClickCast(item.id, item.name)}
          key={item.id}
        >
          <img
            alt={item.character}
            src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
            onError={(e: any): void => {
              e.target.onerror = null
              e.target.src = notFound
            }}
          />
          <Content>
            <p>{item.character}</p>
            <p>{item.name}</p>
          </Content>
        </Wrapper>
      ))}
    </Container>
  )
}
