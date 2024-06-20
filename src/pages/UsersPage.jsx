import { NavBar } from '../components/NavBar/NavBar'
import { UserList } from '../components/UserList/UserList'

import './UsersPage.css'

export const UserPage = () => {
    return (
      <>
        <NavBar />

        <h2 className='user-page__title'>Lista de Usuarios</h2>
        <div className='user_container'>
            <UserList />
        </div>
      </>
    );
}