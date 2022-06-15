import { State, WalletActions, WalletActionsTypes } from "../../types/walletTypes"

const initialState: State = {
    provider: null,
    singer: null,
    walletAddress: ''
}


export const walletReducer = (state = initialState, action: WalletActions): State => {
    switch (action.type) {
        case WalletActionsTypes.SET_PROVIDER:
            return { ...state, provider: action.payload }
        case WalletActionsTypes.SET_SINGER:
            return { ...state, singer: action.payload }
        case WalletActionsTypes.SET_WALLETADDRESS:
            return { ...state, walletAddress: action.payload }
        case WalletActionsTypes.SET_STATE:
            return { ...state, provider: action.provider, singer: action.singer, walletAddress: action.walletAddress }
        default:
            return state
    }
}