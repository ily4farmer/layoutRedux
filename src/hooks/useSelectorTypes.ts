

import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store";


export const useSelectorTypes: TypedUseSelectorHook<RootState> = useSelector