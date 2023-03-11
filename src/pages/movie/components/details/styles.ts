import styled from 'styled-components'

import { colors } from 'styles/theme'

export const Container = styled.div`
  img {
    border-bottom-left-radius: 30px;
    border-top-right-radius: 30px;
  }

  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.625rem 0;
    margin: 0.5rem 0;

    border: 2px solid ${colors.primary};
    color: ${colors.primary};
  }

  a:hover {
    color: ${colors.black100};
    background-color: ${colors.primary};
  }

  @media (max-width: 975px) {
    img {
      width: 200px;
    }
  }

  @media (max-width: 525px) {
    img {
      display: flex;
      margin: 0 auto;
    }

    a {
      width: 200px;
      font-size: 0.75rem;
      margin: 0.3rem auto;

      border-bottom-left-radius: 1.875rem;
      border-top-right-radius: 1.875rem;
    }
  }
`
