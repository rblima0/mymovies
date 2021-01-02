import React, { ReactElement } from 'react'

import { GiRoundStar } from 'react-icons/gi'
import { colors } from '../../styles/theme'

import { RatingProps } from './types'
import { Wrapper } from './styles'

export function Rating(props: RatingProps): ReactElement {
  const { voteAverage, voteCount } = props

  return (
    <Wrapper>
      <GiRoundStar
        size={10}
        color={voteAverage >= 2 ? colors.primary : colors.primary200}
      />
      <GiRoundStar
        size={10}
        color={voteAverage >= 4 ? colors.primary : colors.primary200}
      />
      <GiRoundStar
        size={10}
        color={voteAverage >= 6 ? colors.primary : colors.primary200}
      />
      <GiRoundStar
        size={10}
        color={voteAverage >= 8 ? colors.primary : colors.primary200}
      />
      <GiRoundStar
        size={10}
        color={voteAverage >= 9 ? colors.primary : colors.primary200}
      />
      <h6>{voteAverage}</h6>
      <p>({voteCount} votos)</p>
    </Wrapper>
  )
}
