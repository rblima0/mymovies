import React, { useState } from 'react'

import { FiMenu, FiX } from 'react-icons/fi'
import { MdMovie } from 'react-icons/md'

import { SidebarProps } from './types'
import {
  Section,
  OpenSidebar,
  ToggleSidebar,
  WrapperSidebar,
  HeaderSidebar,
} from './styles'

export function Sidebar(props: SidebarProps) {
  const { children } = props

  const [isOpen, setIsOpen] = useState(false)

  const handleToggleSidebar = () => setIsOpen(!isOpen)

  return (
    <Section>
      <OpenSidebar>
        <ToggleSidebar onClick={handleToggleSidebar}>
          <FiMenu size={28} />
        </ToggleSidebar>
        <span>
          <MdMovie size={28} /> MyMovies
        </span>
      </OpenSidebar>

      <WrapperSidebar isOpen={isOpen}>
        <HeaderSidebar>
          <span>
            <MdMovie size={28} /> MyMovies
          </span>
          <ToggleSidebar onClick={handleToggleSidebar}>
            <FiX size={28} />
          </ToggleSidebar>
        </HeaderSidebar>

        {children}
      </WrapperSidebar>
    </Section>
  )
}
