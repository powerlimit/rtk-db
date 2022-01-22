import {TodoAction, TodoActionTypes, TodoState} from "types/todo";

const initState: TodoState = {
	todos: [],
	loading: false,
	error: null,
}

export const todoReducer = (state = initState, action: TodoAction): TodoState => {
	switch (action.type) {
		case TodoActionTypes.FETCH_TODOS:
			return {
				...state,
				loading: true,
				error: null
			}
		case TodoActionTypes.FETCH_TODOS_ERROR:
			return {
				...state,
				loading: false,
				todos: [],
				error: action.payload
			}
		case TodoActionTypes.FETCH_TODOS_SUCCESS:
			return {
				...state,
				loading: false,
				todos: action.payload
			}
		case TodoActionTypes.ADD_TODO:
			return state
		case TodoActionTypes.EDIT_TODO:
			const idx = state.todos.findIndex(todo => todo.id === action.payload.id)
			return {
				...state,
				todos: [
					...state.todos.slice(0, idx),
					action.payload,
					...state.todos.slice(idx + 1),
				],
			}
		case TodoActionTypes.REMOVE_TODO:
			return {
				...state,
				todos: state.todos.filter(t => action.payload.id !== t.id),
			}
		default:
			return state
	}
}