import { ethers } from 'ethers';

const network = "rinkeby"; // use rinkeby testnet
const provider = ethers.getDefaultProvider(network, {
    etherscan: process.env.REACT_APP_ETHERSCAN_API_KEY
});

export const createWallet = () => {
    const wallet = ethers.Wallet.createRandom()
    return wallet;
};

export const getWalletFromMnemonic = (mnemonic) => {
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    return wallet;
}

export const getWalletFromPrivateKey = (privateKey) => {
    return new ethers.Wallet(privateKey);
}

export const getBalance = async (address) => {
    const balance = await provider.getBalance(address);
    const balanceInEth = ethers.utils.formatEther(balance);
    return balanceInEth;
}