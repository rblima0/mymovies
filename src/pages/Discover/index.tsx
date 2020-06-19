import React, { useEffect } from 'react'

import { DiscoverProps } from './types'

import { Loader } from '../../components/shared/Loader'
import { Card } from '../../components/shared/Card'
import { Preview } from '../../components/Preview'

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
      {discover.data.results?.map((preview) => (
        <Card key={preview.id}>
          <Preview preview={preview} />
        </Card>
      ))}
    </Section>
  )
}
