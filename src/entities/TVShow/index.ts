import { Genre } from 'entities/Genre/types'
import {
  TVShowResponse,
  Creator,
  LastEpisode,
  Network,
  ProductionCompany,
  ProductionCountry,
  Season,
  Credits,
  SpokenLanguage
} from './types'

export default class TVShow {
  public backdrop_path: string | null
  public created_by: Creator[]
  public episode_run_time: number[]
  public first_air_date: Date
  public genres: Genre[]
  public homepage: string
  public id: number
  public in_production: boolean
  public languages: string[]
  public last_air_date: Date
  public last_episode_to_air: LastEpisode
  public name: string
  public next_episode_to_air: null | any
  public networks: Network[]
  public number_of_episodes: number
  public number_of_seasons: number
  public origin_country: string[]
  public original_language: string
  public original_name: string
  public overview: string
  public popularity: number
  public poster_path: string | null
  public production_companies: ProductionCompany[]
  public production_countries: ProductionCountry[]
  public seasons: Season[]
  public credits: Credits
  public tagline: string | null
  public vote_average: number
  public vote_count: number
  public spoken_languages: SpokenLanguage[]

  constructor(data: TVShowResponse) {
    this.backdrop_path = data.backdrop_path
    this.created_by = data.created_by
    this.episode_run_time = data.episode_run_time
    this.first_air_date = data.first_air_date
    this.genres = data.genres
    this.homepage = data.homepage
    this.id = data.id
    this.in_production = data.in_production
    this.languages = data.languages
    this.last_air_date = data.last_air_date
    this.last_episode_to_air = data.last_episode_to_air
    this.name = data.name
    this.next_episode_to_air = data.next_episode_to_air
    this.networks = data.networks
    this.number_of_episodes = data.number_of_episodes
    this.number_of_seasons = data.number_of_seasons
    this.origin_country = data.origin_country
    this.original_language = data.original_language
    this.original_name = data.original_name
    this.overview = data.overview
    this.popularity = data.popularity
    this.poster_path = data.poster_path
    this.production_companies = data.production_companies
    this.production_countries = data.production_countries
    this.seasons = data.seasons
    this.credits = data.credits
    this.tagline = data.tagline
    this.vote_average = data.vote_average
    this.vote_count = data.vote_count
    this.spoken_languages = data.spoken_languages
  }
}
