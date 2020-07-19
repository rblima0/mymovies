import styled from 'styled-components'

import { colors } from '../../styles/theme'

export const Wrapper = styled.div`
  background-color: ${colors.black100};
  padding: 2rem 1rem;

  form {
    display: flex;

    input {
      display: flex;
      align-items: center;

      cursor: pointer;
      padding: 10px;
      border: 0;
      line-height: 0;
      background-color: #1c212e;
      color: ${colors.white};

      border-top: 1px solid ${colors.white};
      border-bottom: 1px solid ${colors.white};
      border-left: 1px solid ${colors.white};

      ::placeholder {
        color: ${colors.gray300};
      }
    }

    button {
      display: flex;
      align-items: center;

      cursor: pointer;
      border: 0;
      padding: 0 0.3rem;
      background-color: ${colors.primary};
      color: ${colors.white};

      border-top: 1px solid ${colors.white};
      border-bottom: 1px solid ${colors.white};
      border-right: 1px solid ${colors.white};
    }

    button:hover {
      background-color: ${colors.primary100};
    }
  }
`
