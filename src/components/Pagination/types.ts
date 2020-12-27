export type PaginationProps = {
  loadDiscoverRequest(page?: number, genre?: number): void
  genre?: number
  page: number
  totalPages: number
}
