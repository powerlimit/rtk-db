import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, UserState} from "../../../types/user";
import {addUser, editUser, fetchUsers, removeUser} from "../../action-creators/user";

const initialState: UserState = {
	page: 1,
	users: [],
	loading: false,
	error: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setPage(state, action) {
			state.page = action.payload
		}
	},
	extraReducers: (builder) =>
		builder.addCase(fetchUsers.pending.type, (state) => {
			state.loading = true
			state.error = null
		})
			.addCase(fetchUsers.fulfilled.type, (state, action: PayloadAction<User[]>) => {
				state.loading = false
				state.users = action.payload
			})
			.addCase(fetchUsers.rejected.type, (state, action: PayloadAction<string>) => {
				state.loading = false
				state.error = action.payload
			})
			.addCase(addUser.fulfilled.type, (state, action: PayloadAction<User>) => {
				state.users.push(action.payload)
			})
			.addCase(editUser.fulfilled.type, (state, action: PayloadAction<User>) => {
				const idx = state.users.findIndex(user => user.id === action.payload.id)
				state.users[idx] = action.payload
			})
			.addCase(removeUser.fulfilled.type, (state, action: PayloadAction<number>) => {
				state.users = state.users.filter(u => action.payload !== u.id)
			})
})

export const {setPage} = userSlice.actions

export default userSlice.reducer