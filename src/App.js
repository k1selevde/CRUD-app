import React, {useState} from 'react'
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./table/UserTable";

const App = () => {
    const defaultUsers = [
        {id: 1, name: 'ger', username: 'ger3'},
        {id: 2, name: 'Igor', username: 'weewr3'},
        {id: 3, name: 'Avraam', username: 'aaeeae'}
    ]

    const defaultUser = {id: null, name: '', username: ''}

    const [users, setUsers] = useState(defaultUsers);
    const [currentUser, setCurrentUser] = useState(defaultUser);
    const [isAdd, setIsAdd] = useState(true)


    //=== CRUD

    const addUser = (user) => {
        user.id = users.length + 1;
        setUsers([...users,user])
    }

    const updateUser = (id,updatedUser) => {
        setIsAdd(true)
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    const deleteUser = (id) => {
        setIsAdd(true)
        setUsers(users.filter(user => user.id !== id))
    }

    const editTableUser = (user) => {
        setIsAdd(false);
        setCurrentUser({id: user.id, name: user.name, username: user.username});
    }




    return (
        <div className="container">
            <h2>CRUD-app</h2>
            <div className="row">
                <div className="col">
                    {isAdd ?
                        <>
                            <h5>Add new User</h5>
                            <AddUserForm
                                AddUser={addUser}
                            />
                        </>
                        :
                        <>
                            <h5>Edit user</h5>
                            <EditUserForm
                                CurrentUser={currentUser}
                                SetAdd={setIsAdd}
                                UpdateUser={updateUser}
                            />
                        </>
                    }
                </div>
                <div className="col">
                    <h4>Список пользователей</h4>
                    <UserTable users={users} editUser={editTableUser} deleteUser={deleteUser} />
                </div>
            </div>
        </div>
    );
}

export default App;

