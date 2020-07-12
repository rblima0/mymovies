import styled from 'styled-components'
import { colors } from '../../styles/theme'

interface IframeStylesProps {
  isOpen: boolean
}

export const Modal = styled.div<IframeStylesProps>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};

  max-width: 90vw;
  max-height: 85vh;
  width: 80%;
  height: 100%;

  border: 3px solid ${colors.black300};

  iframe {
    height: 100%;
    border: 0;
  }
`
export const Overlay = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`

export const ButtonOpen = styled.button`
  display: flex;
  justify-content: center;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.625rem 0;
  margin: 0.5rem 0;
  width: 100%;

  border: 2px solid ${colors.primary};
  color: ${colors.primary};
  background-color: transparent;

  :hover {
    color: ${colors.black100};
    background-color: ${colors.primary};
  }
`

export const ButtonClose = styled.button`
  display: flex;
  justify-content: center;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.625rem 0;
  width: 100%;

  border: 0;
  color: ${colors.primary};
  background-color: ${colors.black300};

  :hover {
    color: ${colors.black100};
    background-color: ${colors.primary};
  }
`
