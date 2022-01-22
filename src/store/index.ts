import {configureStore} from "@reduxjs/toolkit";
import {todoAPI} from "../services/todoAPI";
import userReducer from "./reducers/user/userSlice";
import {rtkQueryErrorLogger} from "../helpers/errorHandler";

export const store = configureStore({
	reducer: {
		user: userReducer,
		[todoAPI.reducerPath]: todoAPI.reducer,
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat([todoAPI.middleware, rtkQueryErrorLogger])
	}
})
export const state = store.getState()
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
