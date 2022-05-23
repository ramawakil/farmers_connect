import React from 'react';
import {Box, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    loanCardHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(1),
    },
}))

function AppSpaceBetween({ left, right, leftColour, rightColour, ...otherProps }) {
    const classes = useStyles();

    return (
        <Box className={classes.loanCardHeader}>
            <Typography variant='body2' {...otherProps} color={leftColour} >{left}</Typography>
            <Typography variant='body2' {...otherProps} color={rightColour} >{right}</Typography>
        </Box>
    );
}

export default AppSpaceBetween;