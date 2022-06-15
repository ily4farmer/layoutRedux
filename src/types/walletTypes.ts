import { providers } from "ethers"

export interface State {
    provider: null | (() => providers.Web3Provider),
    singer: null | (() => providers.JsonRpcSigner),
    walletAddress: string
}


export enum WalletActionsTypes {
    SET_PROVIDER = 'SET_PROVIDER',
    SET_SINGER = 'SET_SINGER',
    SET_WALLETADDRESS = 'SET_WALLETADDRESS',
    SET_STATE = 'SET_STATE'
}

interface SetProviderAction {
    type: WalletActionsTypes.SET_PROVIDER,
    payload: () => providers.Web3Provider
}
interface SetSingerAction {
    type: WalletActionsTypes.SET_SINGER,
    payload: () => providers.JsonRpcSigner
}
interface SetWalletAddressAction {
    type: WalletActionsTypes.SET_WALLETADDRESS,
    payload: string
}

interface SetStateAction {
    type: WalletActionsTypes.SET_STATE,
    provider: () => providers.Web3Provider,
    singer: () => providers.JsonRpcSigner,
    walletAddress: string
}

export type WalletActions = SetProviderAction | SetSingerAction | SetWalletAddressAction | SetStateAction