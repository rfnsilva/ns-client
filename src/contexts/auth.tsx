import React, { createContext, useState, useEffect } from 'react'

import { auth, db } from '../config/firebase'

// inteface de usuario a ser salva no storage
interface IUser {
  id?: string
  email?: string | null | undefined
  name?: string
  surname?: string
  image?: string
  phone?: string
  github?: string
  linkedin?: string
  Behance?: string
}

// interface com todos os dados necessarios
interface AuthContextData {
  signed: boolean
  token: string | undefined
  user: IUser
  signIn(
    email: string | undefined,
    password: string | undefined
  ): Promise<IUser | undefined>
  signUp(
    email: string | undefined,
    password: string | undefined
  ): Promise<IUser | undefined>
  signOut(): void
}

// criando context com tipo da interface acima
const AuthContext = createContext<AuthContextData>({} as AuthContextData)

// criando provedor que servirá a aplicação
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>({ email: '' })
  const [token, setToken] = useState<string | undefined>('')

  useEffect(() => {
    async function loadStorageData() {
      const userLocal = JSON.parse(localStorage.getItem('user') || '{}')
      // const tokenLocal = JSON.parse(localStorage.getItem('token') || '{}')

      setUser(userLocal)
      // setToken(tokenLocal)
    }

    loadStorageData()
  }, [])

  // função que realiza o cadastro
  async function signUp(
    email: string,
    password: string
  ): Promise<IUser | undefined> {
    if (email === undefined || password === undefined) {
      return undefined
    }

    const { user } = await auth.createUserWithEmailAndPassword(email, password)

    if (user) {
      const tokenUser = await user?.getIdToken()

      const userData: IUser = {
        email: user?.email
      }

      // salvar no firestore
      await db.collection('user').add(userData)

      setUser(userData)
      setToken(tokenUser)
      localStorage.setItem('user', JSON.stringify(userData))
      localStorage.setItem('token', JSON.stringify(tokenUser))

      return userData
    }

    return undefined
  }

  // função que realiza o cadastro
  async function signIn(
    email: string,
    password: string
  ): Promise<IUser | undefined> {
    if (email === undefined || password === undefined) {
      return undefined
    }

    const { user } = await auth.signInWithEmailAndPassword(email, password)

    if (user) {
      const tokenUser = await user?.getIdToken()

      // pega no firestore
      const { docs } = await db
        .collection('user')
        .where('email', '==', user.email)
        .limit(1)
        .get()

      const userDb = docs[0].data()

      setUser(userDb)
      setToken(tokenUser)
      localStorage.setItem('user', JSON.stringify(userDb))
      localStorage.setItem('token', JSON.stringify(tokenUser))

      return userDb
    }

    return undefined
  }

  async function signOut() {
    await auth.signOut()
    localStorage.clear()
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        signed: !!user,
        signUp,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
