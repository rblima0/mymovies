import React from 'react'

import { InternalRoutes } from '../../routes/InternalRoutes'
import { Sidebar } from '../../components/Sidebar'

import { Container, Content } from './styles'

export function Menu() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <InternalRoutes />
      </Content>
    </Container>
  )
}
