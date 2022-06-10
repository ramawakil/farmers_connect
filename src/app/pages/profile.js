import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import AppForm from "../components/forms/AppForm";
import * as Yup from 'yup';
import AppFormField from "../components/forms/AppFormField";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import AppButton from "../components/AppButton";


const ValidationSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    mobile: Yup.string().required('Mobile is required'),
    email: Yup.string().required('Email is required'),
    nin: Yup.string().required('NIDA Number is required')
})

function Profile(props) {
    const [first_name, setFirstName] = React.useState('');
    const [last_name, setLastName] = React.useState('');
    const [mobile, setMobile] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [nin, setNin] = React.useState('');


    const handleSubmit = (values) => {
        console.log(values);
    }


    return (
        <>
            <Container maxWidth='md'>
                <Box sx={{
                    mt: 3,
                    marginX: 3,
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                   <Box sx={{
                       textAlign: 'center',
                          flex: 0.6,
                   }}>
                       <Typography variant='h5' >
                           Update Profile
                       </Typography>
                   </Box>
                    <AppButton title='Change Password' color='warning' variant='outlined' />

                </Box>

                <AppForm
                    initialValues={{
                        first_name: first_name,
                        last_name: last_name,
                        mobile: mobile,
                        email: email,
                        nin: nin
                    }}
                    validationSchema={ValidationSchema}
                    onSubmit={handleSubmit}
                >

                    <Box sx={{ p:5 }}>
                        <AppFormField
                            name='first_name'
                            placeholder='First Name'
                            variant='standard'
                        />

                        <AppFormField
                            name='last_name'
                            placeholder='Last Name'
                            variant='standard'
                        />

                        <AppFormField
                            name='mobile'
                            type='tel'
                            placeholder='Mobile'
                            variant='standard'
                        />

                        <AppFormField
                            name='email'
                            type='email'
                            placeholder='Email'
                            variant='standard'
                        />

                        <AppFormField
                            name='nin'
                            placeholder='NIDA Number'
                            type='number'
                            variant='standard'
                        />
                    </Box>
                    <Box sx={{ p:2 }}>

                        <AppSubmitButton title='Update' color='info' fullWidth />
                    </Box>






                </AppForm>
            </Container>
        </>
    );
}

export default Profile;