import React, {useEffect, useState} from 'react'

const EditUserForm = (props) => {
    const defaultFormState = {id: null, name: '', username: ''};
    const [user, setUser] = useState(defaultFormState);

    useEffect(() => {
            setUser(props.CurrentUser)
        },
        [props.CurrentUser]);

    const inputChangeHandler = e => {
        const {name, value} = e.target;
        setUser(
            {...user, [name]: value}
        )
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (!user.name || !user.username) return;
        props.UpdateUser(user.id,user);
        setUser(defaultFormState);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="name1">name</label>
                <input type="text" className="form-control" id="name1" name="name" onChange={inputChangeHandler}
                       value={user.name}/>
            </div>
            <div className="form-group">
                <label htmlFor="username1">username</label>
                <input type="text" className="form-control" id="username1" name="username" onChange={inputChangeHandler}
                       value={user.username}/>
            </div>
            <button type="submit" className="btn btn-primary">Редактировать</button>
            <button onClick={() => props.SetAdd(true)}>Отмена</button>
        </form>
    );
}

export default EditUserForm;