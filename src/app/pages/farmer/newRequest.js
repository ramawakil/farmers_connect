import React, {useContext} from 'react';
import {Box, Container, Typography} from "@mui/material";
import AppForm from "../../components/forms/AppForm";
import * as Yup from "yup";
import AppFormField from "../../components/forms/AppFormField";
import AppSubmitButton from "../../components/forms/AppSubmitButton";
import farmsApi from '../../api/farmRequests';
import {toast} from "react-toastify";
import AppFormChoiceField from "../../components/forms/AppFormChoiceField";
import AppFormSelectField from "../../components/forms/AppFormSelectField";
import {useLocation, useNavigate} from "react-router-dom";
import LoadingContext from "../../context/loadingContext";


const FarmRequestValidationSchema = Yup.object().shape({
    category: Yup.string().required('Category is required'),
    description: Yup.string().required('Description is required'),
});

function NewRequest(props) {
    const params = useLocation();
    const [error, setError] = React.useState(null);
    const [farmCategories, setFarmCategories] = React.useState([]);
    const navigate = useNavigate();
    const { setLoading } = useContext(LoadingContext);



    React.useEffect(() => {
        fetchCategories();
    }, []);

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            await farmsApi.farmRequestCreate({
                farm: params.state.obj.id,
                ...values
            });
            setLoading(false);
            toast.success('Request created successfully');
            navigate('/farmer/farm-requests');

        }
        catch (e) {
            setLoading(false);
            setError(e.response.data.detail);
            toast.error(error);
        }
    };

    const fetchCategories = async () => {
        setLoading(true);
        try {
            const res = await farmsApi.getFarmCategories();
            const lsObj = [];
            res.data.map(item => {
                lsObj.push({
                    value: item.id,
                    label: item.name
                })
            });
            setFarmCategories(lsObj);
            setLoading(false);
        } catch (e) {
            setError(e.response.data.detail)
            setLoading(false);
            toast.error(error)
        }
    }

    return (
        <>
            <Container maxWidth='md' sx={{p: 5}}>
                <Typography variant='h6' sx={{m: 1}} gutterBottom>
                    Create a new Farm Request
                </Typography>

                <Box sx={{p: 2}}>
                    <AppForm
                        initialValues={{
                            category: '',
                            description: '',
                        }}
                        validationSchema={FarmRequestValidationSchema}
                        onSubmit={handleSubmit}
                    >

                        <Box sx={{p: 2}}>
                            <AppFormSelectField
                                name='category'
                                label='Farm Category'
                                choices={farmCategories}
                            />
                        </Box>

                        <Box sx={{p: 2, mt: 1}}>
                            <AppFormField
                                name='description'
                                label='Description'
                                placeholder='Description'
                                multiline
                                rows={4}
                                type='text'
                                variant='outlined'
                                fullWidth
                            />
                        </Box>

                        <Box sx={{mt: 1}}>
                            <AppSubmitButton title='Create Request' color='info' fullWidth/>
                        </Box>
                    </AppForm>
                </Box>
            </Container>
        </>
    );
}

export default NewRequest;