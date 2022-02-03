import React from 'react';
import '../styles/InputComponent.css'

function InputComponent({ input, addTodo, changeInput }) {
    return (
        <div className="input-container">
            <form className="form">
                <input
                    type="text"
                    className="input"
                    value={input}
                    onChange={changeInput}
                    placeholder="start a new todo ..."
                />
                <button
                    disabled={!input}
                    className="btn"
                    type="submit"
                    onClick={addTodo}>
                    Add Todo
                </button>
            </form>
        </div>);
}

export default InputComponent;
