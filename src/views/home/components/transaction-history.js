import React from "react";
import { useState, useEffect } from "react";
import { Paper, Box, Table, TableHead, TableRow, TableBody, TableCell, TableContainer, tableCellClasses } from "@mui/material";
import axios from 'axios';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        justifyContent: 'center',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const TransactionHistory = ({ walletAddress }) => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        if (walletAddress) {
            const fetchTransactions = () => {
                try {
                    axios.get(
                        "https://api-rinkeby.etherscan.io/api",
                        {
                            params: {
                                apikey: process.env.REACT_APP_ETHERSCAN_API_KEY,
                                module: "account",
                                action: "txlist",
                                address: walletAddress,
                                sort: "asc",
                            },
                        }
                    ).then(res => {
                        console.log('res', res)
                        if (res.data.status === '1') {
                            setTransactions(res.data.result);
                        }
                    });
                } catch (err) {
                    console.log(err);
                }
            }
            fetchTransactions();
        }
    }, [walletAddress]);

    return (
        <Paper elevation={0} style={{ backgroud: 'white', borderRadius: 16, padding: 16 }}>
            <div style={{ display: 'flex' }}>
                Transactions
            </div>
            <Box height={16} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell width={'20%'} align={'center'}>Txn Hash</StyledTableCell>
                            <StyledTableCell width={'5%'} align={'center'}>Block</StyledTableCell>
                            <StyledTableCell width={'10%'} align={'center'}>Date</StyledTableCell>
                            <StyledTableCell width={'25%'} align={'center'}>From</StyledTableCell>
                            <StyledTableCell width={'25%'} align={'center'}>To</StyledTableCell>
                            <StyledTableCell width={'5%'} align={'center'}>Value</StyledTableCell>
                            <StyledTableCell width={'10%'} align={'center'}>Txn Fee</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.map((txn) => (
                            <StyledTableRow key={txn.hash} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                            >
                                <StyledTableCell component="th" scope="row" style={{ overflowX: 'scroll', maxWidth: '100px' }}>
                                    {txn.hash}
                                </StyledTableCell ><StyledTableCell component="th" scope="row" style={{ overflowX: 'scroll', maxWidth: '100px' }}>
                                    {txn.blockNumber}
                                </StyledTableCell ><StyledTableCell component="th" scope="row" style={{ overflowX: 'scroll', maxWidth: '100px' }}>
                                    {new Date(txn.timeStamp * 1000).toLocaleString()}
                                </StyledTableCell ><StyledTableCell component="th" scope="row" style={{ overflowX: 'scroll', maxWidth: '100px' }}>
                                    {txn.from}
                                </StyledTableCell ><StyledTableCell component="th" scope="row" style={{ overflowX: 'scroll', maxWidth: '100px' }}>
                                    {txn.to}
                                </StyledTableCell ><StyledTableCell component="th" scope="row" style={{ overflowX: 'scroll', maxWidth: '100px' }}>
                                    {txn.value / 1e18}
                                </StyledTableCell ><StyledTableCell component="th" scope="row" style={{ overflowX: 'scroll', maxWidth: '100px' }}>
                                    {(txn.gasPrice * txn.gasUsed) / 1e18}
                                </StyledTableCell >
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default TransactionHistory;