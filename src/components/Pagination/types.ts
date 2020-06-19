export interface PaginationProps {
  loadDiscoverRequest(pageNumber?: number): void
  page: number
  totalPages: number
}
