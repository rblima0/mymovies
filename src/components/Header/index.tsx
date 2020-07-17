import React from 'react'

import { HeaderProps } from './types'
import { Wrapper } from './styles'

export function Header(props: HeaderProps) {
  const {
    history: {
      location: { pathname, state },
    },
  } = props

  const showTitle = (path: string) => {
    if (path.match(/genre/)) return `Listagem por Gênero: ${state}`

    if (path.match(/movie/)) return `${state ? state : 'Conheça o filme'}`

    return 'Listagem de Filmes'
  }

  const showSubtitle = (path: string) => {
    if (path.match(/genre/)) return 'O melhor do seu gênero preferido'

    if (path.match(/movie/)) return 'Informações adicionais'

    return 'Conheça melhor os filmes'
  }

  return (
    <Wrapper>
      <h2>{showTitle(pathname)}</h2>
      <p>{showSubtitle(pathname)}</p>
    </Wrapper>
  )
}
