import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      margin: 0 5px;
      padding: 5px;
      text-align: center;
      border-radius: 50%;
      cursor: pointer;
      background-color: ${colors.primary100};

      button {
        border: 0;
        color: ${colors.white};
        background-color: transparent;
        font-weight: 700;
      }
    }

    li:hover {
      background-color: ${colors.primary};
    }
  }
`
