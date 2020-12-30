import { Genres } from '../Genre/types'
import {
  MovieResponse,
  MovieCompanies,
  MovieCountries,
  MovieLanguages,
  MovieCast,
  MovieCrew,
} from './types'

export default class Movie {
  public adult: boolean
  public backdrop_path: string
  public belongs_to_collection: null | Object
  public budget: number
  public genres: Genres[]
  public homepage: string
  public id: number
  public imdb_id: string
  public original_language: string
  public original_title: string
  public overview: string
  public popularity: number
  public poster_path: string
  public production_companies: MovieCompanies[]
  public production_countries: MovieCountries[]
  public release_date: Date
  public revenue: string
  public runtime: string
  public spoken_languages: MovieLanguages[]
  public status: string
  public tagline: string
  public title: string
  public video: boolean
  public vote_average: number
  public vote_count: number
  public credits: {
    id: number
    cast: MovieCast[]
    crew: MovieCrew[]
  }

  constructor(data: MovieResponse) {
    this.adult = data.adult
    this.backdrop_path = data.backdrop_path
    this.belongs_to_collection = data.belongs_to_collection
    this.budget = data.budget
    this.genres = data.genres
    this.homepage = data.homepage
    this.id = data.id
    this.imdb_id = data.imdb_id
    this.original_language = data.original_language
    this.original_title = data.original_title
    this.overview = data.overview
    this.popularity = data.popularity
    this.poster_path = data.poster_path
    this.production_companies = data.production_companies
    this.production_countries = data.production_countries
    this.release_date = data.release_date
    this.revenue = data.revenue
    this.runtime = data.runtime
    this.spoken_languages = data.spoken_languages
    this.status = data.status
    this.tagline = data.tagline
    this.title = data.title
    this.video = data.video
    this.vote_average = data.vote_average
    this.vote_count = data.vote_count
    this.credits = data.credits
  }
}
