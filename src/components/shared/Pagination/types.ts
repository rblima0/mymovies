export type PaginationProps = {
  loadDiscoverRequest?: (page?: number, genre?: number, cast?: number) => void
  loadSearchRequest?: (page?: number, query?: string) => void
  genre?: number
  cast?: number
  query?: string
  page: number
  totalPages: number
}
