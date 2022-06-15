import { providers } from "ethers";
import { Dispatch } from "redux";
import { WalletActions, WalletActionsTypes } from "../../../types/walletTypes";


export const metamask = () => async (dispatch: Dispatch<WalletActions>): Promise<void> => {
    if ((window as any).ethereum) {
        try {
            const provider = new providers.Web3Provider((window as any).ethereum)
            const singer = provider.getSigner()
            const walletAddress = await singer.getAddress()
            dispatch({
                type: WalletActionsTypes.SET_STATE,
                provider: () => provider,
                singer: () => singer,
                walletAddress
            })
        } catch (error) {
            console.log(error);

        }
    }
}
