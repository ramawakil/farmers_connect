import React from 'react';
import {AppBar, Avatar, Box, Button, IconButton, Toolbar} from "@mui/material";
import {makeStyles} from "@mui/styles";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {Link} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: theme.palette.primary.dark,
    },
}));

function AppNavBar(props) {
    const classes = useStyles();
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (session.status === 'unauthenticated') {
    //         navigate.push('/');
    //     }
    //     else{
    //         navigate.push('/home');
    //     }
    // }, [navigate.pathname]);


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar color='secondary' position='static' className={classes.appBar}>
                <Toolbar>

                        <Button
                            color='white'
                            sx={{fontWeight: 'bold'}}
                        >
                            Farmers Connect
                        </Button>

                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        disabled={true}
                    >
                        <Avatar color='white'>
                            <img src='/nai-logo.png' width='40' alt='app logo'  />
                        </Avatar>

                    </IconButton>
                    <Box sx={{flexGrow: 1}}></Box>
                   <Link to='/'>
                        <IconButton
                            sx={{ marginRight: 1 }}
                            size='large'
                            edge='end'
                            color='inherit'
                            aria-label='menu'

                        >
                            <LogoutIcon color='white'/>
                        </IconButton>
                    </Link>
                    <Link to='/account'>
                        <IconButton
                            sx={{ marginRight: 1 }}
                            size='large'
                            edge='end'
                            color='inherit'
                            aria-label='menu'
                        >
                            {/*<Avatar>{session?.data.token.name.toString().slice()[0]}</Avatar>*/}
                        </IconButton>
                        <Link to='/profile'>
                            <IconButton
                                size='large'
                                edge='end'
                                color='inherit'
                                aria-label='menu'
                                sx={{ marginRight: 1 }}
                            >
                                <AccountCircleIcon color='white'/>
                            </IconButton>
                        </Link>
                    </Link>
                   <Link to='/login'>
                        <IconButton
                            sx={{ marginRight: 1 }}
                            size='large'
                            edge='end'
                            color='inherit'
                            aria-label='menu'
                        >
                            <LoginIcon color='white'/>
                        </IconButton>
                    </Link>




                  <Link to='/help'>
                        <IconButton
                            size='large'
                            edge='end'
                            color='inherit'
                            aria-label='menu'
                        >
                            <HelpOutlineIcon color='white'/>
                        </IconButton>
                    </Link>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default AppNavBar;
