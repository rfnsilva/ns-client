import React from 'react'

import { Container, Icon, CloseIcon, Wrapper, Menu, MenuLink } from './styles'

export interface Props {
  isOpen?: boolean
  toggle?: any
}

const menuToggle: React.FC<Props> = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <Wrapper>
        <Menu>
          <MenuLink href="#">vagas</MenuLink>
          <MenuLink href="#">testes</MenuLink>
          <MenuLink href="#">perfil</MenuLink>
        </Menu>
      </Wrapper>
    </Container>
  )
}
export default menuToggle
