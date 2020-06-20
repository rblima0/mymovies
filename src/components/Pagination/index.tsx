import React from 'react'

import { PaginationProps } from './types'
import { Wrapper } from './styles'

export function Pagination(props: PaginationProps) {
  const { loadDiscoverRequest, page } = props

  const handleClick = (pageNumber: number) => {
    loadDiscoverRequest(pageNumber)
    window.scrollTo(0, 0)
  }

  return (
    <Wrapper>
      <ul>
        <li onClick={() => handleClick(page - 1)}>
          <button>Prev</button>
        </li>
        <li onClick={() => handleClick(page + 1)}>
          <button>Next</button>
        </li>
      </ul>
    </Wrapper>
  )
}
