import styled from 'styled-components'

import { colors } from '../../../styles/theme'
import { CardStylesProps } from './types'

export const Wrapper = styled.div<CardStylesProps>`
  display: flex;
  width: 48%;
  margin: 1%;
  padding: 1rem;
  background-color: ${colors.black300};
  box-shadow: 0 6px 11.31px 1.69px rgba(0, 0, 0, 0.3);

  background: linear-gradient(to right, rgba(17, 17, 17, 0.85), rgb(0, 0, 0)),
    url(https://image.tmdb.org/t/p/w500${(props) => props.backdrop});

  background-size: cover;

  @media (max-width: 1130px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    margin: 0.625rem 0.938rem;
  }

  @media (max-width: 470px) {
    flex-direction: column;
  }
`
