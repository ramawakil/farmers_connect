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


const Farmers = [
    {
        firstName: 'John',
        lastName: 'Doe',
        mobile: '0783320928',
        created_at: '10 June 2022'
    }
]

const ValidationSchema = Yup.object().shape({
   first_name: Yup
});


function FarmLeaderHome(props) {
    const [value, setValue] = useState();
    const [farmers, setFarmers] = useState(Farmers);
    const { user } = useContext(UserContext);
    const [open, setOpen] = React.useState(false);


    const handleChange = (event) => {
        console.log(event.target.value)
    }

    const handleFilterUser = (keyWord) => {

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
                   <AppButton onClick={handleClickOpen} title='Add Farmer' variant='contained' color='info' />
               </Box>
                <Box>
                    <FarmLeaderTable data={farmers} />
                </Box>

                <Dialog open={open} onClose={handleClose} maxWidth='md' fullWidth>
                    <DialogTitle>Add Farmer Information</DialogTitle>
                    <DialogContent>
                        <DialogContentText >
                            Register a new farmer, to allow them to get started.
                        </DialogContentText>
                        <AppForm
                            onSubmit={handleSubmit}
                            validationSchema={ValidationSchema}
                            initialValues={{
                                title: '',
                                pages: '',
                                price: '',
                                copies: '',
                                file: null,
                            }}
                        >

                            <AppFormField
                                name='title'
                                label='Title'
                                type='text'
                                variant='standard'
                                margin='normal'
                                fullWidth
                            />

                            <AppFormField
                                name='pages'
                                label='Pages'
                                type='text'
                                variant='standard'
                                margin='normal'
                                fullWidth
                            />

                            <AppFormField
                                name='price'
                                label='Price'
                                type='text'
                                variant='standard'
                                margin='normal'
                                fullWidth
                            />

                            <AppFormField
                                name='copies'
                                label='Copies'
                                type='text'
                                variant='standard'
                                margin='normal'
                                fullWidth
                            />

                            <AppFormField
                                name='file'
                                label='File'
                                placeholder='Upload File'
                                type='file'
                                variant='standard'
                                margin='normal'
                                fullWidth
                            />


                            <DialogActions>
                                <Stack spacing={4} direction='row'>
                                    <AppButton title='Cancel' />
                                    <AppSubmitButton title='Submit' variant='text' />
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