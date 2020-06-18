import { DiscoverState } from '../../store/modules/discover/types'

export interface DiscoverProps {
  discover: DiscoverState
  loadDiscoverRequest(): void
}
