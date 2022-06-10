import React, {useContext, useEffect, useState} from 'react';
import {Box, Container, Divider, Paper, Typography} from "@mui/material";
import AppForm from "../../components/forms/AppForm";
import * as Yup from "yup";
import AppFormField from "../../components/forms/AppFormField";
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {useLocation, useNavigate} from "react-router-dom";
import FarmCardComponent from "../../components/farmCardComponent";
import farmsRequestApi from '../../api/farmRequests';
import LoadingContext from "../../context/loadingContext";
import {toast} from "react-toastify";


const CommentValidationSchema =
    Yup.object().shape({
        comment: Yup.string()
            .label('Comment ')
    });

function CompanyRequestDetail(props) {
    const params = useLocation();
    const farmRequest = params.state.obj;
    const [responses, setResponses] = React.useState(farmRequest?.farm_request_responses);
    const {setLoading} = useContext(LoadingContext);
    const [error, setError] = useState();
    const navigate = useNavigate();

    console.log(responses)





    const handleSubmitComment = async (values) => {
        setLoading(true);
        try {
            await farmsRequestApi.addComment(farmRequest.id, {
                request: farmRequest.id,
                description: values.comment,
                comments: values.comment
            })
            setLoading(false);
            await navigate('/company/requests');


        } catch (e) {
            setError(e.response.data.detail)
            toast.error(error);
            setLoading(false);
        }
    };

    return (
        <>
            <Container maxWidth='md'>
                <Box>

                    <Box>
                        <FarmCardComponent farm={farmRequest.farm} navigateToDetail={null}/>
                    </Box>
                    <Divider/>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 2,

                    }}>
                        <Typography sx={{}}>
                            Problem:
                        </Typography>
                        <Typography color='red' sx={{flex: 0.9}} variant='subtitle2' gutterBottom>
                            {farmRequest.description}
                        </Typography>
                    </Box>

                    {
                        responses.length > 0 && (

                            responses.map((response, index) => {
                                return (
                                    <Box component={Paper} sx={{p: 4}}>
                                        <Typography variant='subtitle2' gutterBottom>
                                            {response.comments}
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

                                <AppSubmitButton title='Comment' color='info' endIcon={<ArrowRightIcon/>}/>

                            </AppForm>
                        )
                    }
                </Box>

            </Container>
        </>
    );
}

export default CompanyRequestDetail;