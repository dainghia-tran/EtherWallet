import { Typography } from "@mui/material";
import React from "react";
import { useState, useRef } from "react";
import { TextField, Box, Button } from "@mui/material";

const VerificationStep = ({ mnemonic, onClickNext, onClickBack }) => {
    const [hasError, setHasError] = useState(false);
    const valueRef = useRef('')

    const onClickVerify = () => {
        const inputWordsValue = valueRef.current.value;
        const listWords = inputWordsValue.trim().split(' ');
        const listMnemonic = mnemonic.split(' ');

        if (listWords.length < 3) {
            setHasError(true);
            return;
        }

        for (const e in listWords) {
            if (listMnemonic.includes(listWords[e])) {
                setHasError(false);
            } else {
                setHasError(true);
                return;
            }
        }

        onClickNext();
    }

    return (
        <div>
            <Box height={8} />
            <Typography>
                Write down at least 3 words in your Mnemonic Phrase. Seperated by a space.
            </Typography>
            <Box height={8} />
            <TextField error={hasError} inputRef={valueRef} id="outlined-basic" style={{ width: '100%' }} variant="outlined" />

            <Box height={8} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={onClickBack} variant="contained" style={{ background: '#f2f2f2', color: 'black', textTransform: 'none' }} disableElevation>
                    Go back
                </Button>
                <Box width={16} />
                <Button onClick={onClickVerify} variant="contained" style={{ textTransform: 'none' }} disableElevation>
                    Verify
                </Button>
            </div>
        </div>
    )
}

export default VerificationStep