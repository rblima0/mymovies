import styled from 'styled-components'

import { colors } from '../../styles/theme'

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 2rem auto;
  padding: 0 1.25rem 1.25rem;
  background-color: ${colors.black100};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 1500px) {
    margin: 2rem 0.938rem;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 525px) {
    flex-direction: column;
  }
`

export const ButtonBack = styled.button`
  background-color: transparent;
  border: 0;
  margin-top: 0.5rem;
`

export const Image = styled.div`
  img {
    border-bottom-left-radius: 30px;
    border-top-right-radius: 30px;
  }

  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.625rem 0;
    margin: 0.5rem 0;

    border: 2px solid ${colors.primary};
    color: ${colors.primary};
  }

  a:hover {
    color: ${colors.black100};
    background-color: ${colors.primary};
  }

  @media (max-width: 975px) {
    img {
      width: 200px;
    }
  }

  @media (max-width: 525px) {
    img {
      display: flex;
      margin: 0 auto;
    }

    a {
      width: 200px;
      font-size: 0.75rem;
      margin: 0.3rem auto;

      border-bottom-left-radius: 1.875rem;
      border-top-right-radius: 1.875rem;
    }
  }
`

export const Information = styled.div`
  padding: 0.625rem;
`

export const Resume = styled.div`
  h1 {
    font-weight: 700;
    font-size: 1.375rem;
    color: ${colors.secondary};
    margin: 0;
  }

  h5 {
    font-weight: 700;
    font-size: 0.75rem;
    padding-bottom: 0.313rem;
    color: ${colors.gray300};
  }

  h4 {
    font-weight: 700;
    font-size: 0.75rem;
    padding-top: 0.313rem;
    color: ${colors.primary};
  }

  @media (max-width: 525px) {
    h1 {
      color: ${colors.primary};
    }
  }
`

export const Genre = styled.span`
  background-color: ${colors.tertiary};
  color: ${colors.white};
  letter-spacing: 0.5px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.625rem;
  border-radius: 1.25rem;
  padding: 0.4em 0.5em 0.2em 0.4em;
  margin-bottom: 0.3em;
  margin-right: 0.4em;
  display: inline-block;
`

export const Overview = styled.p`
  font-size: 0.938rem;
  line-height: 1.4;
  max-width: 1000px;
  margin-top: 0.625rem;
`

export const More = styled.div`
  padding: 1rem 0;

  h5 {
    color: ${colors.primary};
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 20px;
  }

  span {
    display: inline-block;
    font-size: 12px;
    font-weight: 300;
    color: ${colors.white100};
    margin-right: 10px;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border: 3px solid #ffffff30;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`

export const Credits = styled.div`
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

export const CreditsContainer = styled.div`
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

export const CreditsWrapper = styled.div`
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
