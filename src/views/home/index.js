import React from "react";
import NotFoundWallet from "./components/not-found-wallet";
import { useEffect, useState } from "react";
import { getBalance } from "../../wallet";
import { Box, Snackbar, Alert } from "@mui/material";
import WalletInfo from "./components/wallet-info";
import TransactionHistory from "./components/transaction-history";

const HomePage = () => {
    const storedWallet = localStorage.getItem('wallet');
    const [wallet, setWallet] = useState(null);
    const [snackBarMsg, setSnackBarMsg] = useState(null);

    useEffect(() => {
        if (storedWallet != null) {
            const parsedWallet = JSON.parse(storedWallet);
            console.log('wallet', storedWallet);
            setWallet(parsedWallet);
            getBalance(parsedWallet.address).then(balance => {
                parsedWallet.balance = balance;
                setWallet(parsedWallet);
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
    if (storedWallet == null) {
        return <NotFoundWallet />;
    }

    return (
        <div style={{ height: '100vh', background: '#f2f3f6' }}>
            <Snackbar open={snackBarMsg != null} onClose={handleOnSnackbarClose} autoHideDuration={1000}>
                <Alert severity={(snackBarMsg != null && snackBarMsg.startsWith("Error:")) ? 'error' : 'success'}>{snackBarMsg}</Alert>
            </Snackbar>
            <Box p={2}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 1, }}>
                        <WalletInfo wallet={wallet} onClickCopyAddress={onClickCopyAddress} />
                    </div>
                    <Box height={16} />
                    <div style={{ flex: 1, }}>
                        <TransactionHistory walletAddress={wallet?.address} />
                    </div>
                </div>
            </Box>

        </div>
    )
}

export default HomePage;
