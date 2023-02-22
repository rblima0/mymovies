import styled from 'styled-components'

import { colors } from 'styles/theme'

export const Container = styled.div`
  padding: 0.625rem;
`

export const Resume = styled.div`
  h1 {
    font-weight: 700;
    font-size: 1.375rem;
    color: ${colors.secondary};
    margin: 0;
  }

  h5 {
    font-weight: 700;
    font-size: 0.75rem;
    padding-bottom: 0.313rem;
    color: ${colors.gray300};
  }

  @media (max-width: 525px) {
    h1 {
      color: ${colors.primary};
    }
  }
`

export const Genre = styled.span`
  background-color: ${colors.tertiary};
  color: ${colors.white};
  letter-spacing: 0.5px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.625rem;
  border-radius: 1.25rem;
  padding: 0.4em 0.5em 0.2em 0.4em;
  margin-bottom: 0.3em;
  margin-right: 0.4em;
  display: inline-block;
`

export const Overview = styled.p`
  font-size: 0.938rem;
  line-height: 1.4;
  max-width: 1000px;
  margin-top: 0.625rem;
`

export const Tagline = styled.h4`
  font-weight: 700;
  font-size: 0.75rem;
  padding-top: 0.313rem;
  color: ${colors.primary};
`

export const More = styled.div`
  padding: 1rem 0;

  h5 {
    color: ${colors.primary};
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 20px;
  }

  span {
    display: inline-block;
    font-size: 12px;
    font-weight: 300;
    color: ${colors.white100};
    margin-right: 10px;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border: 3px solid #ffffff30;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`
