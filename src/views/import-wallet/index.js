import React from "react";
import { Paper, Typography, Box, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useState, useRef } from "react";
import { getWalletFromMnemonic, getWalletFromPrivateKey } from "../../wallet";

const ImportWalletPage = () => {
    const [type, setType] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const valueRef = useRef('');

    const onClickAccess = () => {
        const value = valueRef.current.value.trim();
        if (type === 0) {
            try {
                const wallet = getWalletFromMnemonic(value)
                localStorage.setItem('wallet_private_key', wallet.privateKey);
            } catch (err) {
                console.log(err);
                setErrorMsg("Invalid Mnemonic");
                return;
            }
        } else {
            try {
                const wallet = getWalletFromPrivateKey(value)
                localStorage.setItem('wallet_private_key', wallet.privateKey);
            } catch (err) {
                console.log(err);
                setErrorMsg("Invalid private key");
                return;
            }
        }
        window.location.href = '/home';
    }

    const onClickMnemonic = () => {
        setType(0);
    }

    const onClickPrivateKey = () => {
        setType(1);
    }

    const handleOnSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setErrorMsg(null);
    }

    return (
        <div style={{ height: '100vh', display: "flex", alignItems: "center", justifyContent: "center", background: '#f2fafa' }}>
            <Snackbar open={errorMsg != null} onClose={handleOnSnackbarClose} autoHideDuration={1000}>
                <Alert severity='error'>{errorMsg}</Alert>
            </Snackbar>
            <Paper elevation={3} style={{ padding: 36, borderRadius: 16, width: 600, }}>
                <div>
                    <Typography variant="h5" fontWeight={700} style={{ textAlign: 'center' }}>
                        Import Wallet
                    </Typography>
                    <Box height={24} />
                    <div style={{ display: 'flex' }}>
                        <div onClick={onClickMnemonic} style={{ flex: 1, height: 32, color: type === 0 ? 'white' : 'inherit', background: type === 0 ? '#0057b7' : 'white', border: '2px solid #0057b7', margin: 'auto', textAlign: 'center', borderRadius: 16 }}>
                            Mnemonic
                        </div>
                        <Box width={8} />
                        <div onClick={onClickPrivateKey} style={{ flex: 1, height: 32, color: type === 1 ? 'white' : 'inherit', background: type === 1 ? '#0057b7' : 'white', border: '2px solid #0057b7', margin: 'auto', textAlign: 'center', borderRadius: 16 }}>
                            Private key
                        </div>
                    </div>
                    <Box height={24} />
                    <TextField inputRef={valueRef} variant="outlined" label="Enter your mnemonic phrase here, seperated by a space" multiline rows={3} style={{ width: '100%' }} />
                    <Box height={24} />
                    <Button onClick={onClickAccess} variant="contained" disableElevation style={{ width: '100%', background: '#05c0a5', textTransform: 'none' }}>
                        Access my wallet
                    </Button>
                </div>
            </Paper >
        </div >
    )
}

export default ImportWalletPage;