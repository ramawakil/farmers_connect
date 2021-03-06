import React, {useContext, useState} from 'react';
import {Box, Container, Paper, Stack, Typography} from "@mui/material";
import WelcomeScreenImage from "../components/WelcomeScreenImage";
import AppForm from "../components/forms/AppForm";
import * as Yup from 'yup';
import AppFormField from "../components/forms/AppFormField";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import AppSubmitButton from "../components/forms/AppSubmitButton";
import authApi from "../api/auth";
import AppErrorMessage from "../components/forms/AppErrorMessage";
import {toast} from "react-toastify";
import LoadingContext from "../context/loadingContext";

const ValidationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});

function Login(props) {
    const [error, setError] = useState();
    const { setLoading } = useContext(LoadingContext);

    const login = async (values) => {
        setLoading(true);
        setError(null);

        try {
            await authApi.login({
                username: values.username,
                password: values.password,
            });
            setLoading(false);
            window.location = '/';
        }
        catch (e) {
            setLoading(false)
            setError(e.response.data.detail);
            await toast.error(e.response.data.detail);
        }
    };

    return (
        <Container maxWidth='sm' component={Paper} sx={{mt: 5, p: 3}}>
            <Typography variant='h4' align='center' color='secondary' sx={{
                fontWeight: 'bold',
                marginBottom: '1rem'
            }}>
                Farmers Connect
            </Typography>
            <Box>
                <WelcomeScreenImage title='Sign in to Continue'  />
            </Box>

            <Box sx={{ mt: 2, textAlign: 'center' }}>
                <AppErrorMessage error={error} visible={error} />
            </Box>

            <AppForm
                initialValues={{username: '', password: ''}}
                onSubmit={login}
                validationSchema={ValidationSchema}
            >
                <Stack sx={{p: 3}} spacing={2}>
                    <AppFormField
                        backIcon={<PersonIcon color='icon' sx={{mr: 2}}/>}
                        name='username'
                        placeholder='Username'
                        variant='standard'
                    />

                    <AppFormField
                        backIcon={<LockIcon color='icon' sx={{mr: 2}}/>}
                        name='password'
                        placeholder='Password'
                        type='password'
                        variant='standard'
                    />

                    <Box sx={{textAlign: 'center'}}>
                        <AppSubmitButton title='Sign in' fullWidth color='success'/>
                    </Box>

                </Stack>

            </AppForm>

        </Container>
    );
}

export default Login;