import React from 'react';
import {useFormikContext} from "formik";
import AppErrorMessage from "./AppErrorMessage";
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


function AppFormField({backIcon, forwardIcon, name, width = '100%', borderIssues, ...otherProps}) {
    const {setFieldTouched, values, setFieldValue, errors, touched} = useFormikContext();
    const classes = useStyles();

    const onChange = (event) => {
        // if (name === 'accountNumber'){
        //     setAccountNumber(event.target.value);
        // }
        setFieldValue(name, event.target.value);
    };

    return (
        <>
            <Box className={classes.root} sx={{width: width, marginY: 1}}>
                {backIcon && backIcon}
                <TextField
                    onBlur={() => setFieldTouched(name)}
                    onChange={(event) => onChange(event)}
                    value={values[name]}
                    error={errors[name] && touched[name]}
                    {...otherProps}
                    sx={{ mx: 0, my: 0.5 }}
                    fullWidth
                />
                {forwardIcon && forwardIcon}
            </Box>
            <AppErrorMessage width={width} error={errors[name]} visible={touched[name]} sx={{ textAlign: 'left' }} />
        </>
    );
}

export default AppFormField;
