import styled from 'styled-components'

import { colors } from '../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  padding: 0.313rem 0;

  h6 {
    display: flex;
    align-items: center;
    color: ${colors.primary};
    font-size: 0.75rem;
    padding: 0 0.313rem;
    font-weight: 700;
  }

  p {
    display: flex;
    padding: 0 !important;
    font-weight: 300;
    font-size: 0.625rem;
    color: ${colors.gray300};
  }
`
