import {Dispatch} from "redux";
import {axios} from "hooks/useAxios";
import {Todo, TodoAction, TodoActionTypes} from "types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
	return async (dispatch: Dispatch<TodoAction>) => {
		try {
			dispatch({type: TodoActionTypes.FETCH_TODOS})
			const resp = await axios.get('/todos', {
				params: {
					_page: page,
					_limit: limit
				}
			})
			dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: resp.data, page, limit})
		} catch (e) {
			dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: (e as Error).message})
		}
	}
}

export const addTodo = (todo: Todo) => {
	return async () => {
		await axios.post<Todo>('/todos', {...todo})
	}
}

export const editTodo = (todo: Todo) => {
	return async (dispatch: Dispatch<TodoAction>) => {
		const {data} = await axios.put<Todo>(`/todos/${todo.id}`, {...todo})
		dispatch({type: TodoActionTypes.EDIT_TODO, payload: data})
	}
}

export const removeTodo = (id: number) => {
	return async (dispatch: Dispatch<TodoAction>) => {
		await axios.delete(`/todos/${id}`)
		dispatch({type: TodoActionTypes.REMOVE_TODO, payload: {id}})
	}
}