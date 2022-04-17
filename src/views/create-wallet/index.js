import React from "react";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system"
import { useEffect, useState } from "react";
import { createWallet } from "../../wallet";
import StepBar from "./components/step-bar";
import GenerateMnemonicStep from "./steps/generate-mnemonic";
import VerificationStep from "./steps/verification";
import WellDoneStep from "./steps/well-done";

const stepName = [
    'Write down the words',
    'Verification',
    'Well done',
]

const CreateWalletPage = () => {
    const [step, setStep] = useState(0);
    const [currentWallet, setCurrentWallet] = useState({
        mnemonic: {
            phrase: '',
        }
    });

    useEffect(() => {
        const wallet = createWallet();
        console.log('mnemonic:', wallet.mnemonic.phrase)
        setCurrentWallet(wallet);
    }, []);

    const onClickRegenerate = () => {
        const wallet = createWallet();
        console.log('regen mnemonic:', wallet.mnemonic.phrase)
        setCurrentWallet(wallet);
    }

    const onClickNext = () => {
        setStep(step + 1);
    }

    const onClickBack = () => {
        setStep(step - 1);
    }

    const onClickAccessWallet = () => {
        localStorage.setItem('wallet_private_key', currentWallet.privateKey);
        window.location.href = '/home';
    }

    return (
        <div>
            <main style={{ height: '100vh', display: "flex", alignItems: "center", justifyContent: "center", background: '#f2fafa' }}>
                <Paper elevation={3} style={{ padding: 36, borderRadius: 16, width: 600, }}>
                    <div>
                        <Typography variant="h5" fontWeight={700}>
                            Create Wallet with Mnemonic Phrase
                        </Typography>
                        <Box height={24} />

                        <StepBar step={step} stepName={stepName} />

                        <Box height={24} />

                        <Typography fontWeight={700}>
                            Step {step + 1}. {stepName[step]}
                        </Typography>
                        {
                            step === 0 ?
                                <GenerateMnemonicStep onClickNext={onClickNext} onClickRegenerate={onClickRegenerate} mnemonic={currentWallet.mnemonic.phrase} /> : <div />
                        }
                        {
                            step === 1 ?
                                <VerificationStep onClickNext={onClickNext} onClickBack={onClickBack} mnemonic={currentWallet.mnemonic.phrase} /> : <div />
                        }
                        {
                            step === 2 ? <WellDoneStep onClickAccessWallet={onClickAccessWallet} /> : <div />
                        }
                    </div>
                </Paper>
            </main>
        </div >
    );
}

export default CreateWalletPage;