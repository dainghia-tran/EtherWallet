import React from "react";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import createWallet from "../../wallet";

const IndexPage = () => {
    const onClickCreate = () => {
        createWallet();
    }

    return (
        <div >
            <main
                style={{ height: '100vh', display: "flex", alignItems: "center", justifyContent: "center", background: '#f2fafa' }}>
                <Paper elevation={3} style={{ padding: 36, borderRadius: 16 }}>
                    <div>
                        <Typography variant="h5">
                            Choose your way to get started!
                        </Typography>
                        <Box height={50} />
                        <div >
                            <div onClick={onClickCreate} style={{ height: 50, borderRadius: 25, color: 'white', background: '#05c0a5', display: "flex", alignItems: "center", justifyContent: 'center' }}>
                                Create new wallet
                            </div>
                            <Box height={16} />
                            <div style={{ height: 50, borderRadius: 25, color: 'white', background: '#05c0a5', display: "flex", alignItems: "center", justifyContent: 'center' }}>
                                Import existing wallet
                            </div>
                        </div>
                    </div>
                </Paper>
            </main>
        </div >
    );
}

export default IndexPage;