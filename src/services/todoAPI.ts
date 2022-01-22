import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {baseUrl} from "../config";
import {QueryParams, Todo} from "../types/todo";

export const todoAPI = createApi({
	reducerPath: 'todoAPI',
	baseQuery: fetchBaseQuery({
		baseUrl,
	}),
	tagTypes: ['Todos'],
	endpoints: (build) => ({
		fetchTodos: build.query<Todo[], QueryParams>({
			query: (params) => ({
				url: '/todos',
				params
			}),
			providesTags: () => ['Todos'],
			keepUnusedDataFor: 10,
		}),
		fetchTodoById: build.query<Todo, number>({
			query: (id) => ({
				url: `/todos/${id}`,
			}),
		}),
		addTodos: build.mutation<Todo, Todo>({
			query: (todo) => ({
				url: '/todos',
				method: 'POST',
				body: todo
			}),
			invalidatesTags: () => ['Todos']
		}),
		editTodos: build.mutation<Todo, Todo>({
			query: (todo) => ({
				url: `/todos/${todo.id}`,
				method: 'PUT',
				body: todo
			}),
			invalidatesTags: () => ['Todos']
		}),
		removeTodos: build.mutation<number, number>({
			query: (id) => ({
				url: `/todos/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: () => ['Todos']
		}),
	})
})

export const {useFetchTodosQuery, useAddTodosMutation, useEditTodosMutation, useRemoveTodosMutation} = todoAPI
