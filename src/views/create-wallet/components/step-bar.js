import React from "react";
import { Box, Typography } from "@mui/material";

const StepBar = ({ step, stepName }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', justifyContent: "space-between" }}>
            {
                stepName.map((e, index) =>
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "start", height: '100%' }}>
                        <div style={{ height: 20, width: 20, padding: 8, borderRadius: 18, color: 'white', background: stepName.indexOf(e) == step ? '#05c0a5' : '#f2f2f2', display: "flex", alignItems: "center", justifyContent: 'center' }}>
                            {stepName.indexOf(e) + 1}
                        </div>
                        <Box height={8} />
                        <Typography fontSize={10} style={{ width: 75, textAlign: 'center' }}>
                            {e}
                        </Typography>
                    </div>
                )
            }
        </div >)
}

export default StepBar;