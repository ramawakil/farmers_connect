import React, {useContext, useEffect, useState} from 'react';
import {
    Box,
    Container, Dialog,
    DialogActions, DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
    Tab,
    Tabs,
    Typography
} from "@mui/material";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import FarmRequests from "../companyEmployee/farmRequests";
import CompanyRequestDetail from "../companyEmployee/companyRequestDetail";
import CompanyEmployment from "../companyEmployee/companyEmployment";
import UserContext from "../../context/userContext";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/AppTextInput";
import FarmLeaderTable from "./farmLeaderTable";
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import AppFormField from "../../components/forms/AppFormField";
import AppForm from "../../components/forms/AppForm";
import * as Yup from "yup";
import farmsRequestApi from '../../api/farmRequests';
import LoadingContext from "../../context/loadingContext";
import {toast} from "react-toastify";


const ValidationSchema = Yup.object().shape({
    first_name: Yup.string().required('First name required'),
    last_name: Yup.string().required('Last name required'),
    email: Yup.string().required('Email required')
});


function FarmLeaderHome(props) {
    const [value, setValue] = useState();
    const [farmers, setFarmers] = useState([]);
    const [filteredFarmers, setFilteredFarmers] = useState(farmers);
    const {user} = useContext(UserContext);
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState(null);
    const {setLoading} = useContext(LoadingContext);

    React.useEffect(() => {
        fetchFarmers();
    }, [])

    const fetchFarmers = async () => {
        setLoading(true);
        try {
            const res = await farmsRequestApi.getFarmers();
            setFarmers(res.data);
            setFilteredFarmers(res.data);
            setLoading(false);
        } catch (e) {
            setError(e.response.data.detail);
            toast.error(error);
            setLoading(false);
        }
    }

    const registerFarmersSubmit = async (values) => {
        setLoading(true);
        try {
            await farmsRequestApi.registerFarmer(values);
            toast.success('Farmer Added successfully')
            await fetchFarmers();
        } catch (e) {
            setError(e.response.data.detail);
            toast.error(error);
        }
        handleClose();
    }


    const handleChange = (event) => {
        let word = event.target.value;
        let filtered = farmers.filter(farmer => {
            return farmer.first_name.toLowerCase().includes(word.toLowerCase()) || farmer.last_name.toLowerCase().includes(word.toLowerCase()) || farmer.id.toString().includes(word.toLowerCase());
        }
        );
        setFilteredFarmers(filtered);
    }


    const AddFarmer = (values) => {

    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        handleClose();
    };

    const handleSubmit = (values) => {
        handleClose();
    };


    return (
        <>
            <Container maxWidth='md' sx={{mt: 3}}>
                <Box sx={{
                    display: 'flex',
                    marginX: 3,
                    mb: 2,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <Box sx={{
                        flex: 0.7,
                    }}>
                        <AppTextInput
                            label='Search'
                            onChange={(event) => handleChange(event)}
                            value={value}
                            variant='standard'
                            fullWidth

                        />
                    </Box>
                    <AppButton onClick={handleClickOpen} title='Add Farmer' variant='contained' color='info'/>
                </Box>
                <Box>
                    <FarmLeaderTable data={filteredFarmers}/>
                </Box>

                <Dialog open={open} onClose={handleClose} maxWidth='md' fullWidth>
                    <DialogTitle>Add Farmer Information</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Register a new farmer, to allow them to get started.
                        </DialogContentText>
                        <AppForm
                            onSubmit={registerFarmersSubmit}
                            validationSchema={ValidationSchema}
                            initialValues={{
                                first_name: '',
                                last_name: '',
                                email: '',
                            }}
                        >

                            <AppFormField
                                name='first_name'
                                label='First Name'
                                placeholder='First Name'
                                type='text'
                                variant='standard'
                                margin='normal'
                                fullWidth
                            />

                            <AppFormField
                                name='last_name'
                                label='Last Name'
                                placeholder='Last Name'
                                type='text'
                                variant='standard'
                                margin='normal'
                                fullWidth
                            />

                            <AppFormField
                                name='email'
                                label='Email'
                                placeholder='Email'
                                type='email'
                                variant='standard'
                                margin='normal'
                                fullWidth
                            />


                            <DialogActions>
                                <Stack spacing={4} direction='row'>
                                    <AppButton title='Cancel' onClick={handleClose}/>
                                    <AppSubmitButton title='Submit' variant='text'/>
                                </Stack>

                            </DialogActions>
                        </AppForm>
                    </DialogContent>

                </Dialog>


            </Container>
        </>
    );
}

export default FarmLeaderHome;