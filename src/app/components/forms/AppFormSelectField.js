import React from 'react';
import {useFormikContext} from "formik";
import {makeStyles} from "@mui/styles";
import {Box, TextField} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import AppErrorMessage from "./AppErrorMessage";



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    }
}));

function AppFormSelectField({ choices, label, name, width = '100%', ...props }) {
    const { setFieldTouched, values, setFieldValue, errors, touched } = useFormikContext();
    const classes = useStyles();

    const onChange = (event) => {
        setFieldValue(name, event.target.value);
    };

    return (
        <Box sx={{ my: 1, width: '100%' }} >
        <Box className={classes.root}>
            <TextField
                onBlur={() => (setFieldTouched(name))}
                select
                label={label}
                value={values[name]}
                error={errors[name] && touched[name]}
                onChange={(event) => onChange(event)}
                variant="standard"
                fullWidth
                sx={{ mx: 2, mt: 1 }}
                {...props}
            >
                {choices.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
            <AppErrorMessage width={width} error={errors[name]} visible={touched[name]} />
        </Box>
    );
}

export default AppFormSelectField;
