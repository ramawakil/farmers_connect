import React from 'react';
import {Avatar, Box, Container, Divider, Paper, Tooltip, Typography} from "@mui/material";

function FarmRequestDetail({ request }) {
    return (
        <>
            <Container maxWidth='md' sx={{ p: 3 }}>
                <Box>
                    <Typography variant='h4' gutterBottom>
                        Farm name
                    </Typography>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                        <Typography variant='subtitle2' gutterBottom>
                            description of requests
                        </Typography>
                    </Box>

                    <Box component={Paper} sx={{
                        display: 'flex',
                        p: 2,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                    }}>
                        <Box>
                            <Tooltip title='Company Name'>
                                <Avatar>
                                    Rama
                                </Avatar>
                            </Tooltip>
                        </Box>
                        <Box>
                            <Typography variant='body1' gutterBottom>
                                Company Comment
                            </Typography>
                        </Box>

                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default FarmRequestDetail;