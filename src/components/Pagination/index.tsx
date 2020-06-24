import React from 'react'

import { PaginationProps } from './types'
import { Wrapper } from './styles'

export function Pagination(props: PaginationProps) {
  const { loadDiscoverRequest, page, genre, totalPages } = props

  const handleClick = (pageNumber: number) => {
    loadDiscoverRequest(pageNumber, genre)
    window.scrollTo(0, 0)
  }

  return (
    <Wrapper>
      <ul>
        {page > 1 && (
          <li onClick={() => handleClick(page - 1)}>
            <button>Anterior</button>
          </li>
        )}
        {page < totalPages && (
          <li onClick={() => handleClick(page + 499)}>
            <button>Proximo</button>
          </li>
        )}
      </ul>
    </Wrapper>
  )
}
