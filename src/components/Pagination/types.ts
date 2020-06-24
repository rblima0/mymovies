export interface PaginationProps {
  loadDiscoverRequest(page?: number, genre?: number): void
  page: number
  genre?: number
}
