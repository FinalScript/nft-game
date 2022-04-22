const initialState = {
    account: null,
    balance: null,
    network: null,
    isRightNetwork: false,
    smartContract: null,
    web3: null,
    errorMsg: '',
};

const blockchainReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'CONNECTION_FAILED':
            return {
                ...state,
                errorMsg: action.payload.errorMsg,
            };
        case 'UPDATE_BALANCE':
            return {
                ...state,
                balance: action.payload.balance,
            };
        case 'UPDATE_NETWORK':
            return {
                ...state,
                network: action.payload.network,
            };
        case 'UPDATE_RIGHTNETWORK':
            return {
                ...state,
                isRightNetwork: action.payload.isRightNetwork,
            };
        case 'UPDATE_ACCOUNT':
            return {
                ...state,
                account: action.payload.account,
            };
        case 'UPDATE_WEB3':
            return {
                ...state,
                web3: action.payload.web3,
            };
        case 'UPDATE_SMARTCONTRACT':
            return {
                ...state,
                smartContract: action.payload.smartContract,
            };
        default:
            return state;
    }
};

export default blockchainReducer;