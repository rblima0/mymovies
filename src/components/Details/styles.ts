import styled from 'styled-components'

import { colors } from '../../styles/theme'

export const Wrapper = styled.div`
  margin: 2rem 1rem;
  padding: 20px;
  background-color: ${colors.black100};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const Section = styled.div`
  display: flex;
  flex-direction: row;
`

export const Image = styled.div`
  a {
    display: flex;
    justify-content: center;
    color: ${colors.primary};
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    border: 2px solid ${colors.primary};
    padding: 10px 0;
  }

  a:hover {
    color: ${colors.black100};
    background-color: ${colors.primary};
  }

  a:nth-child(2) {
    margin-bottom: 0.5rem;
    border: 2px solid ${colors.primary200};
    color: ${colors.primary200};
  }

  a:hover:nth-child(2) {
    color: ${colors.black100};
    background-color: ${colors.primary200};
  }
`

export const Resume = styled.div`
  padding: 10px;

  h2 {
    font-weight: 700;
    font-size: 22px;
    color: ${colors.primary};
  }

  h4 {
    font-weight: 700;
    font-size: 12px;
    padding-bottom: 5px;
    color: ${colors.gray300};
  }

  p {
    font-size: 15px;
    line-height: 1.4;
    max-width: 1000px;
  }
`

export const Information = styled.div`
  h5 {
    font-size: 24px;
    padding-top: 2rem;
    padding-bottom: 0.5rem;
    color: ${colors.white};
  }

  p {
    font-size: 15px;
    line-height: 1.4;
    font-weight: 700;

    span {
      font-size: 14px;
      font-weight: normal;
    }
  }
`
