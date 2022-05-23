import React from 'react';
import {Box, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles(theme => ({
    title: {
        fontWeight: "bold",
        marginBottom: theme.spacing(2),
        color: theme.palette.icon.main,
    },

}));

function WelcomeScreenImage({ title }) {
    const classes = useStyles();

    return (
        <>
            <Box sx={{ textAlign: 'center' }}>
                <img src="/nai-logo.png" alt="Welcome Screen" width='150' />
            </Box>
            <Box sx={{mt: 2, mb: 3, textAlign: 'center'}}>
                <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    className={classes.title}
                >
                    {title}
                </Typography>
            </Box>
        </>
    );
}

export default WelcomeScreenImage;
