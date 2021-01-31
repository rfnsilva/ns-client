import React from 'react'

import { Container } from './styles'

interface Props {
  isOpenSidebar: boolean
}

const layoutlocalization: React.FC<Props> = ({ isOpenSidebar }) => {
  return (
    <Container isOpenSidebar={isOpenSidebar}>
      <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
        <div
          className="row d-flex justify-content-center px-3"
          style={{ margin: '0' }}
        >
          <div className="card">
            <div className="row">
              <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                <h2 style={{ color: '#c93b59' }}>Instruções</h2>
                <p>
                  Preencha seus dados de Localização. Sempre os mantenha
                  atualizado.
                </p>
              </div>
              <div className="col-sm-12 col-lg-6 col-md-6 col-12">
                <div className="form-element-component">
                  <label className="label">
                    CEP
                    <strong className="stars">*</strong>
                  </label>
                  <input
                    className="input"
                    placeholder="Digite seu nome"
                    type="text"
                    name="cep"
                  />
                </div>
                {/* <div className="error">{error.nameError}</div> */}
                <div className="form-element-component">
                  <label className="label">
                    Cidade
                    <strong className="stars">*</strong>
                  </label>
                  <input
                    className="input"
                    placeholder="Digite seu sobrenome"
                    type="text"
                    name="cidade"
                  />
                </div>
                {/* <div className="error">{error.surnameError}</div> */}
                <div className="form-element-component">
                  <label className="label">
                    Estado
                    <strong className="stars">*</strong>
                  </label>
                  <input
                    className="input"
                    placeholder="(00) 00000-0000"
                    type="text"
                    name="estado"
                  />
                </div>
                {/* <div className="error">{error.phoneError}</div> */}
                <div className="form-element-component">
                  <label className="label">
                    Bairro
                    <strong className="stars">*</strong>
                  </label>
                  <input
                    className="input"
                    placeholder="(00) 00000-0000"
                    type="text"
                    name="bairro"
                  />
                </div>
                {/* <div className="error">{error.phoneError}</div> */}
                <div className="form-element-component">
                  <label className="label">
                    Endereço
                    <strong className="stars">*</strong>
                  </label>
                  <input
                    className="input"
                    placeholder="(00) 00000-0000"
                    type="text"
                    name="endereco"
                  />
                </div>
                {/* <div className="error">{error.phoneError}</div> */}
                <div className="form-element-component">
                  <label className="label">
                    Numero
                    <strong className="stars">*</strong>
                  </label>
                  <input
                    className="input"
                    placeholder="(00) 00000-0000"
                    type="text"
                    name="numero"
                  />
                </div>
                {/* <div className="error">{error.phoneError}</div> */}
                <div className="form-element-component">
                  <label className="label">Complemento</label>
                  <input
                    className="input"
                    placeholder="(00) 00000-0000"
                    type="text"
                    name="complemento"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-10 p-3 d-flex justify-content-center sendButton">
            <button type="button">Enviar</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default layoutlocalization
