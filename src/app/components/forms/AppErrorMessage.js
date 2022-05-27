import React from 'react';
import AppText from "../AppText";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        color: theme.palette.error.main,
        fontSize: '15px',
    },
}));

function AppErrorMessage({error, visible, width}) {
    const classes = useStyles();

    if (!visible || !error) return null;

    return (
        <AppText className={classes.root} sx={{ width: width, fontSize: '15px', ml: 1 }} >{error}</AppText>
    );
}

export default AppErrorMessage;
