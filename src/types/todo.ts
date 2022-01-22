export interface Todo {
	userId: number
	id: number
	title: string
	completed: boolean
}

export interface TodoState {
	todos: Todo[]
	loading: boolean
	error: null | string
}

export enum TodoActionTypes {
	FETCH_TODOS = 'FETCH_TODOS',
	FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
	FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
	ADD_TODO = 'ADD_TODO',
	REMOVE_TODO = 'REMOVE_TODO',
	EDIT_TODO = 'EDIT_TODO',
}

export type QueryParams = {
	_page: number
	_limit: number
}

interface FetchTodoAction {
	type: TodoActionTypes.FETCH_TODOS
}

interface FetchTodoActionSuccess {
	type: TodoActionTypes.FETCH_TODOS_SUCCESS
	payload: Array<any>
	page: number
	limit: number
}

interface FetchTodoActionError {
	type: TodoActionTypes.FETCH_TODOS_ERROR
	payload: string
}

interface AddTodo {
	type: TodoActionTypes.ADD_TODO
	payload: Todo
}

interface RemoveTodo {
	type: TodoActionTypes.REMOVE_TODO
	payload: { id: number }
}

interface EditTodo {
	type: TodoActionTypes.EDIT_TODO
	payload: Todo
}

export type TodoAction =
	FetchTodoAction
	| FetchTodoActionSuccess
	| FetchTodoActionError
	| AddTodo
	| RemoveTodo
	| EditTodo