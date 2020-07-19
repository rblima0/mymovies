import React from 'react'

import { Find } from '../Find'
import { HeaderProps } from './types'
import { Wrapper, Section } from './styles'

export function Header(props: HeaderProps) {
  const {
    history,
    history: {
      location: { pathname, state },
    },
  } = props

  const showTitle = (path: string) => {
    if (path.match(/genre/)) return `Listagem por Gênero: ${state}`

    if (path.match(/movie/)) return `${state ? state : 'Conheça o filme'}`

    if (path.match(/search/)) return `Pesquisando: ${state}`

    return 'Listagem de Filmes'
  }

  const showSubtitle = (path: string) => {
    if (path.match(/genre/)) return 'O melhor do seu gênero preferido'

    if (path.match(/movie/)) return 'Informações adicionais'

    if (path.match(/search/)) return 'Veja o que encontramos'

    return 'Conheça melhor os filmes'
  }

  return (
    <Wrapper>
      <Section>
        <h2>{showTitle(pathname)}</h2>
        <p>{showSubtitle(pathname)}</p>
      </Section>

      <Section>
        <Find history={history} />
      </Section>
    </Wrapper>
  )
}
