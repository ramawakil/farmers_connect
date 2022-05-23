import React, {useContext} from 'react';
import {useFormikContext} from "formik";
import AppErrorMessage from "./AppErrorMessage";
import {Box, TextField} from "@mui/material";
import {makeStyles} from "@mui/styles";



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        overflow: 'hidden',
        alignItems: 'center',
    }
}));


function AppFormField1({BackIcon, forwardIcon, name, width = '100%', ...otherProps}) {
    const {setFieldTouched, values, setFieldValue, setValues, errors, touched} = useFormikContext();
    const classes = useStyles();

    const onChange = (event) => {
        setFieldValue(name, event.target.value);
    };

    return (
        <Box sx={{ my: 2, width: '100%' }} >
            <Box className={classes.root} sx={{width: width}}>
                {BackIcon && <BackIcon sx={{ m: 3, mr: 2 }} color='icon' />}
                <TextField
                    onBlur={() => setFieldTouched(name)}
                    onChange={(event) => onChange(event)}
                    value={values[name]}
                    error={errors[name] && touched[name]}
                    {...otherProps}
                    sx={{ mx: 2 }}
                    {...otherProps}
                    fullWidth
                />
                {forwardIcon && forwardIcon}
            </Box>
            <AppErrorMessage width={width} error={errors[name]} visible={touched[name]} />
        </Box>
    );
}

export default AppFormField1;