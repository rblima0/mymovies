import styled from 'styled-components'
import { colors } from '../../styles/theme'
import { WrapperSidebar } from '../../components/Sidebar/styles'

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items: flex-start;

  padding: 2.5rem 1rem;
  background-color: ${colors.black200};
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  min-height: 100vh;

  ${WrapperSidebar} {
    flex: 20;
    flex-shrink: 0;
    min-height: 100%;
    min-width: 15rem;
    z-index: 9;
    border-right: 8px solid ${colors.primary};
  }

  ${Content} {
    flex: 80;
  }

  @media (max-width: 768px) {
    display: block;
  }
`
