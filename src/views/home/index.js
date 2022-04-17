import React from "react";
import NotFoundWallet from "./components/not-found-wallet";
import { useEffect, useState } from "react";
import { getBalance, getWalletFromPrivateKey } from "../../wallet";
import { Box, Snackbar, Alert } from "@mui/material";
import WalletInfo from "./components/wallet-info";
import TransactionHistory from "./components/transaction-history";
import SendCoin from "./components/send-coin";

const HomePage = () => {
    const storedPK = localStorage.getItem('wallet_private_key');
    const [wallet, setWallet] = useState(null);
    const [snackBarMsg, setSnackBarMsg] = useState(null);

    useEffect(() => {
        if (storedPK != null) {
            const fetchedWallet = getWalletFromPrivateKey(storedPK);
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
    if (storedPK == null) {
        return <NotFoundWallet />;
    }

    return (
        <div style={{ height: '100vh', background: '#f2f3f6' }}>
            <Snackbar open={snackBarMsg != null} onClose={handleOnSnackbarClose} autoHideDuration={2000}>
                <Alert severity={(snackBarMsg != null && snackBarMsg.startsWith("Error:")) ? 'error' : 'success'}>{snackBarMsg}</Alert>
            </Snackbar>
            <Box p={2}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
                        <div style={{ flex: 1 }}>
                            <WalletInfo style={{ flex: 1 }} wallet={wallet} onClickCopyAddress={onClickCopyAddress} />
                        </div>
                        <Box width={16} />
                        <div style={{ flex: 1 }}  >
                            <SendCoin wallet={wallet ?? {}} setSnackBarMsg={setSnackBarMsg} />
                        </div>
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
