import React, { useEffect } from 'react'

import { DiscoverProps } from './types'

import { Loader } from '../../components/Loader'
import { Card } from '../../components/Card'
import { Section } from './styles'

export function Discover(props: DiscoverProps) {
  const { discover, loadDiscoverRequest } = props

  useEffect(() => {
    loadDiscoverRequest()
  }, [loadDiscoverRequest])

  if (discover.loading || Object.entries(discover.data).length === 0) {
    return <Loader />
  }

  return (
    <Section>
      {discover.data.results?.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </Section>
  )
}
