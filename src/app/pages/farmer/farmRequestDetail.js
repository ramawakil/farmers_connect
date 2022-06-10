import React, {useContext} from 'react';
import {Avatar, Box, Container, Divider, Paper, Tooltip, Typography} from "@mui/material";
import farmsResponsesApi from '../../api/farmRequestResponse';
import {useLocation} from "react-router-dom";
import BusinessIcon from '@mui/icons-material/Business';
import LoadingContext from "../../context/loadingContext";


function FarmRequestDetail({ }) {
    const params = useLocation().state;
    const [error, setError] = React.useState(null);
    const [responses, setResponses] = React.useState([]);
    const [ requestId, setRequestId ] = React.useState(params.request.id);
    const { setLoading } = useContext(LoadingContext);


    React.useEffect(() => {
        setRequestId(params.request.id);
        getResponses();
    }, []);

    const getResponses = async () => {
        setLoading(true);
        try {
            const response = await farmsResponsesApi.getRequestResponses(requestId);
            console.log(response)
            setResponses(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };


    return (
        <>
            <Container maxWidth='md' sx={{ p: 3 }}>
                <Box>
                    <Typography variant='h6' color='icon.main' gutterBottom>
                        {params.request.farm.title}
                    </Typography>
                    Description
                    <Divider />
                    <Box sx={{ p: 2 }}>
                        <Typography variant='subtitle2' gutterBottom>
                            {params.request.description}
                        </Typography>
                    </Box>

                    <Divider />

                    { (responses.length === 0) && (
                        <Typography variant='h4' color='accent.main'>
                            There is no feedback right now!
                        </Typography>
                    ) }

                    {
                        responses.map(request => (
                            <Box key={request.id} component={Paper} sx={{
                                display: 'flex',
                                p: 2,
                                m: 2,
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                                <Box>
                                    <Avatar key={request.id} sx={{ mx: 'auto' }}>
                                        <BusinessIcon />
                                    </Avatar>
                                    <Tooltip title='Company Name'>
                                        <Typography variant='subtitle2' gutterBottom>
                                            {request.company}
                                        </Typography>
                                    </Tooltip>
                                    <Typography variant='subtitle2' gutterBottom>
                                        For Inquiries: <Box sx={{ backgroundColor: 'secondary.light', p: 0.3 }} component='span'>
                                            {request.user}
                                    </Box>
                                    </Typography>
                                </Box>
                                <Box sx={{ mx: 'auto' }}>
                                    <Typography variant='body1' gutterBottom>
                                        {request.comments}
                                        {/*<p>{request.description}</p>*/}
                                    </Typography>
                                </Box>

                            </Box>
                        ))
                    }
                </Box>
            </Container>
        </>
    );
}

export default FarmRequestDetail;