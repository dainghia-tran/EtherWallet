import { ethers } from 'ethers';

export const createWallet = () => {
    const wallet = ethers.Wallet.createRandom()
    return wallet;
};
