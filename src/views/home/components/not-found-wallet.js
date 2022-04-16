import { Typography, Button, Box, Paper } from "@mui/material";
import React from "react";

const NotFoundWallet = () => {
    const onClickCreateWallet = () => {
        window.location.href = '/create';
    }

    return (
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <Paper elevation={3} style={{ width: 500, padding: 16, borderRadius: 16 }}>
                <Typography variant="h2">
                    We cannot find wallet on your device
                </Typography>

                <Box height={36} />
                <Typography variant="h5">
                    Create one?
                </Typography>
                <Box height={16} />

                <Button onClick={onClickCreateWallet} variant="contained" disableElevation style={{ background: '#05c0a5', textTransform: 'none' }}>
                    Create Wallet
                </Button>
            </Paper>
        </div>
    )
}

export default NotFoundWallet;