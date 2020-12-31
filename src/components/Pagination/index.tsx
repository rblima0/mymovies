import React, { ReactElement } from 'react'

import { PaginationProps } from './types'
import { Wrapper } from './styles'

export function Pagination(props: PaginationProps): ReactElement {
  const {
    loadDiscoverRequest,
    loadSearchRequest,
    genre,
    page,
    totalPages,
    query,
  } = props

  const handleClick = (pageNumber: number): void => {
    loadDiscoverRequest && loadDiscoverRequest(pageNumber, genre)
    loadSearchRequest && loadSearchRequest(pageNumber, query)
    window.scrollTo(0, 0)
  }

  const renderPrevious = (): ReactElement | null => {
    if (page <= 1) return null

    return (
      <li onClick={() => handleClick(page - 1)}>
        <button>Anterior</button>
      </li>
    )
  }

  const renderNext = (): ReactElement | null => {
    if (page >= totalPages) return null

    return (
      <li onClick={() => handleClick(page + 1)}>
        <button>Proximo</button>
      </li>
    )
  }

  const renderPageNumbers = (): JSX.Element[] => {
    let pages: JSX.Element[] = []

    for (let i = page + 1; i <= page + 3 && i < totalPages; i++) {
      pages.push(
        <li key={i} onClick={(): void => handleClick(i)}>
          <button>{i}</button>
        </li>
      )
    }

    return pages
  }

  return (
    <Wrapper>
      <ul>
        {renderPrevious()}
        {renderPageNumbers()}
        {renderNext()}
      </ul>
    </Wrapper>
  )
}
