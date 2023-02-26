import React, { ReactElement, useState } from 'react'
import { MdSearch, MdClose } from 'react-icons/md'

import { colors } from 'styles/theme'
import { Find } from '../Find'

import { HeaderProps, TitleMap, SubtitleMap } from './types'
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

  const titleMap: TitleMap = {
    'movie': `${state ? state : 'Conheça o filme'}`,
    'genre': `${state ? state : 'Listagem por Gênero'}`,
    'search': `${state ? state : 'Pesquisando'}`,
    'cast': `${state ? state : 'Elenco'}`,
    'upcoming': 'Em Breve',
    'best-rating': 'Melhor Avaliados',
    'top-rated': 'Mais Votados'
  }
  
  const showTitle = (path: string): string => {
    for (const regex in titleMap) {
      if (path.match(new RegExp(regex))) {
        return titleMap[regex]
      }
    }
    
    return 'Listagem de Filmes'
  }
  
  const subtitleMap: SubtitleMap = {
    'movie': 'Informações adicionais',
    'genre': 'O melhor do seu gênero preferido',
    'search': 'Veja o que encontramos',
    'cast': 'Buscando pelo elenco',
    'upcoming': 'Futuros lançamentos',
    'best-rating': 'Os filmes melhor avaliados pelo público',
    'top-rated': 'Os filmes mais votados pelo público'
  }
  
  const showSubtitle = (path: string): string => {
    for (const regex in subtitleMap) {
      if (path.match(new RegExp(regex))) {
        return subtitleMap[regex]
      }
    }

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
