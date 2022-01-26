import React, { createContext } from 'react'

const MenuContext = createContext<{
  placement?: 'vertical' | 'horizontal'
  expandedType?: 'collapse' | 'pop'
  showAllSubMenus?: boolean
  mini?: boolean
  expandedIds?: React.ReactText[]
  activeId?: React.ReactText
  activeParents?: React.ReactText[]
  clickMenu?: (id: React.ReactText) => void
  clickSubMenu?: (id: React.ReactText) => void
  closePopper?: (id: React.ReactText) => void
  closeAllPopper?: () => void
}>({})

export default MenuContext
