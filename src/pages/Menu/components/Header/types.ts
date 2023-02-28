import { History } from 'history'

export type HeaderProps = {
  history: History
}

export type TitleMap = {
  [key: string]: string;
  movie: string;
  genre: string;
  search: string;
  cast: string;
  upcoming: string;
  'best-rating': string;
  'top-rated': string;
}

export type SubtitleMap = {
  [key: string]: string;
};