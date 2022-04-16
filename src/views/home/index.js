import React from "react";
import NotFoundWallet from "./components/not-found-wallet";
import { useEffect, useState } from "react";
import { getWalletFromMnemonic, getBalance } from "../../wallet";
import { Box, Snackbar, Alert } from "@mui/material";
import WalletInfo from "./components/wallet-info";
import TransactionHistory from "./components/transaction-history";

const HomePage = () => {
    const storedMnemonic = localStorage.getItem('mnemonic');
    const [wallet, setWallet] = useState(null);
    const [snackBarMsg, setSnackBarMsg] = useState(null);

    useEffect(() => {
        if (storedMnemonic != null) {
            const fetchedWallet = getWalletFromMnemonic(storedMnemonic);
            setWallet(fetchedWallet);
            getBalance(fetchedWallet.address).then(balance => {
                fetchedWallet.balance = balance;
                setWallet(fetchedWallet);
            });
        }
    }, []);

    const onClickCopyAddress = () => {
        navigator.clipboard.writeText(wallet.address);
        setSnackBarMsg('Address copied to clipboard');
    }

    const handleOnSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackBarMsg(null);
    };
    if (storedMnemonic == null) {
        return <NotFoundWallet />;
    }

    return (
        <div style={{ height: '100vh', background: '#f2f3f6' }}>
            <Snackbar open={snackBarMsg != null} onClose={handleOnSnackbarClose} autoHideDuration={1000}>
                <Alert severity={(snackBarMsg != null && snackBarMsg.startsWith("Error:")) ? 'error' : 'success'}>{snackBarMsg}</Alert>
            </Snackbar>
            <Box p={2}>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1, }}>
                        <WalletInfo wallet={wallet} onClickCopyAddress={onClickCopyAddress} />
                    </div>
                    <Box width={16} />
                    <div style={{ flex: 1, }}>
                        <TransactionHistory />
                    </div>
                </div>
            </Box>

        </div>
    )
}

export default HomePage;
