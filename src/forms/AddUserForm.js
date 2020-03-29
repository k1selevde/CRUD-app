import React, {createRef, useState} from 'react'

const AddUserForm = (props) => {
    const name = createRef(null);
    const username = createRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!name || !username) return;
        props.AddUser({id: null, name: name.current.value, username: username.current.value});
        name.current.value = '';
        username.current.value = '';
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="name1">name</label>
                <input ref={name} type="text" className="form-control" id="name1" name="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="username1">username</label>
                <input ref={username} type="text" className="form-control" id="username1" name="username" />
            </div>
            <button type="submit" className="btn btn-primary">Добавить</button>
        </form>
    );
}

export default AddUserForm;