import React from 'react';
import {Avatar, Box, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: theme.spacing(1),
        cursor: 'pointer',
    },
    avatar: {
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(1),
        width: '5%',
        height: '5%',
    },
    title: {
        fontWeight: 'bold',
        marginLeft: theme.spacing(2),
    },
    icon: {
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(1),

    }
}));


function AppListItem({ image, icon = false, Icon, title, subtitle }) {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.root} >
                { !icon ? (<><img src={image} className={classes.avatar} />
                    <Typography variant='body2'>{subtitle}</Typography>
                </>) : (<Box>
                    <Icon className={classes.icon} size='large' />
                        <Typography variant='body2'>{subtitle}</Typography>
                    </Box>
                    )}
                <Typography variant='h6' className={classes.title} >{title}</Typography>
            </Box>
        </>
    );
}

export default AppListItem;