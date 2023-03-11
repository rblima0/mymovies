import React, { ReactElement, useEffect, useMemo } from 'react'
import { MdArrowBack } from 'react-icons/md'
import * as R from 'ramda'

import { colors } from 'styles/theme'

import { Loader } from 'components/shared/loader'
import { Error } from 'components/shared/error'
import { Details } from './components/details'
import { Credits } from './components/credits'
import { Informations } from './components/informations'

import { MovieProps } from './types'
import { ButtonBack, Divisor, Wrapper, Section } from './styles'

export function TVShow({
  loadTVShowRequest,
  tvShow,
  history,
  match: {
    params: { tvShowId },
  },
}: MovieProps): ReactElement {
  const isLoading = useMemo(() => {
    return (
      tvShow.loading ||
      R.isEmpty(tvShow.data)
    )
  }, [tvShow])

  useEffect(() => {
    loadTVShowRequest(tvShowId)
    window.scrollTo(0, 0)
  }, [loadTVShowRequest, tvShowId])

  if (tvShow.error) {
    return <Error title="Tivemos um problema" />
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Wrapper>
      <ButtonBack type="button" onClick={(): void => history.goBack()}>
        <MdArrowBack size={24} color={colors.gray200} />
      </ButtonBack>

      <Section>
        <Details tvShow={tvShow.data} />
        <Informations tvShow={tvShow.data} />
      </Section>

      <Divisor />

      <Credits tvShow={tvShow.data} handleClickCast={(): void => {}} />
    </Wrapper>
  )
}
