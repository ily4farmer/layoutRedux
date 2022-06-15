import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk'
import { walletReducer } from "./reducers/walletReducer";


export const reducers = combineReducers({
    wallet: walletReducer
})


export type RootState = ReturnType<typeof reducers>


export const store = legacy_createStore(reducers, applyMiddleware(thunk))