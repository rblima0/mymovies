import React, { useState, ChangeEvent, FormEvent, ReactElement } from 'react'
import { MdSearch } from 'react-icons/md'

import { colors } from 'styles/theme'

import { FindProps } from './types'
import { Form } from './styles'

export function Find({ history }: FindProps): ReactElement {
  const [entry, setEntry] = useState('')
  const maxLength = 3

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEntry(e.target.value.toLowerCase())
  }

  const handleSubmit = (e: FormEvent): void => {
    if (entry.length > maxLength) {
      history.push({
        pathname: `/movies/search/${entry}`,
        state: entry,
      })

      setEntry('')
    }

    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
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
    </Form>
  )
}
