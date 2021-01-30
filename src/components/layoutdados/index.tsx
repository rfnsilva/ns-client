import React, { useContext, useState, useRef } from 'react'

import AuthContext from '../../contexts/auth'

import { Container } from './styles'

interface Props {
  isOpenSidebar: boolean
}

const layoutdados: React.FC<Props> = ({ isOpenSidebar }) => {
  const { user, updateEmail, updateUser, uploadImage } = useContext(AuthContext)
  const inputEmail = useRef<HTMLInputElement>(null)
  const inputName = useRef<HTMLInputElement>(null)
  const inputSurname = useRef<HTMLInputElement>(null)
  const inputPhone = useRef<HTMLInputElement>(null)
  const inputLinkedin = useRef<HTMLInputElement>(null)
  const inputBehance = useRef<HTMLInputElement>(null)
  const inputGithub = useRef<HTMLInputElement>(null)

  const submitEmailUpdate = async () => {
    if (inputEmail.current && user.id !== undefined) {
      await updateEmail(inputEmail.current.value, user.id)
    }
  }

  console.log(user)

  function handleChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()

    if (e.target.files && user.id !== undefined) {
      uploadImage(e.target.files[0], user.id)
    }
  }

  const submitUpdateUser = async () => {
    if (
      user.id !== undefined &&
      inputGithub.current &&
      inputBehance.current &&
      inputLinkedin.current &&
      inputSurname.current &&
      inputEmail.current &&
      inputName.current &&
      inputPhone.current
    ) {
      const userUpdate = {
        name: inputName.current.value,
        email: inputEmail.current.value,
        surname: inputSurname.current.value,
        github: inputGithub.current.value,
        linkedin: inputLinkedin.current.value,
        behance: inputBehance.current.value,
        phone: inputPhone.current.value
      }

      await updateUser(userUpdate, user.id)
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
                  <img className="profile-img" src={user.image} />
                </div>
                <div>
                  <div className="input-upload">
                    <label className="input-upload-label" htmlFor="input-file">
                      Carregar foto
                    </label>
                    <input
                      type="file"
                      id="input-file"
                      className="btn btn-primary"
                      onChange={handleChangeImage}
                      style={{ display: 'none' }}
                    />
                    {/* <button type="button" className="btn btn-primary">
                      carregar
                    </button> */}
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
                      placeholder="email@exemplo.com"
                      type="text"
                      name="email"
                      ref={inputEmail}
                    />
                  </div>
                </div>
                <button
                  onClick={submitEmailUpdate}
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
                    ref={inputName}
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
                    ref={inputSurname}
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
                    defaultValue={
                      user.phone === null || user.phone === undefined
                        ? ''
                        : user.phone
                    }
                    ref={inputPhone}
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
                    defaultValue={
                      user.github === null || user.github === undefined
                        ? ''
                        : user.github
                    }
                    ref={inputGithub}
                  />
                </div>
                <div className="form-element-component">
                  <label className="label">Behance</label>
                  <input
                    className="input"
                    placeholder="https://www.behance.net/abcdefghi"
                    type="text"
                    name="behance"
                    defaultValue={
                      user.behance === null || user.behance === undefined
                        ? ''
                        : user.behance
                    }
                    ref={inputBehance}
                  />
                </div>
                <div className="form-element-component">
                  <label className="label">Linkedin</label>
                  <input
                    className="input"
                    placeholder="https://www.linkedin.com/in/abcdefghi"
                    type="text"
                    name="linkedin"
                    defaultValue={
                      user.linkedin === null || user.linkedin === undefined
                        ? ''
                        : user.linkedin
                    }
                    ref={inputLinkedin}
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
