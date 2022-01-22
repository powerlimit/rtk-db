import {
	MiddlewareAPI,
	isRejectedWithValue,
	Middleware,
} from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware =
	(api: MiddlewareAPI) => (next) => (action) => {
		if (isRejectedWithValue(action)) {
			toast('Error occurred')
		}

		return next(action)
	}