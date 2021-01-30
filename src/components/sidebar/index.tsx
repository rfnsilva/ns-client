import React, { useState } from 'react'
import { FaTachometerAlt, FaCog, FaWrench } from 'react-icons/fa'

import { Container } from './styles'

interface Props {
  isOpenSidebar: boolean
}

const sidebar: React.FC<Props> = ({ isOpenSidebar }) => {
  const [isOpenSidebarSubMenu, setIsOpenSidebarSubMenu] = useState<boolean>(
    false
  )
  const [subMenuSidebarClassName] = useState<string>('')

  return (
    <Container
      isOpenSidebarSubMenu={isOpenSidebarSubMenu}
      isOpenSidebar={isOpenSidebar}
      subMenuSidebarClassName={subMenuSidebarClassName}
      style={{ position: 'fixed' }}
    >
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
        id="accordionSidebar"
      >
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <FaTachometerAlt />
            <span>Home</span>
          </a>
        </li>

        <hr className="sidebar-divider" />
        <li className="nav-item">
          <a className="nav-link" href="#">
            <FaCog />
            <span>
              dados <br /> básicos
            </span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
            <FaWrench />
            <span>local</span>
          </a>
        </li>
      </ul>
    </Container>
  )
}

export default sidebar
