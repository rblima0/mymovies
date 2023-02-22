import React, { ReactElement, useState } from 'react'
import { MdSearch, MdClose } from 'react-icons/md'

import { colors } from 'styles/theme'
import { Find } from '../Find'

import { HeaderProps } from './types'
import {
  Wrapper,
  Section,
  ContainerButton,
  ContainerForm,
  ToggleFind,
} from './styles'

export function Header({
  history,
  history: {
    location: { pathname, state },
  },
}: HeaderProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false)

  const showSearch = pathname.indexOf('movie') > -1

  const showTitle = (path: string): string => {
    if (path.match(/movie/)) return `${state ? state : 'Conheça o filme'}`

    if (path.match(/genre/)) return `${state ? state : 'Listagem por Gênero'}`

    if (path.match(/search/)) return `${state ? state : 'Pesquisando'}`

    if (path.match(/cast/)) return `${state ? state : 'Elenco'}`

    return 'Listagem de Filmes'
  }

  const showSubtitle = (path: string): string => {
    if (path.match(/movie/)) return 'Informações adicionais'

    if (path.match(/genre/)) return 'O melhor do seu gênero preferido'

    if (path.match(/search/)) return 'Veja o que encontramos'

    if (path.match(/cast/)) return 'Buscando pelo elenco'

    return 'Encontre diversas opções'
  }

  const handleToggleFind = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <Wrapper>
      <Section>
        <h2>{showTitle(pathname)}</h2>
        <p>{showSubtitle(pathname)}</p>
      </Section>

      {!showSearch && (
        <Section>
          {!isOpen ? (
            <ContainerButton>
              <ToggleFind onClick={handleToggleFind}>
                <MdSearch size={20} color={colors.white} />
              </ToggleFind>
            </ContainerButton>
          ) : (
            <ContainerForm>
              <Find history={history} />
              <ToggleFind onClick={handleToggleFind}>
                <MdClose size={20} color={colors.white} />
              </ToggleFind>
            </ContainerForm>
          )}
        </Section>
      )}
    </Wrapper>
  )
}
