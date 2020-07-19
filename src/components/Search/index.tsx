import React, { useState, ChangeEvent, FormEvent } from 'react'

import { MdSearch } from 'react-icons/md'

import { colors } from '../../styles/theme'
import { SearchProps } from './types'
import { Wrapper } from './styles'

export function Search(props: SearchProps) {
  const { loadSearchRequest } = props

  const [entry, setEntry] = useState('')
  const defaultPage = 1

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEntry(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    if (entry.length > 3) {
      loadSearchRequest(defaultPage, entry)
    }

    e.preventDefault()
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={entry}
          onChange={handleChange}
          placeholder="Procure por filmes..."
          minLength={3}
        />

        <button type="submit">
          <MdSearch size={20} color={colors.white} />
        </button>
      </form>
    </Wrapper>
  )
}
