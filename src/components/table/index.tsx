import React, { useCallback, useEffect, useState } from 'react'
import { FaTrashAlt, FaUserEdit } from 'react-icons/fa'

import Api from '../../config/api'
import { Container, ContainerModal } from './styles'

interface ITask {
  id: string
  description: string
}

const table: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [task, setTask] = useState<ITask>({
    id: '',
    description: ''
  })

  useEffect(() => {
    async function getTaskApi() {
      const response = await Api.get('/getTasks')
      setTasks(response.data)
    }

    getTaskApi()
  }, [])

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value
    })
  }

  const setUpdateTask = async (item: ITask) => {
    setTask(item)
  }

  const deleteTask = useCallback(async id => {
    if (confirm('confirm delete user ?')) {
      const response = await Api.delete(`/deleteTask/${id}`)
      setTasks(response.data)
    }
  }, [])

  // subimit form update
  const SubmitFormUpdate = async (id: string) => {
    if (task.description === '') {
      alert('algum campo ficou vazio')
    } else {
      const response = await Api.put(`/updateTask/${id}`, {
        description: task.description
      })

      let array = [...tasks]

      tasks.forEach((item, i) => {
        if (item.id === response.data.id) {
          array[i] = response.data
        }
      })

      setTasks(array)
    }
  }

  // submit form create
  const SubmitFormCreate = async () => {
    if (task.description === '') {
      alert('insert correct data')
    } else {
      const response = await Api.post('/createTask', {
        description: task.description
      })

      setTasks(tasks => [...tasks, response.data])
    }
  }

  return (
    <Container>
      <div className="containerButton">
        <button
          type="button"
          className="btn btn-primary button-add"
          data-toggle="modal"
          data-target="#modalExemplo1"
        >
          adicionar
        </button>
      </div>

      <div className="container">
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">description</div>
            <div className="col col-2">Ações</div>
          </li>

          {tasks?.map((item, i) => {
            return (
              <div key={i}>
                <li className="table-row">
                  <div className="col col-1" data-label="Name">
                    {item.description}
                  </div>
                  <div className="col col-2" data-label="Acoes">
                    <button
                      type="button"
                      className="btn btn-secondary button-edit"
                      onClick={() => deleteTask(item.id)}
                    >
                      <FaTrashAlt />
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary button-edit"
                      data-toggle="modal"
                      data-target="#modalExemplo"
                      onClick={() => setUpdateTask(item)}
                    >
                      <FaUserEdit />
                    </button>
                  </div>
                </li>

                <ContainerModal>
                  {/* MODAL UPDATE USER */}
                  <div
                    className="modal fade"
                    id="modalExemplo"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Atualizar tarefa
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Fechar"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              name="description"
                              className="form-control"
                              placeholder="descrição"
                              value={task.description}
                              onChange={handleChange}
                              aria-label="description"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Fechar
                          </button>
                          <button
                            onClick={() => SubmitFormUpdate(task.id)}
                            type="button"
                            className="btn btn-primary"
                          >
                            Salvar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MODAL CREATE USER */}
                  <div
                    className="modal fade"
                    id="modalExemplo1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Adicionar tarefa
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Fechar"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <form>
                          <div className="modal-body">
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                name="description"
                                className="form-control"
                                placeholder="descrição"
                                onChange={handleChange}
                                aria-label="description"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Fechar
                            </button>
                            <button
                              onClick={SubmitFormCreate}
                              type="button"
                              className="btn btn-primary"
                            >
                              Salvar
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </ContainerModal>
              </div>
            )
          })}
        </ul>
      </div>
    </Container>
  )
}

export default table
