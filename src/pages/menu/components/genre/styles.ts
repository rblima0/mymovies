import styled from 'styled-components'

import { colors } from 'styles/theme'

import { GenreStylesProps } from './types'

export const Wrapper = styled.div`
  margin-left: 1.563rem;

  h4 {
    color: ${colors.gray200};
    text-transform: uppercase;
    font-size: 0.75rem;
    margin-top: 1.563rem;
    margin-bottom: 0.625rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    list-style-type: none;

    li {
      padding: 0.3rem 0;
    }
  }
`

export const Button = styled.button<GenreStylesProps>`
  border: 0;
  background-color: transparent;
  font-size: 0.875rem;
  color: ${(props): string =>
    props.selected ? colors.secondary : colors.white};

  :hover {
    color: ${colors.secondary};
  }
`
