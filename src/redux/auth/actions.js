import { authTypes } from "./types"
import Web3 from "web3";
import Web3Modal from "web3modal";
// import WalletModel from "../../models/WalletModel";
// import WalletConnectProvider from "@walletconnect/web3-provider";

export const doAuth = () => {
    return {
        type: authTypes.DO_AUTH
    }
}

export const onLoginSuccess = (data) => {
    return {
        type: authTypes.SIGNIN_SUCCESS,
        data
    }
}

export const onLoginError = (error) => {
    return {
        type: authTypes.SIGNIN_ERROR,
        error
    }
}

export const doLogin = () => {
    return async (dispatch) => {
        dispatch(doAuth())
        let providerOptions;
        let web3Modal;
        let provider;
        let web3;
        providerOptions = {
            metamask: {
                id: "injected",
                name: "MetaMask",
                type: "injected",
                check: "isMetaMask"
            },
            // walletconnect: {
            //     package: WalletConnectProvider, // required
            //     options: {
            //         infuraId: "INFURA_ID", // Required
            //         network: "rinkeby",
            //         qrcodeModalOptions: {
            //             mobileLinks: [
            //                 "rainbow",
            //                 "metamask",
            //                 "argent",
            //                 "trust",
            //                 "imtoken",
            //                 "pillar"
            //             ]
            //         }
            //     }
            // },
            // authereum: {
            //     package: Authereum // required
            // },
        };
        web3Modal = new Web3Modal({
            network: "rinkeby",
            cacheProvider: false,
            providerOptions
        });
        provider = await web3Modal.connect()
        web3 = new Web3(provider)
        return {web3, web3Modal, provider}
        // return web3Modal
    }
}

export const getUserLogued = () => {
    return async (dispatch) => {
        let web3 = new Web3(Web3.givenProvider)
        return web3.eth.getAccounts().then(
            response => {
                if (response[0]) {
                    dispatch(onLoginSuccess(response[0]))
                } else {
                    onLoginError('not logued')
                }
                return {}
            }
        ).catch(
            err => onLoginError(err)
        )
    }
}