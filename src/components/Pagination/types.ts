export type PaginationProps = {
  loadDiscoverRequest?: (page?: number, genre?: number) => void
  loadSearchRequest?: (page?: number, query?: string) => void
  genre?: number
  query?: string
  page: number
  totalPages: number
}
