import React, { useState } from 'react'

import { FiMenu, FiX } from 'react-icons/fi'
import { MdMovie } from 'react-icons/md'

import {
  Section,
  OpenSidebar,
  ToggleSidebar,
  WrapperSidebar,
  HeaderSidebar,
  SubmenuSidebar,
} from './styles'

export function Sidebar() {
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

        <SubmenuSidebar>
          <h4>Gêneros</h4>
          <ul>
            <li>
              <a href="/#">Ação</a>
            </li>
            <li>
              <a href="/#">Aventura</a>
            </li>
            <li>
              <a href="/#">Animação</a>
            </li>
            <li>
              <a href="/#">Comédia</a>
            </li>
            <li>
              <a href="/#">Crime</a>
            </li>
          </ul>
        </SubmenuSidebar>
      </WrapperSidebar>
    </Section>
  )
}
