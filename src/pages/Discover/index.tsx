import React, { useEffect } from 'react'

import { DiscoverProps } from './types'

import { Card } from '../../components/Card'
import { Section } from './styles'

export function Discover(props: DiscoverProps) {
  const { loadDiscoverRequest } = props

  useEffect(() => {
    loadDiscoverRequest()
  }, [loadDiscoverRequest])

  return (
    <Section>
      <Card />
    </Section>
  )
}
