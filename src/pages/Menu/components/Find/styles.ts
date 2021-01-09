import styled from 'styled-components'

import { colors } from '../../../../styles/theme'

export const Form = styled.form`
  display: flex;

  input {
    display: flex;
    align-items: center;

    cursor: pointer;
    padding: 10px;
    border: 0;
    line-height: 0;
    background-color: ${colors.black400};
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
    background-color: ${colors.secondary};
    color: ${colors.white};

    border-top: 1px solid ${colors.white};
    border-bottom: 1px solid ${colors.white};
    border-right: 1px solid ${colors.white};
  }

  button:hover {
    background-color: ${colors.tertiary};
  }

  @media (max-width: 500px) {
    width: 100%;

    input {
      width: 100%;
    }
  }
`
