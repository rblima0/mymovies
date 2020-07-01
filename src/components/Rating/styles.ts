import styled from 'styled-components'

import { colors } from '../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  padding: 5px 0;

  h6 {
    display: flex;
    align-items: center;
    color: ${colors.primary};
    font-size: 12px;
    padding: 0 5px;
    font-weight: 700;
  }

  p {
    display: flex;
    padding: 0;
    font-weight: 300;
    font-size: 10px;
    color: ${colors.gray300};
  }
`
