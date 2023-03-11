import React, { ReactElement, useState } from 'react'
import { MdSearch, MdClose } from 'react-icons/md'

import { colors } from 'styles/theme'
import { Find } from '../find'

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

  const showSearch = /\/(movie|tv-show)\//.test(pathname)

  const removeAfterHyphen = (str: any) => {
    return str.split('_')[0]
  }

  const titleMap: TitleMap = {
    'movies/movie': `${state ? removeAfterHyphen(state) : 'Conheça o filme'}`,
    'tv-shows/tv-show': `${state ? removeAfterHyphen(state) : 'Conheça a série'}`,
    'genre/': `${state ? removeAfterHyphen(state) : 'Listagem por Gênero'}`,
    'search/': `${state ? state : 'Pesquisando'}`,
    'cast/': `${state ? state : 'Elenco'}`,
    'now-playing-movies': 'No Cinema',
    'now-playing-tv-shows': 'Lançamentos',
    'upcoming-movies': 'Em Breve',
    'upcoming-tv-shows': 'Em Breve',
    'best-rating-movies': 'Melhor Avaliados',
    'best-rating-tv-shows': 'Melhor Avaliados',
    'top-rated-movies': 'Mais Votados',
    'top-rated-tv-shows': 'Mais Votados',
  }
  
  const showTitle = (path: string): string => {
    for (const regex in titleMap) {
      if (path.match(new RegExp(regex))) {
        return titleMap[regex]
      }
    }
    
    return 'Listagem'
  }
  
  const subtitleMap: SubtitleMap = {
    'movie/': 'Informações adicionais do filme',
    'tv-show/': 'Informações adicionais da série',
    'genre/': 'O melhor do seu gênero preferido',
    'search/': 'Veja o que encontramos',
    'cast/': 'Buscando pelo elenco',
    'now-playing': 'As novidades mais recentes',
    'upcoming': 'Futuros lançamentos',
    'best-rating': 'Os mais bem avaliados pelo público',
    'top-rated': 'Os mais votados pelo público'
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
