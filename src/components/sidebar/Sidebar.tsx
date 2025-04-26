import React, { useState } from 'react'
import {
  EuiSideNav,
  EuiIcon,
  EuiHeaderLogo,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPage,
  EuiPageSideBar,
} from '@elastic/eui'
import { staticImages } from '../../shared/images'
import './Sidebar.scss'

// ... rest of the imports

export interface SideNavItem {
  id: string
  icon: string
  text: string
  path?: string
  items?: SideNavItem[]
}
export interface EuiSideNavItem {
  id: string
  name: string
  icon?: React.JSX.Element
  onClick?: () => void
  isSelected?: boolean
  items?: EuiSideNavItem[]
  className?: string
}

const adminItems = [
  {
    id: 'users',
    icon: staticImages.sidebar.dashboard,
    text: 'Users',
    path: '/users',
  },
  {
    id: 'usageHub',
    icon: staticImages.sidebar.dashboard,
    text: 'Usage Hub',
    path: '/usageHub',
  },
  {
    id: 'settings',
    icon: staticImages.sidebar.dashboard,
    text: 'Settings',
    path: '/settings',
  },
  {
    id: 'branding',
    icon: staticImages.sidebar.dashboard,
    text: 'Branding',
    path: '/branding',
  }
]

const menuItems = [
  {
    id: 'cxhub',
    icon: staticImages.sidebar.dashboard,
    text: 'CX Hub',
    path: '/cxhub',
  },
  {
    id: 'recommendations',
    icon: staticImages.sidebar.dashboard,
    text: 'Recommendations',
    path: '/recommendations',
  },
  {
    id: 'reports',
    icon: staticImages.sidebar.dashboard,
    text: 'Reports',
    path: '/reports',
  },
  {
    id: 'assets',
    icon: staticImages.sidebar.dashboard,
    text: 'Assets',
    path: '/assets',
  },
  {
    id: 'customers',
    icon: staticImages.sidebar.dashboard,
    text: 'Customers',
    path: '/customers',
  },
  {
    id: 'connectors',
    icon: staticImages.sidebar.dashboard,
    text: 'Connectors',
    path: '/connectors',
  },
  {
    id: 'admin',
    icon: staticImages.sidebar.dashboard,
    text: 'Admin',
    path: '/admin',
    items: adminItems,
  }
]

export default function Sidebar() {
  const [selectedItemId, setSelectedItemId] = useState<string>('')

  const getSidebarClass = () => {
    return 'customer-view';
  }

  // TODO: temporary menu items disabled for click through
  const createSideNavItems = () => {
    return menuItems.map(item => ({
      id: item.id,
      name: item.text,
      icon: <EuiIcon type={item.icon} size="l" />,
      isSelected: location.pathname === item.path
    }));
  };

  const sideNav = [
    {
      id: 'main',
      name: '',
      items: createSideNavItems(),
    },
  ]

  return (
    <EuiPageSideBar className={`dfp-sidebar ${getSidebarClass()}`}>
      <div className="dfp-sidebar__header">
        <EuiFlexGroup alignItems="center" gutterSize="s">
          <EuiFlexItem grow={false}>
            <EuiHeaderLogo
              iconType={staticImages.sidebar.logo}
              href="#"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
              }}
            >
              Digital Fabric
            </EuiHeaderLogo>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>

      <EuiSideNav
        mobileTitle="Navigation"
        items={sideNav}
        className="dfp-sidebar__nav"
      />

      <div className="dfp-sidebar__footer">
        <button
          className="dfp-sidebar__logout-button"
        >
          <EuiIcon type={staticImages.sidebar.logout} size="l" />
          <span>Support</span>
        </button>
        <button
          className="dfp-sidebar__logout-button"
        >
          <EuiIcon type={staticImages.sidebar.logout} size="l" />
          <span>Logout</span>
        </button>
      </div>
    </EuiPageSideBar>
  )
}
