import styled from 'styled-components'

import { colors } from '../../../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 525px) {
    justify-content: space-around;
  }

  img {
    width: 120px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary};
  width: 120px;
  margin-bottom: 20px;

  div {
    justify-content: center;
    align-items: center;
  }
`

export const Content = styled.div`
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  height: 80px;

  p {
    display: flex;
    font-weight: bold;
    color: ${colors.black};
    text-align: center;
  }
`
