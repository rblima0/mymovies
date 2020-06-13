import styled from 'styled-components'

import { colors } from '../../styles/theme'

interface OpenProps {
  isOpen: boolean
}

export const Section = styled.div`
  span {
    display: flex;
    align-items: flex-end;
    font-size: 18px;
    font-weight: 300;
  }
`

export const OpenSidebar = styled.div`
  display: none;

  button {
    margin: 0.5rem 0.75rem 0;
  }

  @media (max-width: 768px) {
    display: flex;
    height: 5rem;
    width: 100vw;
    flex-direction: row;
    align-items: center;
    background-color: ${colors.black100};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
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

export const WrapperSidebar = styled.nav<OpenProps>`
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
    transform: ${(p) => (p.isOpen ? 'translateX(0)' : 'translateX(-100%);')};
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

  @media (max-width: 768px) {
    button {
      display: block;
    }
  }
`

export const Submenu = styled.div`
  margin-left: 25px;

  h4 {
    color: ${colors.gray200};
    text-transform: uppercase;
    font-size: 12px;
    margin-top: 25px;
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    list-style-type: none;

    li {
      padding: 0.3rem 0;

      a {
        text-decoration: none;
        color: ${colors.white};
        font-size: 14px;
      }

      a:hover {
        color: ${colors.primary};
      }
    }
  }
`
