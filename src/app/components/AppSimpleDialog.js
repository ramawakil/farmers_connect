import React from 'react';
import {
    Box, Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider, Slide,
    Typography
} from "@mui/material";
import PanToolIcon from '@mui/icons-material/PanTool';
import {red} from "@mui/material/colors";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function AppSimpleDialog({ open, handleAgree, handleDisagree, title, description }) {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleDisagree}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDisagree}>Disagree</Button>
                <Button onClick={handleAgree}>Agree</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AppSimpleDialog;
