import React from 'react';
import AppForm from "../../components/forms/AppForm";
import * as Yup from 'yup';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import AppFormField from "../../components/forms/AppFormField";
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import {Box, Container, Divider, Typography} from "@mui/material";
import AppButton from "../../components/AppButton";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AddIcon from "@mui/icons-material/Add";
import farmsApi from "../../api/farms";
import {toast} from "react-toastify";


const FarmValidationSchema = Yup.object().shape({
    title: Yup.string().required('Farm title is required'),
    description: Yup.string().required('Description is required'),
    temperature: Yup.string().required('Temperature is required'),
    humidity: Yup.string().required('Humidity is required'),
    ph_scale: Yup.string().required('PH scale is required'),
    rainfall: Yup.string().required('Rainfall is required'),
    crop_suggested: Yup.string().required('Crop suggested is required'),
    crop_cultivated: Yup.string().required('Crop cultivated is required'),
    latitude: Yup.string().required('Latitude is required'),
    longitude: Yup.string().required('Longitude is required'),
});

function FarmDetailPage(props) {
    let params = useLocation();
    const obj = params.state.farm;
    const navigate = useNavigate();
    const [error, setError] = React.useState(null);
    const [location, setLocation] = React.useState({
        lat: null,
        lng: null,
    });

    React.useEffect(() => {
        setLocation({
            lat: obj.latitude,
            lng: obj.longitude,
        })
    }, [])

    const submitForm = async (values) => {
     try{
      await farmsApi.updateFarm(obj.id, {
        ...values,
        latitude: location.lat,
        longitude: location.lng,
      });
      toast.success('Farm updated successfully');
      await navigate('/farms/requests');
     }
     catch(e){
         setError(e.response.data.detail);
         toast.error(error)
     }
    }

    const newFarmRequest = async () => {
        navigate('/farmer/farm-requests/new-request', {state: {obj}});
    }

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

    const handleFarmDelete = async () => {
        try{
            await farmsApi.deleteFarm(obj.id);
            toast.success('Farm deleted successfully');
            await navigate('/farms');
        }
        catch(e){
            setError(e.response.data.detail);
            toast.error(error)
        }
    }

    return (
        <Container maxWidth='md' sx={{ p: 5, pt: 2 }}>
            <Divider sx={{mt: 1, mb: 2}}/>

            <Box sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',

            }}>
                <div>

                    <Typography variant='h6' color='icon.main' sx={{ m: 1 }} gutterBottom>
                        Farm Details
                    </Typography>
                </div>
                {/*<AppButton variant='contained' sx={{ width: '60%',  }} title='Add new Farm' />*/}
                <AppButton variant='contained' onClick={newFarmRequest} title='Add new Shamba Request' color='info'
                           startIcon={<AddIcon/>}/>
            </Box>


            <AppForm
                initialValues={{
                    title: obj.title,
                    description: obj.description,
                    temperature: obj.temperature,
                    humidity: obj.humidity,
                    ph_scale: obj.ph_scale,
                    rainfall: obj.rainfall,
                    crop_suggested: obj.crop_suggested,
                    crop_cultivated: obj.crop_cultivated,
                }}
                onSubmit={submitForm}
                validationSchema={FarmValidationSchema}
            >

                <AppFormField
                    name="title"
                    label="Farm Title"
                    placeholder="Enter title"
                    type="text"
                    variant="standard"
                />

                <AppFormField
                    label="Description"
                    name="description"
                    variant="standard"
                    placeholder="Enter description"
                    type="text"
                />

                <AppFormField
                    name="temperature"
                    label="Temperature"
                    placeholder="Enter temperature"
                    type="text"
                    variant="standard"
                />

                <AppFormField
                    name="humidity"
                    label="Humidity"
                    placeholder="Enter humidity"
                    type="text"
                    variant="standard"
                />

                <AppFormField
                    name="ph_scale"
                    label="PH Scale"
                    placeholder="Enter ph scale"
                    type="text"
                    variant="standard"
                />

                <AppFormField
                    name="rainfall"
                    label="Rainfall"
                    placeholder="Enter rainfall"
                    type="text"
                    variant="standard"
                />

                <AppFormField
                    name="crop_suggested"
                    label="Crop Suggested"
                    placeholder="Enter crop suggested"
                    type="text"
                    variant="standard"
                />

                <AppFormField
                    name="crop_cultivated"
                    label="Crop Cultivated"
                    placeholder="Enter crop cultivated"
                    type="text"
                    variant="standard"
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

                <Divider />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginY: 3
                }}>
                    <AppButton title='Delete Farm' onClick={handleFarmDelete} variant='contained' color='warning' />
                    <AppSubmitButton title='Update Farm' />
                </Box>


            </AppForm>
        </Container>
    );
}

export default FarmDetailPage;