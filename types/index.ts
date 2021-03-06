import { Contract } from 'web3-eth-contract';
import Web3 from 'web3';

declare global {
    interface Window {
        ethereum: any;
        web3: any;
    }
}

export interface BlockchainData {
    account?: string;
    balance?: string;
    network?: string;
    isRightNetwork: boolean;
    hasMetaMask: boolean;
    minerContract?: Contract;
    mineContract?: Contract;
    diamondContract?: Contract;
    vaultContract?: Contract;
    eventContract?: Contract;
    web3?: Web3;
}

export interface BlockchainState {
    blockchain: BlockchainData;
}

export interface MintData {
    isWhiteListed: boolean;
    gameStarted: boolean;
    presaleOpen: boolean;
    baseSalesOpen: boolean;
    baseSupply: number;
    presaleSupply: number;
    maxPresaleSupply: number;
    maxBaseSupply: number;
    maxTotalSupply: number;
    totalSupply: number;
    maxPerMint: number;
    nftTax: string;
    price: string;
    superPercentage: number;
    presaleStartTime: string;
    baseSaleStartTime: string;
}

export interface MintDataState {
    mintData: MintData;
}

export interface CustomAlert {
    isError: boolean;
    key: string;
    link?: string;
    hash?: string;
    errorMsg?: string;
}

export interface Speech {
    message: string;
    isError?: boolean | true;
}

export interface GeneralData {
    isLoading: boolean;
    alerts: CustomAlert[];
    passwordProtected: boolean;
    enteredPassword: string;
    botCurrentSpeech?: Speech;
    botToggled: boolean;
}

export interface GeneralState {
    general: GeneralData;
}
