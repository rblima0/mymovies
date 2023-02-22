import styled from 'styled-components'

import { colors } from 'styles/theme'

export const Frame = styled.iframe`
  height: 100%;
  width: 100%;
  border: 0;
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

  border: 2px solid ${colors.secondary};
  color: ${colors.secondary};
  background-color: transparent;

  :hover {
    color: ${colors.black100};
    background-color: ${colors.secondary};
  }

  @media (max-width: 525px) {
    width: 200px;
    font-size: 0.75rem;
    margin: 0.3rem auto;

    border-bottom-left-radius: 1.875rem;
    border-top-right-radius: 1.875rem;
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
  color: ${colors.secondary};
  background-color: ${colors.black300};

  :hover {
    color: ${colors.black100};
    background-color: ${colors.secondary};
  }
`
