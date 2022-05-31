import React from 'react';
import {Box, Divider, Paper, Stack, Typography} from "@mui/material";

function FarmRequestsListComponent({ request, navigateToDetail }) {


    return (
        <>
            <Box onClick={navigateToDetail} component={Paper} sx={{
                p: 3,
                m: 3,
                cursor: 'pointer',
            }}>
                <Stack
                    direction='row'
                    spacing={10}
                    sx={{
                        alignItems: 'center',
                    }}
                >
                    <Typography variant='h5'>
                        {request.farm}
                    </Typography>
                    <Typography variant='body1' >
                        Farm {request.category} Stage
                    </Typography>
                </Stack>
                <Box sx={{ p: 3 }}>
                    <Typography variant='body1'>
                        {request.description}
                    </Typography>
                </Box>
                <Divider />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',

                }}>
                    <Typography variant='body1'>
                        Responses: {request.farm_request_responses.length}
                    </Typography>
                    <Typography variant='body1'>
                        Status: {request.status}
                    </Typography>

                </Box>
            </Box>
        </>
    );
}

export default FarmRequestsListComponent;