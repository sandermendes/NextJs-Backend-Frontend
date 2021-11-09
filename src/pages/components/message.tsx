import { Snackbar, Alert } from "@mui/material";
import React, { FunctionComponent } from "react";

type MessageProps = {
    openInfo: boolean
    setOpenInfo: any
    infoMessage: any
}

export const Message: FunctionComponent<MessageProps> = ({ openInfo, setOpenInfo, infoMessage }) => {

    const handleCloseInfo = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenInfo( false );
    };

    return (
        <Snackbar
            open={ openInfo }
            autoHideDuration={ 6000 }
            onClose={ handleCloseInfo }
        >
            <Alert severity={ infoMessage.success ? "success" : "error" } onClose={ handleCloseInfo } sx={{ width: '100%' }}>
                { infoMessage.message }
            </Alert>
        </Snackbar>
    )
}