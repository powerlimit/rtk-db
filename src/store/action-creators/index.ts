import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'
import {setPage} from "../reducers/user/userSlice";

const actionCreators = {
	...UserActionCreators,
	...TodoActionCreators,
	setPage,
}

export default actionCreators
