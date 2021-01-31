import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { FaTachometerAlt, FaCog, FaWrench } from 'react-icons/fa'

import { Container } from './styles'

interface Props {
  isOpenSidebar: boolean
}

const sidebar: React.FC<Props> = ({ isOpenSidebar }) => {
  const history = useHistory()
  const [widthView, setWidthView] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('resize', changeScrollSidebar)
  }, [])

  const changeScrollSidebar = () => {
    if (window.innerWidth >= 768) {
      console.log(window.innerWidth)
      setWidthView(false)
    } else {
      setWidthView(true)
    }
  }

  const navigate = (url: string) => {
    // redirecionar
    return history.push(url)
  }

  return (
    <Container
      isOpenSidebar={isOpenSidebar}
      widthView={widthView}
      style={{ position: 'fixed' }}
    >
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
        id="accordionSidebar"
      >
        <li className="nav-item active">
          <a className="nav-link" onClick={() => navigate('/')}>
            <FaTachometerAlt />
            <span>Home</span>
          </a>
        </li>

        <hr className="sidebar-divider" />
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/perfil/dados')}>
            <FaCog />
            <span>
              dados <br /> básicos
            </span>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => navigate('/perfil/localization')}
          >
            <FaWrench />
            <span>local</span>
          </a>
        </li>
      </ul>
    </Container>
  )
}

export default sidebar
