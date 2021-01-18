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

export const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  margin-bottom: 20px;
  width: 120px;
  border: 0;

  &:hover {
    background-color: ${colors.secondary};
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  height: 80px;

  p {
    display: flex;
    font-weight: bold;
    color: ${colors.black};
    text-align: center;
  }
`
