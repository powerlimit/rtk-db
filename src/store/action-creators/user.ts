import {axios} from "hooks/useAxios";
import {User} from "types/user";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk<User[], number>(
	'user/fetchUsers',
	async (page, thunkAPI) => {
		try {
			const users = await axios.get('/users', {
				params: {
					_page: page,
					_limit: 5
				}
			})
			return users.data
		} catch (e) {
			return thunkAPI.rejectWithValue((e as Error).message)
		}
	}
)

export const addUser = createAsyncThunk<User, string>(
	'user/addUser',
	async (userName) => {
		const user = {name: userName} as User
		const {data} = await axios.post<User>('/users', {...user})
		return data
	}
)

export const editUser = createAsyncThunk<User, User>(
	'user/editUser',
	async (user) => {
		const {data} = await axios.put<User>(`/users/${user.id}`, {...user})
		return data
	}
)

export const removeUser = createAsyncThunk<number, number>(
	'user/removeUser',
	async (id) => {
		await axios.delete(`/users/${id}`)
		return id
	}
)
