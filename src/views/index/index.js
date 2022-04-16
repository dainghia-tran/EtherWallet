import React from "react";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system"
import { Link } from "react-router-dom";

const IndexPage = () => {
    const mnemonic = localStorage.getItem('mnemonic');

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
                            {
                                mnemonic ? <div>
                                    <Link to={'/home'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div style={{ height: 50, borderRadius: 25, color: 'white', background: '#05c0a5', display: "flex", alignItems: "center", justifyContent: 'center' }}>
                                            Continue using your existing wallet
                                        </div>
                                    </Link>
                                    <Box height={16} />
                                </div> : <div />
                            }
                            <Link to={'/create'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ height: 50, borderRadius: 25, border: '2px solid #05c0a5', color: mnemonic ? 'black' : 'while', background: mnemonic ? 'white' : '#05c0a5', display: "flex", alignItems: "center", justifyContent: 'center' }}>
                                    Create new wallet
                                </div>
                            </Link >
                            <Box height={16} />
                            <div style={{ height: 50, borderRadius: 25, border: '2px solid #05c0a5', display: "flex", alignItems: "center", justifyContent: 'center' }}>
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