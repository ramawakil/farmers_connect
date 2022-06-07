import React from 'react';
import {Box, Container, Divider, Typography} from "@mui/material";
import AppForm from "../../components/forms/AppForm";
import * as Yup from "yup";
import AppFormField from "../../components/forms/AppFormField";
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const CommentValidationSchema =
    Yup.object().shape({
        comment: Yup.string()
            .required('Required')
    });

function CompanyRequestDetail(props) {
    const [responses, setResponses] = React.useState([]);

    console.log('hey');

    const handleSubmitComment = (values) => {
        console.log(values);
    };

    return (
        <>
            <Container maxWidth='md'>
                <Box>
                    <Typography variant='h4' gutterBottom>
                        Farm name
                    </Typography>
                    <Divider/>
                    <Box sx={{p: 2}}>
                        <Typography variant='subtitle2' gutterBottom>
                            description of requests
                        </Typography>
                    </Box>

                    {
                        responses.length > 0 && (

                                responses.map((response, index) => {
                                    return (
                                        <Box sx={{p: 2}}>
                                            <Typography variant='subtitle2' gutterBottom>
                                                {response.comment}
                                            </Typography>
                                        </Box>
                                    )
                                })

                        )
                    }

                    {
                        responses.length === 0 && (
                            <AppForm
                                initialValues={{
                                    comment: '',
                                }}
                                onSubmit={handleSubmitComment}
                                validationSchema={CommentValidationSchema}
                            >

                                <AppFormField
                                    name='comment'
                                    label='Comment'
                                    multiline
                                    rows={4}
                                    fullWidth
                                />

                                <AppSubmitButton title='submit' color='info' endIcon={<ArrowRightIcon/>}/>

                            </AppForm>
                        )
                    }
                </Box>

            </Container>
        </>
    );
}

export default CompanyRequestDetail;