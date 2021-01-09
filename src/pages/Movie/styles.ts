import styled from 'styled-components'

import { colors } from '../../styles/theme'

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 2rem auto;
  padding: 0 1.25rem 1.25rem;
  background-color: ${colors.black100};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 1500px) {
    margin: 2rem 0.938rem;
  }
`

export const ButtonBack = styled.button`
  background-color: transparent;
  border: 0;
  margin-top: 0.5rem;
`

export const Section = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 525px) {
    flex-direction: column;
  }
`

export const Divisor = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ffffff30;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  padding: 0;

  @media (max-width: 525px) {
    margin-top: 0;
  }
`
