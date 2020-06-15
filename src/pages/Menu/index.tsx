import React from 'react'

import { InternalRoutes } from '../../routes/InternalRoutes'
import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'

import { Container, Content } from './styles'

export function Menu() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Header />
        <InternalRoutes />
      </Content>
    </Container>
  )
}
