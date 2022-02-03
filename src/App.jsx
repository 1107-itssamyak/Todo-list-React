import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import InputComponent from "./components/InputComponent";
import { db } from "./firebase";
import firebase from 'firebase/compat/app';
import Todo from "./components/Todo";
import "./styles/App.css";

function App() {
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState([]);

	const addTodo = (e) => {
		e.preventDefault();

		db.collection('todos').add({
			todo: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			check: false,
		})
		setInput('');
	}

	const changeInput = (e) => {
		setInput(e.target.value);
	}

	const deleteTodo = (id) => {
		db.collection('todos').doc(id).delete()
	}

	const changeCheckBox = (e, id) => {
		db.collection('todos').doc(id).update({
			check: e.target.checked
		})
	}

	// code for getting data from the database
	const getData = () => {
		const data = db.collection('todos').orderBy('timestamp', 'desc');
		return data;
	}

	useEffect(() => {
		const data = getData();
		data.onSnapshot(snapshot => {
			setTodos(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					todo: doc.data().todo,
					check: doc.data().check,
				})
				)
			)
		})
	}, []);

	let content =
		<ul>
			{todos.map((obj) => (
				<Todo
					obj={obj}
					changeCheckBox={changeCheckBox}
					deleteTodo={deleteTodo}
					key={obj.id}
				/>
			))}
		</ul>

	return (
		<div className="App">
			<Header />
			<InputComponent
				input={input}
				setInput={setInput}
				changeInput={changeInput}
				addTodo={addTodo}
			/>
			{content}
		</div>
	);
}

export default App;
