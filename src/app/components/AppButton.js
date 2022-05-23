import React from 'react';
import {Box, Button} from "@mui/material";

function AppButton({ title, variant, disabled = false, onClick, color, ...otherProps }) {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Button fullWidth variant={variant} disabled={disabled} onClick={onClick} color={color} {...otherProps} >{title}</Button>
        </Box>
    );
}

export default AppButton;
