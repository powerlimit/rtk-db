export interface User {
	id: number
	name: string
}

export interface UserState {
	page: number
	users: User[]
	loading: boolean
	error: string | null
}
