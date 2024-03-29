import styled from 'styled-components'

import { SidebarStylesProps } from './types'
import { colors } from 'styles/theme'

export const OpenSidebar = styled.div`
  display: none;

  button {
    margin: 0.5rem 0.75rem 0;
  }

  a {
    text-decoration: none;
    color: ${colors.white};
  }

  @media (max-width: 768px) {
    display: flex;
    height: 5rem;
    width: 100vw;
    flex-direction: row;
    align-items: center;
    background-color: ${colors.black100};
    border-bottom: 5px solid ${colors.secondary};
  }
`

export const ToggleSidebar = styled.button`
  width: 3.125rem;
  background-color: transparent;
  color: ${colors.white};
  opacity: 0.75;
  border: none;
  z-index: 1;
`

export const WrapperSidebar = styled.nav<SidebarStylesProps>`
  display: flex;
  flex-direction: column;
  background-color: ${colors.black100};
  transition: all 0.3s ease-in-out;

  @media (min-width: 1024px) {
    min-width: 22rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    position: fixed;
    overflow: scroll;
    top: 0;
    bottom: 0;
    left: 0;
    transform: ${(p): string =>
      p.isOpen ? 'translateX(0)' : 'translateX(-100%);'};
    z-index: 1;
  }
`

export const HeaderSidebar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.875rem 2.5rem 1.875rem 1.5625rem;

  button {
    display: none;
  }

  a {
    text-decoration: none;
    color: ${colors.white};
  }

  @media (max-width: 768px) {
    button {
      display: block;
    }
  }
`

export const Logo = styled.span`
  display: flex;
  align-items: flex-end;
  font-size: 1.5rem;
  font-weight: 700;
  text-shadow: 1px 1px 0px ${colors.secondary};

  img {
    width: 50px;
  }

  :hover {
    opacity: 0.75;
  }
`
