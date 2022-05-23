import React from 'react';
import {useFormikContext} from "formik";
import {Button, IconButton} from "@mui/material";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function AppSubmitButton({title, icon, ...props }) {
    const { handleSubmit } = useFormikContext();

    if (icon) return (
        <IconButton onClick={handleSubmit} {...props}>
            <ArrowCircleRightOutlinedIcon color='primary' />
        </IconButton>
    );

    return (
        <Button onClick={handleSubmit}  variant='contained' {...props}>{title}</Button>
    );
}

export default AppSubmitButton;