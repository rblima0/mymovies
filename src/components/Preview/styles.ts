import styled from 'styled-components'

import { colors } from '../../styles/theme'

export const ContentImage = styled.div`
  button {
    border: 0;
    background-color: transparent;
  }

  button:hover {
    img {
      opacity: 70%;
    }
  }

  @media (max-width: 470px) {
    display: flex;
    justify-content: center;
  }
`

export const ContentInfo = styled.div`
  padding: 0.5rem;

  button {
    display: flex;
    border: 0;
    background-color: transparent;
    text-decoration: none;

    h3 {
      font-size: 1rem;
      color: ${colors.white};
      text-align: left;
    }
  }

  button:hover {
    h3 {
      color: ${colors.primary200};
    }
  }

  span {
    background-color: ${colors.primary100};
    color: ${colors.white};
    text-transform: uppercase;
    font-size: 0.75rem;
    border-radius: 1.25rem;
    padding: 0.4em 0.5em 0.2em 0.4em;
    margin-bottom: 0.3em;
    margin-right: 0.2em;
    display: inline-block;
  }

  h5 {
    font-size: 0.625rem;
    padding-bottom: 0.313rem;
    color: ${colors.gray300};
  }

  p {
    padding: 1em 0;
    font-size: 0.75rem;
    line-height: 1rem;
  }
`
