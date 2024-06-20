import { useContext, useEffect, useState } from "react"
import UsersContext from "../context/userContext/UsersContext"
import { useNavigate } from "react-router-dom"


export const LoginForm = () => {

    const navigate= useNavigate()
    
    const userCtx = useContext(UsersContext)

    const {
        loginUser,
        authStatus,
        verifyToken
    } = userCtx

    const [ data, setData ] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        verifyToken()

    }, [authStatus, verifyToken] )

    const onChangeData = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitData = (event) => {
        event.preventDefault()
        loginUser(data)
        navigate('/')
    } 


    return (
      <>
        <div>
          <h2>Inicia Sesión</h2>

          <form
            onSubmit={(event) => {
              onSubmitData(event);
            }}
          >
            <div>
              <label htmlFor="email">Tu Correo</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="tucorreo@mail.com"
                onChange={(event) => {
                  onChangeData(event);
                }}
                required
              />
            </div>

            <div>
              <label htmlFor="password">Tu Constraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="************"
                onChange={(event) => {
                  onChangeData(event);
                }}
                required
              />
            </div>

            <div>
                <button type='submit'>Iniciar Sesión</button>
            </div>
          </form>
        </div>
      </>
    );
}