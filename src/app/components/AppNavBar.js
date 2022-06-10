import React, {useContext, useState} from 'react';
import {AppBar, Avatar, Box, Button, IconButton, Toolbar} from "@mui/material";
import {makeStyles} from "@mui/styles";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {Link, useNavigate} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import UserContext from "../context/userContext";
import authApi from '../api/auth';


const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: theme.palette.primary.dark,
    },
}));

function AppNavBar(props) {
    const classes = useStyles();
    const { user } = useContext(UserContext);
    const navigate = useNavigate();


    // useEffect(() => {
    //     if (session.status === 'unauthenticated') {
    //         navigate.push('/');
    //     }
    //     else{
    //         navigate.push('/home');
    //     }
    // }, [navigate.pathname]);

    const logOut = async () => {
        // session.logout();
        // navigate.push('/');
        await authApi.logout();
        navigate('/');
    };


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position='fixed' color='secondary' className={classes.appBar}>
                <Toolbar>

                    <Button
                        color='white'
                        sx={{fontWeight: 'bold'}}
                    >
                        Farmers Connect
                    </Button>

                    <Link to='/'>
                        <IconButton
                            size='large'
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            disabled={true}
                        >
                            <Avatar color='white'>
                                <img src='/nai-logo.png' width='40' alt='app logo'/>
                            </Avatar>

                        </IconButton>
                    </Link>


                    <Box sx={{flexGrow: 1}}></Box>
                     {/*when user is logged in*/}

                    { (user) && (
                        <Link to='/profile' >
                            <IconButton
                                size='large'
                                edge='end'
                                color='inherit'
                                aria-label='menu'
                                sx={{marginRight: 1}}
                            >
                                <AccountCircleIcon color='white'/>
                            </IconButton>
                        </Link>
                    ) }

                    <Link to='/help'>
                        <IconButton
                            sx={{marginRight: 1}}
                            size='large'
                            edge='end'
                            color='inherit'
                            aria-label='menu'
                        >
                            <HelpOutlineIcon color='white'/>
                        </IconButton>
                    </Link>

                    { (user) && (
                        <Link to='/logout' >
                            <IconButton
                                size='large'
                                edge='end'
                                color='inherit'
                                aria-label='menu'
                                sx={{marginRight: 1}}
                            >
                                <LogoutIcon color='white' onClick={logOut} />
                            </IconButton>
                        </Link>
                    ) }


                    { (!user) && (
                        <Link to='/login'>
                            <IconButton
                                sx={{marginRight: 1}}
                                size='large'
                                edge='end'
                                color='inherit'
                                aria-label='menu'
                            >
                                <LoginIcon color='white'/>
                            </IconButton>
                        </Link>
                    ) }


                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default AppNavBar;
