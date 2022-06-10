import React, {useContext, useState} from 'react';
import {
    Box,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack
} from "@mui/material";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";
import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import CompanyTable from "./companyEmploymentTable/companyTable";
import * as Yup from "yup";
import farmsRequestApi from '../../api/farmRequests';
import {toast} from "react-toastify";
import LoadingContext from "../../context/loadingContext";


const ValidationSchema = Yup.object().shape({
    first_name: Yup.string().required('First name required'),
    last_name: Yup.string().required('Last name required'),
    email: Yup.string().required('Email required')
});


function CompanyEmployment(props) {

    const [value, setValue] = useState();
    const [employees, setEmployees] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState(null);
    const { setLoading } = useContext(LoadingContext);
    const [ filteredEmployees, setFilteredEmployees ] = useState(employees);


    React.useEffect(() => {
        fetchEmployees();
    }, [])


    const fetchEmployees = async () => {
        setLoading(true);
        try {
            const res = await farmsRequestApi.getEmployees();
            setEmployees(res.data);
            setFilteredEmployees(res.data);
            setLoading(false);
        }
        catch (e) {
            setError(e.response.data.detail);
            toast.error(error);
            setLoading(false);
        }
    }

    const registerEmployeesSubmit = async (values) => {
        try {
            await farmsRequestApi.registerEmployee(values);
            toast.success('Employee Added successfully')
            fetchEmployees();
        }
        catch (e) {
            setError(e.response.data.detail);
            toast.error(error);
        }
        handleClose();
    }

    const handleChange = (event) => {
        let word = event.target.value;
        setValue(word);
        let filtered = employees.filter(farmer => {
                return farmer.first_name.toLowerCase().includes(word.toLowerCase()) || farmer.user.toLowerCase().includes(word.toLowerCase()) ||
                    farmer.last_name.toLowerCase().includes(word.toLowerCase()) ||
                    farmer.id.toString().includes(word.toLowerCase());
            }
        );
        setFilteredEmployees(filtered);
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                    <AppButton onClick={handleClickOpen} title='Add Employee' variant='contained' color='info' />
                </Box>
                <Box>
                    <CompanyTable data={filteredEmployees}  />
                </Box>

                <Dialog open={open} onClose={handleClose} maxWidth='md' fullWidth>
                    <DialogTitle>Add Employee Information</DialogTitle>
                    <DialogContent>
                        <DialogContentText >
                            Register a new Employee, to allow them to get started.
                        </DialogContentText>
                        <AppForm
                            onSubmit={registerEmployeesSubmit}
                            validationSchema={ValidationSchema}
                            initialValues={{
                                first_name: '',
                                last_name: '',
                                email: ''
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
                                    <AppButton title='Cancel'  onClick={handleClose} />
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

export default CompanyEmployment;