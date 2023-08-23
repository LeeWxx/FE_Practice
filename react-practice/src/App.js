import React, { useState, useReducer, useRef, useCallback } from 'react';
import TodoTemplate from './Chapter_10/TodoTemplate';
import TodoInsert from './Chapter_10/TodoInsert';
import TodoList from './Chapter_10/TodoList';

function createBulkTodos() {
	const array = [];
	for (let i = 1; i <= 2500; i++) {
		array.push({
			id: i,
			text: `할 일 ${i}`,
			checked: false,
		});
	}
	return array;
}

function todoReducer(todos, action) {
	switch (action.type) {
		case 'INSERT': // 새로 추가
			return todos.concat(action.todo);
		case 'REMOVE': // 제거
			return todos.filter((todo) => todo.id !== action.id);
		case 'TOGGLE': // 토글
			return todos.map((todo) =>
				todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
			);
		default:
			return todos;
	}
}

const App = () => {
	const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

	const nextId = useRef(2501);

	const onInsert = useCallback((text) => {
		const todo = {
			id: nextId.current,
			text,
			checked: false,
		};
		dispatch({ type: 'INSERT', todo });
		nextId.current += 1;
	}, []);

	const onRemove = useCallback((id) => {
		dispatch({ type: 'REMOVE', id });
	}, []);

	const onToggle = useCallback((id) => {
		dispatch({ type: 'TOGGLE', id });
	}, []);

	return (
		<TodoTemplate>
			<TodoInsert onInsert={onInsert} />
			<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
		</TodoTemplate>
	);
};

export default App;