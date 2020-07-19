import React, { useState, ChangeEvent, FormEvent } from 'react'

import { MdSearch } from 'react-icons/md'

import { FindProps } from './types'
import { colors } from '../../styles/theme'
import { Wrapper } from './styles'

export function Find(props: FindProps) {
  const { history } = props

  const [entry, setEntry] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEntry(e.target.value.toLowerCase())
  }

  const handleSubmit = (e: FormEvent) => {
    history.replace({
      pathname: `/dashboard/search/${entry}`,
      state: entry,
    })

    setEntry('')
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
