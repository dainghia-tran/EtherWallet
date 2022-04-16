import React from "react";
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import { Paper, Typography, Box, Button } from "@mui/material";

const WalletInfo = ({ wallet, onClickCopyAddress }) => {
    return (
        <Paper elevation={0} style={{ backgroud: 'white', borderRadius: 16, padding: 16 }}>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex' }}>
                        <Typography style={{ marginRight: 8 }}>
                            Wallet address:
                        </Typography>
                        <Typography fontWeight={700}>
                            {wallet != null ? wallet.address : null}
                        </Typography>
                        <Box width={16} />
                        <ContentCopyRoundedIcon onClick={onClickCopyAddress} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Typography style={{ marginRight: 8 }}>
                            Balance:
                        </Typography>
                        <Typography fontWeight={700}>
                            {wallet != null ? wallet.balance : null} ETH
                        </Typography>
                    </div>
                </div>
                <div>
                    <Button variant="text">Logout</Button>
                </div>
            </div>
        </Paper>
    )
}

export default WalletInfo;