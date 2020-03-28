import React from 'react'

const UserTable  = props => {

    return (
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Username</th>
                    <th style={{paddingLeft: '40px'}}>Действия</th>
                </tr>
            </thead>
            <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => (
                    <tr key={user.id} style={{borderTop: '1px solid black'}}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td style={{paddingLeft: '40px'}}>
                            <button className="btn btn-outline-secondary" style={{marginRight: '30px'}} onClick={() => props.editUser(user)}>Edit</button>
                            <button className="btn btn-outline-secondary" onClick={() => props.deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                    )
                )
                ) :
                <td colSpan={3}>Nothing</td>
            }
            </tbody>
        </table>
    );
}

export default UserTable;