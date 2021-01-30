import React, { useContext, useState } from 'react'

import AuthContext from '../../contexts/auth'

import { Container } from './styles'

interface Props {
  isOpenSidebar: boolean
}

interface IUser {
  id?: string
  email?: string | null | undefined
  name?: string
  surname?: string
  image?: string
  phone?: string
  github?: string
  linkedin?: string
  behance?: string
}

const layoutdados: React.FC<Props> = ({ isOpenSidebar }) => {
  const { user, updateEmail, updateUser } = useContext(AuthContext)
  const [userUp, setUserUp] = useState<IUser>({
    id: '',
    email: '',
    name: '',
    surname: '',
    image: '',
    phone: '',
    github: '',
    linkedin: '',
    behance: ''
  })

  const handleChangeEmail = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserUp({
      ...userUp,
      [event.target.name]: event.target.value
    })
  }

  const submitEmail = async () => {
    if (
      userUp.email !== undefined &&
      userUp.email !== null &&
      user.id !== undefined
    ) {
      await updateEmail(userUp.email, user.id)
    }
  }

  const submitUpdateUser = async () => {
    if (user.id !== undefined) {
      await updateUser(userUp, user.id)
    }
  }

  return (
    <Container isOpenSidebar={isOpenSidebar}>
      <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
        <div
          className="row d-flex justify-content-center px-3"
          style={{ margin: '0' }}
        >
          <div className="card">
            <div className="row">
              <div className="col-sm-12 col-lg-6 col-md-6 col-12 titleSection">
                <h2 className="">Foto de perfil</h2>
                <p className="">Adicione uma foto em seu perfil</p>
              </div>
              <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                <div className="mx-auto mb-3 text-left">
                  <img
                    className="profile-img"
                    src="https://firebasestorage.googleapis.com/v0/b/preparov3.appspot.com/o/profileImages%2Fusers%2FpkZuHAGhUqgO1ams5tRa57rAs1G2.jpg?alt=media&amp;token=3f8c0dab-fa93-4950-aaab-1fc7f33934e5"
                  />
                </div>
                <div>
                  <div className="input-upload">
                    <button type="button" className="btn btn-primary">
                      carregar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card alt">
            <div className="row">
              <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                <h2 className="">Email</h2>
                <p className="">Você pode alterar seu email</p>
              </div>
              <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                <div className="mt-3 mx-auto  mb-3 text-left">
                  <div className="form-element-component">
                    <label className="label">
                      Email
                      <strong className="stars">*</strong>
                    </label>
                    <input
                      className="input"
                      defaultValue={
                        user.email === null || user.email === undefined
                          ? ''
                          : user.email
                      }
                      onChange={handleChangeEmail}
                      placeholder="email@exemplo.com"
                      type="text"
                      name="email"
                    />
                  </div>
                </div>
                <button
                  onClick={submitEmail}
                  className="btn btn-primary"
                  type="button"
                >
                  <span>Atualizar email</span>
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="row">
              <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                <h2 className="">Instruções</h2>
                <p className="">
                  Preencha seus dados de perfil. Sempre mantenha seu telefone
                  atualizado.
                </p>
              </div>
              <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                <div className="form-element-component">
                  <label className="label">
                    Nome
                    <strong className="stars">*</strong>
                  </label>
                  <input
                    className="input"
                    placeholder="Digite seu nome"
                    type="text"
                    name="name"
                    defaultValue={
                      user.name === null || user.name === undefined
                        ? ''
                        : user.name
                    }
                    onChange={handleChangeEmail}
                  />
                </div>
                <div className="form-element-component">
                  <label className="label">
                    Sobrenome
                    <strong className="stars">*</strong>
                  </label>
                  <input
                    className="input"
                    placeholder="Digite seu sobrenome"
                    type="text"
                    name="surname"
                    defaultValue={
                      user.surname === null || user.surname === undefined
                        ? ''
                        : user.surname
                    }
                    onChange={handleChangeEmail}
                  />
                </div>
                <div className="form-element-component">
                  <label className="label">
                    Telefone
                    <strong className="stars">*</strong>
                  </label>
                  <input
                    className="input"
                    placeholder="(00) 00000-0000"
                    type="text"
                    name="phone"
                    onChange={handleChangeEmail}
                    defaultValue={
                      user.phone === null || user.phone === undefined
                        ? ''
                        : user.phone
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="row">
              <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                <h2 className="">Links Pessoais</h2>
                <p className="">
                  Compartilhe seu perfil de outras plataformas aqui.
                </p>
              </div>
              <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                <div className="form-element-component">
                  <label className="label">Github</label>
                  <input
                    className="input"
                    placeholder="https://github.com/abcdefghi"
                    type="text"
                    name="github"
                    onChange={handleChangeEmail}
                    defaultValue={
                      user.github === null || user.github === undefined
                        ? ''
                        : user.github
                    }
                  />
                </div>
                <div className="form-element-component">
                  <label className="label">Behance</label>
                  <input
                    className="input"
                    placeholder="https://www.behance.net/abcdefghi"
                    type="text"
                    name="behance"
                    onChange={handleChangeEmail}
                    defaultValue={
                      user.behance === null || user.behance === undefined
                        ? ''
                        : user.behance
                    }
                  />
                </div>
                <div className="form-element-component">
                  <label className="label">Linkedin</label>
                  <input
                    className="input"
                    placeholder="https://www.linkedin.com/in/abcdefghi"
                    type="text"
                    name="linkedin"
                    onChange={handleChangeEmail}
                    defaultValue={
                      user.linkedin === null || user.linkedin === undefined
                        ? ''
                        : user.linkedin
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10 p-3 d-flex justify-content-center">
            <button type="button" onClick={submitUpdateUser}>
              ATUALIZAR
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}
export default layoutdados
