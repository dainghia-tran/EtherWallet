import React from "react";
import { Typography, Button, Box } from "@mui/material";

const WellDoneStep = ({ onClickAccessWallet }) => {
    const onClickCreateAnotherWallet = () => {
        window.location.reload();
    }

    return (
        <div>
            <Box height={8} />
            <Typography>
                You are now ready to take advantage of all that Ethereum has to offer! Access with mnemonic phrase should only be used in an offline setting
            </Typography>
            <Box height={8} />
            <div style={{ display: 'flex' }}>
                <Button onClick={onClickAccessWallet} variant="contained" disableElevation style={{ flex: 1, background: '#05c0a5', textTransform: 'none' }}>
                    Access Wallet
                </Button>
                <Button onClick={onClickCreateAnotherWallet} variant="text" disableElevation style={{ flex: 1, textTransform: 'none' }}>
                    Create another wallet
                </Button>
            </div>
        </div>
    )
}

export default WellDoneStep;