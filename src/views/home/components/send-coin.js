import React from "react";
import { Paper, Typography, Box, TextField } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { useRef, useState } from 'react';
import { sendEth } from "../../../wallet";

const SendCoin = ({ wallet, setSnackBarMsg }) => {
    const [isLoading, setIsLoading] = useState(false);
    const addressInputRef = useRef(null);
    const amountInputRef = useRef(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const onClickSend = () => {
        setIsLoading(true);

        const address = addressInputRef.current.value;
        const amount = amountInputRef.current.value;

        try {
            if (address == null || address.length == 0) {
                throw new Error("Address is required");
            }

            if (amount == null || amount.length == 0) {
                throw new Error("Amount is required");
            }

            if (isNaN(amount)) {
                throw new Error("Amount must be a number");
            }

            if (amount <= 0) {
                throw new Error("Amount must be greater than 0");
            }

            setErrorMsg(null);
            sendEth(wallet, address, amount).then(() => {
                setIsLoading(false);
                setSnackBarMsg("Transaction sent successfully");
            }).catch(err => {
                setErrorMsg(err.message);
                setIsLoading(false);
            });
        } catch (err) {
            setErrorMsg(err.message);
            setIsLoading(false);
        }
    }

    return (
        <Paper elevation={0} style={{ backgroud: 'white', borderRadius: 16, padding: 16 }}>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex' }}>
                        <Typography fontWeight={700} style={{ flex: 1 }}>
                            Send ETH
                        </Typography>
                        <Box width={16} />
                        <div style={{ color: 'red', maxWidth: 500, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            <Typography noWrap style={{ color: 'red' }}>
                                {errorMsg}
                            </Typography>
                        </div>
                    </div>
                    <Box height={16} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <TextField inputRef={addressInputRef} required id="outlined-basic" label="Destination Address" variant="outlined" />
                        <Box height={8} />
                        <TextField inputRef={amountInputRef} required id="outlined-basic" label="Amount" variant="outlined" />
                        <Box height={8} />
                        <LoadingButton onClick={onClickSend} loading={isLoading} variant="contained" disableElevation style={{ background: '#05c0a5' }}>
                            Send
                        </LoadingButton >
                    </div>
                </div>
            </div>
        </Paper>
    )
}

export default SendCoin;