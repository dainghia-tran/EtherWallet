import React from "react";
import { Box, Button } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const GenerateMnemonicStep = ({ onClickNext, mnemonic, onClickRegenerate }) => {
    return (
        <div style={{ justifyContent: 'end' }}>
            <Box height={8} />
            <Button style={{ textTransform: 'none' }} variant="contained" disableElevation color="success" startIcon={<RestartAltIcon />} onClick={onClickRegenerate}>
                Regenerate
            </Button>
            <div style={{ border: '2px solid #05c0a5', borderRadius: 8, marginTop: 16 }}>
                <ol>
                    {mnemonic != null ? mnemonic.split(' ').map((e, index) => <li key={index}>{e}</li>) : <div />}
                </ol>
            </div>
            <Box height={24} />
            <Button onClick={onClickNext} variant="contained" disableElevation style={{ width: '100%', background: '#05c0a5', textTransform: 'none' }}>
                I Wrote Them Down
            </Button>
        </div>
    )
}

export default GenerateMnemonicStep;