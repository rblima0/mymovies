import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`

export const Spinner = styled.div`
  height: 60px;
  width: 60px;
  border: 8px solid rgba(255, 255, 255, 0.25);
  border-left-color: ${colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
