import { useContext, useState } from "react"
import UsersContext from "../context/userContext/UsersContext"
import { useNavigate } from "react-router-dom"


export const SignUpform = () => {

    const navigate = useNavigate()

    const userCtx = useContext(UsersContext)

    const { signupUser } = userCtx


    const [data, setData] = useState({
        nombre: '',
        apellido: '',
        rut: '',
        email:'',
        password:'',
        telefono: '',
        edad: ''
    })

    const onChangeData = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        signupUser(data)
        navigate('/')        
    }

    return (
      <>
        <div>Registrate como Usuario</div>
        <form
          onSubmit={(event) => {
            onSubmit(event);
          }}
        >
          <div>
            <label htmlFor="nombre">Nombre</label>
            <div>
              <input
                type="text"
                name="nombre"
                id="nombre"
                onChange={(event) => {
                  onChangeData(event);
                }}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="apellido">Apellido</label>
            <div>
              <input
                type="text"
                name="apellido"
                id="apellido"
                onChange={(event) => {
                  onChangeData(event);
                }}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="rut">Rut</label>
            <div>
              <input
                type="text"
                name="rut"
                id="rut"
                onChange={(event) => {
                  onChangeData(event);
                }}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email">Correo</label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(event) => {
                  onChangeData(event);
                }}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password">Contraseña</label>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(event) => {
                  onChangeData(event);
                }}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="telefono">Telefono</label>
            <div>
              <input
                type="text"
                name="telefono"
                id="telefono"
                onChange={(event) => {
                  onChangeData(event);
                }}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="edad">Edad</label>
            <div>
              <input
                type="number"
                name="edad"
                id="edad"
                onChange={(event) => {
                  onChangeData(event);
                }}
                required
              />
            </div>
          </div>

          <div>
            <button type='submit'>Registrame</button>
          </div>
        </form>
      </>
    );
}