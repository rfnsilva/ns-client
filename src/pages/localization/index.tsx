import React, { useState } from 'react'

import NavBar from '../../components/navbar'
import Sidebar from '../../components/sidebar'

import { Container } from './styles'

const localization: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar)
  }
  return (
    <Container>
      <NavBar toggleSidebar={toggleSidebar} />
      <div className="layout">
        <Sidebar isOpenSidebar={isOpenSidebar} />

        <h1>localização page</h1>
      </div>
    </Container>
  )
}

export default localization
