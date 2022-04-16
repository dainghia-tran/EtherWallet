import { ethers } from 'ethers';

const createWallet = () => {
    const wallet = ethers.Wallet.createRandom()
    return wallet;
};


export default createWallet