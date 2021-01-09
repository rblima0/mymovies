import styled from 'styled-components'

import { colors } from '../../../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  background-color: ${colors.black100};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: initial;
  }
`

export const Section = styled.div`
  position: relative;

  h2 {
    font-size: 1.4rem;
  }

  p {
    font-size: 0.75rem;
  }
`

export const ContainerButton = styled.div`
  position: absolute;
  top: -10px;
  bottom: 0px;
  right: 0;

  @media (max-width: 500px) {
    top: unset;
    bottom: 5px;
  }
`

export const ContainerForm = styled.div`
  display: flex;

  @media (max-width: 500px) {
    padding-top: 1rem;
  }
`

export const ToggleFind = styled.button`
  width: 3.125rem;
  background-color: transparent;
  color: ${colors.white};
  opacity: 0.75;
  border: none;
  z-index: 1;
`
