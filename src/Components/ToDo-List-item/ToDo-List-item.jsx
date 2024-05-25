import TodoItem from './TodoItem';
import { useContext } from 'react';
import { AppContext } from '../../context';

export const ToDoListItem = () => {
	const { todos, updateTodo, deleteTodo, updateStatusTodo, search } =
		useContext(AppContext);

	let searchFilter = search;
	if (!searchFilter) {
		searchFilter = '';
	}

	return (
		<>
			{todos
				.filter((item) => {
					return searchFilter.toLowerCase() === ''
						? item
						: item.title.toLowerCase().includes(searchFilter);
				})
				.map((todo) => (
					<TodoItem
						{...todo}
						key={todo.id}
						updateTodo={updateTodo}
						deleteTodo={deleteTodo}
						updateStatusTodo={updateStatusTodo}
					/>
				))}
		</>
	);
};
