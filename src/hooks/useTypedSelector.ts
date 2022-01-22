import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppStore} from "../store";

export const useTypedSelector: TypedUseSelectorHook<AppStore> = useSelector