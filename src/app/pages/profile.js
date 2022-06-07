import React from 'react';
import {Container} from "@mui/material";
import AppForm from "../components/forms/AppForm";
import * as yup from 'Yup';


// const ValidationSchema

function Profile(props) {
    return (
        <>
            <Container maxWidth='md'>
                <AppForm
                    initialValues={{
                        first_name: '',
                        last_name: '',
                        mobile: '',
                        email: '',
                        nin: ''
                    }}
                    validationSchema={}

                >

                </AppForm>
            </Container>
        </>
    );
}

export default Profile;