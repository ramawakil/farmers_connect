import React from 'react';
import {Box, Container, Divider, Grid, Stack} from "@mui/material";
import AppButton from "../../components/AppButton";
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";

function Farms(props) {
    const navigate = useNavigate();

    const newFarm = () => {
        navigate('/farmer/new-farm');
    };

    return (
        <Container maxWidth='md' sx={{mt: 3}}>

            <Divider sx={{ mt: 1, mb: 2 }} />

            <Box sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',

            }}>
                <div></div>
                {/*<AppButton variant='contained' sx={{ width: '60%',  }} title='Add new Farm' />*/}
                <AppButton variant='contained' onClick={newFarm} title='Add new Farm' color='info' startIcon={<AddIcon/>}/>
            </Box>

        </Container>
    );
}

export default Farms;