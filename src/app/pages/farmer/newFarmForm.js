import React, {useContext} from 'react';
import {Box, Container, IconButton, Typography} from "@mui/material";
import AppForm from "../../components/forms/AppForm";
import * as Yup from 'yup';
import AppFormField from "../../components/forms/AppFormField";
import AppButton from "../../components/AppButton";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import farmsApi from '../../api/farms'
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import LoadingContext from "../../context/loadingContext";


const newFarmValidationSchema = Yup.object().shape({
    title: Yup.string().required('Farm title is required'),
    description: Yup.string().required('Description is required'),
    crop_cultivated: Yup.string().required('Crop cultivated is required'),
});


function NewFarmForm(props) {
    const navigate = useNavigate();
    const [error, setError] = React.useState(null);
    const { setLoading } = useContext(LoadingContext);
    const [location, setLocation] = React.useState({
        lat: null,
        lng: null,
    });

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            });
        }
    };

    const createNewFarm = async (values) => {
        setLoading(true);
        try{
            await farmsApi.createFarm({
                ...values,
               latitude: location.lat,
               longitude: location.lng,
            });
            toast.success('Farm created successfully');
            setLoading(false);
            await navigate('/farmer');
        }
        catch(e){
            setError(e.response.data.detail);
            setLoading(false);
            toast.error(error);
        }
    }


    return (
        <>
            <Container maxWidth='md' sx={{ p: 5 }}>
                <Typography variant='h6' color='icon.main' sx={{ m: 1 }} gutterBottom>
                    New Farm
                </Typography>
                <AppForm
                    initialValues={{ title: '', description: '', crop_cultivated: '' }}
                    validationSchema={newFarmValidationSchema}
                    onSubmit={createNewFarm}
                >
                    <AppFormField
                        name='title'
                        placeholder='Add farm trivial name for easy identification like -> shamba la Kibaha'
                        variant='standard'
                        sx={{ p: 1 }}
                        />

                    <AppFormField
                        name='description'
                        label='Description'
                        multiline
                        rows={4}
                        sx={{ p: 1, marginY: 1 }}
                        variant='outlined'
                        fullWidth
                    />

                    <AppFormField
                        name='crop_cultivated'
                       placeholder='Crop cultivated'
                        sx={{ p: 1, marginY: 0 }}
                        variant='standard'
                        fullWidth
                    />

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                        <Typography variant='body2' color='text.secondary' sx={{ m: 1 }} gutterBottom>
                            Location of farm
                        </Typography>
                        <AppButton
                            variant='contained'
                            title='Locate me'
                            sx={{ textTransform: 'none', color: 'text.main', m: 1 }}
                            color='info'
                            onClick={getLocation}
                            startIcon={<MyLocationIcon />}
                        />
                    </Box>
                    { location.lat && location.lng &&
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}>
                            <Typography variant='body2' color='text.secondary' sx={{ m: 1 }} gutterBottom>
                                Latitude: {location.lat} | Longitude: {location.lng}
                            </Typography>

                        </Box>
                    }

                    <Box sx={{ marginY: 2 }}>
                        <AppSubmitButton title='Submit' fullWidth />
                    </Box>

                </AppForm>
            </Container>
        </>
    );
}

export default NewFarmForm;