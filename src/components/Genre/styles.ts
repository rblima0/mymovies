import styled from 'styled-components'

import { colors } from '../../styles/theme'

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

      button {
        border: 0;
        background-color: transparent;
        color: ${colors.white};
        font-size: 0.875rem;
      }

      button:hover {
        color: ${colors.primary};
      }
    }
  }
`
