import { History } from 'history'

export type PaginationProps = {
  page: number
  totalPages: number
  handlePaginate: (pageNumber: number) => void
}
