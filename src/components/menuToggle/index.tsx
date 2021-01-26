import React, { useContext } from 'react'

import { Container, Icon, CloseIcon, Wrapper, Menu, MenuLink } from './styles'

export interface Props {
  isOpen?: boolean
  toggle?: any
  toggleJWT?: any
}

const menuToggle: React.FC<Props> = ({ isOpen, toggle, toggleJWT }) => {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <Wrapper>
        <Menu>
          <MenuLink onClick={toggleJWT} href="#">
            JWT
          </MenuLink>
        </Menu>
      </Wrapper>
    </Container>
  )
}
export default menuToggle
