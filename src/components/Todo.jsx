import React, { useState } from 'react';
import '../styles/Todo.css';
import { db } from '../firebase';

function Todo({ obj, changeCheckBox, deleteTodo }) {
    const [editing, setEditing] = useState(false);
    const [newInput, setNewInput] = useState(obj.todo);

    function handleEditing() {
        setEditing(prev => !prev);
        document.querySelector('input').focus();
    }

    const changeNewInput = (e) => {
        setNewInput(() => e.target.value);
    }

    function handleSubmit(e, id) {
        e.preventDefault();

        db.collection('todos').doc(id).update({
            todo: newInput
        })
        setEditing(prev => !prev);
        setNewInput('');
    }

    let form =
        <div className="form-container">
            <form className="form">
                <input type="text" className='input' placeholder='edit this todo ...' value={newInput} onChange={changeNewInput} />
                <button className='btn' onClick={(e) => { handleSubmit(e, obj.id) }} disabled={!newInput}>Submit</button>
            </form>
        </div>

    let content =
        <div className='container'>
            <div className="first">
                <input type="checkbox" className='checkbox' checked={obj.check} name={obj.id} onChange={(e) => (
                    changeCheckBox(e, obj.id)
                )} />
            </div>
            <div className={(obj.check ? "taskCompleted" : "second")}>
                {obj.todo}
            </div>
            <div className="third">
                <button className='btn' onClick={() => deleteTodo(obj.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button className='btn' onClick={handleEditing}>
                    <i className="fas fa-pencil-alt"></i>
                </button>
            </div>
        </div>

    return (
        editing
            ? form
            : content

    );
}

export default Todo;
