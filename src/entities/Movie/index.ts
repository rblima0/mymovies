import { Genre } from 'entities/Genre/types'
import {
  ProductionCompany,
  ProductionCountry,
  SpokenLanguage,
  Credits,
  MovieResponse
} from './types'

export default class Movie {
  public adult: boolean
  public backdrop_path: string | null
  public belongs_to_collection: unknown
  public budget: number
  public genres: Genre[]
  public homepage: string
  public id: number
  public imdb_id: string | null
  public original_language: string
  public original_title: string
  public overview: string
  public popularity: number
  public poster_path: string | null
  public production_companies: ProductionCompany[]
  public production_countries: ProductionCountry[]
  public release_date: Date
  public revenue: number
  public runtime: number | null
  public spoken_languages: SpokenLanguage[]
  public status: string
  public tagline: string | null
  public title: string
  public video: boolean
  public vote_average: number
  public vote_count: number
  public credits: Credits

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
