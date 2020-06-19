import styled from 'styled-components'

import { colors } from '../../styles/theme'

export const SubmenuSidebar = styled.div`
  margin-left: 25px;

  h4 {
    color: ${colors.gray200};
    text-transform: uppercase;
    font-size: 12px;
    margin-top: 25px;
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    list-style-type: none;

    li {
      padding: 0.3rem 0;

      a {
        text-decoration: none;
        color: ${colors.white};
        font-size: 14px;
      }

      a:hover {
        color: ${colors.primary};
      }
    }
  }
`
