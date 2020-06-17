/**
 * Action types
 */

export enum MovieTypes {
  LOAD_MOVIE_REQUEST = '@movie/LOAD_MOVIE_REQUEST',
  LOAD_MOVIE_SUCCCES = '@movie/LOAD_MOVIE_SUCCCES',
  LOAD_MOVIE_FAILURE = '@movie/LOAD_MOVIE_FAILURE',
}

/**
 * Data types
 */

export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: Number[]
  id: Number
  original_language: string
  original_title: string
  overview: string
  popularity: Number
  poster_path: string
  release_date: Date
  title: string
  video: boolean
  vote_average: Number
  vote_count: Number
}

/**
 * State type
 */

export interface MovieState {
  readonly data: Movie[]
  readonly loading: boolean
  readonly error: boolean
}

/* adult: false
backdrop_path: "/o0F8xAt8YuEm5mEZviX5pEFC12y.jpg"
genre_ids: (4) [12, 14, 878, 10751]
id: 475430
original_language: "en"
original_title: "Artemis Fowl"
overview: "Artemis Fowl é um garoto de 12 anos extremamente inteligente que usa sua capacidade para roubar. Um dia, ele descobre um local mágico chamado mundo das fadas. Decidido a roubar a fortuna local, ele sequestra um elfo e cobra um resgate para libertá-lo. Só que logo a Liga de Elite da Polícia parte em seu encalço."
popularity: 252.639
poster_path: "/avb3THg1FTxBc79h2QECsuwjujY.jpg"
release_date: "2020-06-12"
title: "Artemis Fowl - O Mundo Secreto"
video: false
vote_average: 5.7
vote_count: 238 */
