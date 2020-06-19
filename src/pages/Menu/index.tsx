import React from 'react'

import { InternalRoutes } from '../../routes/InternalRoutes'
import { Sidebar } from '../../components/shared/Sidebar'
import { Header } from '../../components/Header'
import { Genre } from '../../components/Genre'

import { Container, Content } from './styles'

export function Menu() {
  return (
    <Container>
      <Sidebar>
        <Genre />
      </Sidebar>
      <Content>
        <Header />
        <InternalRoutes />
      </Content>
    </Container>
  )
}
