import styled from 'styled-components'

import { colors } from '../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  width: 48%;
  margin: 1%;
  padding: 1rem;
  background-color: ${colors.black300};
  box-shadow: 0 6px 11.31px 1.69px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 15px;
  }
`

export const ContentImage = styled.div`
  a:hover {
    img {
      opacity: 70%;
    }
  }
`

export const ContentInfo = styled.div`
  padding: 0.5rem;

  a {
    text-decoration: none;

    h3 {
      font-size: 16px;
      padding-bottom: 10px;
      color: ${colors.white};
    }
  }

  a:hover {
    h3 {
      color: ${colors.primary200};
    }
  }

  span {
    background-color: ${colors.primary100};
    color: ${colors.white};
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 20px;
    padding: 0.4em 0.5em 0.2em 0.4em;
    margin-bottom: 0.3em;
    margin-right: 0.2em;
    display: inline-block;
  }

  p {
    padding: 1em 0;
    font-size: 12px;
    line-height: 16px;
  }
`
