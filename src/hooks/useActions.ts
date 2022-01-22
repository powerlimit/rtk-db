import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from "store/action-creators";
import {AppDispatch} from "../store";

export const useTypedDispatch = () => useDispatch<AppDispatch>()
export const useActions = () => {
    const dispatch = useTypedDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}