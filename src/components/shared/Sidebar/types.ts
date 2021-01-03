import { ReactNode } from 'react'

export type SidebarProps = {
  children: ReactNode
  isOpen: boolean
  handleToggleSidebar: () => void
}

export type SidebarStylesProps = {
  isOpen: boolean
}
