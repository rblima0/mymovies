import React, { useState } from 'react'

import { MdSearch, MdClose } from 'react-icons/md'
import { Find } from '../Find'

import { HeaderProps } from './types'
import { Wrapper, Section, Container, ToggleFind } from './styles'
import { colors } from '../../styles/theme'

export function Header(props: HeaderProps) {
  const {
    history,
    history: {
      location: { pathname, state },
    },
  } = props

  const [isOpen, setIsOpen] = useState(false)

  const handleToggleFind = () => setIsOpen(!isOpen)

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
        {!isOpen ? (
          <ToggleFind onClick={handleToggleFind}>
            <MdSearch size={20} color={colors.white} />
          </ToggleFind>
        ) : (
          <Container>
            <ToggleFind onClick={handleToggleFind}>
              <MdClose size={20} color={colors.white} />
            </ToggleFind>
            <Find history={history} />
          </Container>
        )}
      </Section>
    </Wrapper>
  )
}
