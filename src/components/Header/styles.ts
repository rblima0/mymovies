import styled from 'styled-components'

import { colors } from '../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  background-color: ${colors.black100};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const Section = styled.div`
  h2 {
    font-size: 1.4rem;
  }

  p {
    font-size: 0.75rem;
  }
`
