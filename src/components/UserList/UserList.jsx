import { useContext, useEffect } from "react";
import UsersContext from "../../context/userContext/UsersContext";

import './UserList.css'

export const UserList = () => {
  const userCtx = useContext(UsersContext);
  const { getUsers, usersList } = userCtx;

  useEffect(() => {
      getUsers();
  }, []);


  return (
    <>
      
      {usersList.map((user) => (
        <div className="card" key={user._id}>
          <h3 className="card__title">
            {user.nombre} {user.apellido}
          </h3>
          <div className="card__body">
            <h4>{user.rut}</h4>
            <h6>{user.email}</h6>
          </div>
        </div>
      ))}
    </>
  );
};
