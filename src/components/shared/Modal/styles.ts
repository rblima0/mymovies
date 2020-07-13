import styled from 'styled-components'

import { colors } from '../../../styles/theme'

export const Wrapper = styled.div`
  display: 'flex';
  flex-direction: column;
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  border: 3px solid ${colors.black300};
  max-width: 90vw;
  max-height: 85vh;
  width: 80%;
  height: 100%;
`

export const Overlay = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`
