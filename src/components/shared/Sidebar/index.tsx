import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { MdMenu, MdClose } from 'react-icons/md'

import popcorn from '../../../assets/icons/popcorn.svg'

import { SidebarProps } from './types'
import {
  OpenSidebar,
  ToggleSidebar,
  WrapperSidebar,
  HeaderSidebar,
  Logo,
} from './styles'

export function Sidebar({
  children,
  handleToggleSidebar,
  isOpen,
}: SidebarProps): ReactElement {
  return (
    <>
      <OpenSidebar>
        <ToggleSidebar onClick={handleToggleSidebar}>
          <MdMenu size={28} />
        </ToggleSidebar>
        <Link to="/dashboard">
          <Logo>
            <img src={popcorn} alt="logo" /> MyMovies
          </Logo>
        </Link>
      </OpenSidebar>

      <WrapperSidebar isOpen={isOpen}>
        <HeaderSidebar>
          <Link to="/dashboard">
            <Logo>
              <img src={popcorn} alt="logo" /> MyMovies
            </Logo>
          </Link>
          <ToggleSidebar onClick={handleToggleSidebar}>
            <MdClose size={28} />
          </ToggleSidebar>
        </HeaderSidebar>

        {children}
      </WrapperSidebar>
    </>
  )
}
