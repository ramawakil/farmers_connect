import React from 'react';
import {Box, TextField} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        borderRadius: 1,
        overflow: 'hidden',
    }
}));

function AppTextInput({
                          backIcon = null,
                          forwardIcon = null,
                          width = '100%',
                          label,
                          value,
                          handleChange,
                          ...otherProps
                      }) {
    const classes = useStyles();

    return (
        <Box className={classes.root} sx={{width: width}}>
            {backIcon && backIcon}
            <TextField variant='standard' value={value} placeholder={label} fullWidth sx={{px: 1}}
                       onChange={handleChange} {...otherProps} />
            {forwardIcon && forwardIcon}
        </Box>
    );
}

export default AppTextInput;