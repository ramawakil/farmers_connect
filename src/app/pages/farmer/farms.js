import React, {useContext, useEffect} from 'react';
import {Box, Container, Divider} from "@mui/material";
import AppButton from "../../components/AppButton";
import AddIcon from '@mui/icons-material/Add';
import {useNavigate, Link} from "react-router-dom";
import farmsApi from '../../api/farms'
import {toast} from "react-toastify";
import FarmCardComponent from "../../components/farmCardComponent";
import LoadingContext from "../../context/loadingContext";


function Farms(props) {
    const [error, setError] = React.useState(null);
    const [farmList, setFarmList] = React.useState([]);
    const navigate = useNavigate();
    const { setLoading } = useContext(LoadingContext);

    const newFarm = () => {
        navigate('/farmer/new-farm');
    };

    useEffect(() => {
        fetchFarms();
    }, []);


    const fetchFarms = async () => {
        setError(null);
        setLoading(true);
        try {
            const res = await farmsApi.getFarms();
            setFarmList(res.data);
            setLoading(false);
        } catch (e) {
            setError(e.response.data.detail);
            setLoading(false);
            await toast.error(error);
        }

    };

    const navigateToDetail = (farm) => {
        navigate(`/farmer/${farm.id}`, {
            state: {
                farm: farm
            }
        });
    };

    return (
        <Container maxWidth='md' sx={{mt: 3}}>

            <Divider sx={{mt: 1, mb: 2}}/>

            <Box sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',

            }}>
                <div></div>
                {/*<AppButton variant='contained' sx={{ width: '60%',  }} title='Add new Farm' />*/}
                <AppButton variant='contained' onClick={newFarm} title='Add new Farm' color='info'
                           startIcon={<AddIcon/>}/>
            </Box>

            { farmList.length > 0 && (
                farmList.map((farm, index) => {
                    return (
                        <>
                            <FarmCardComponent farm={farm} key={index} navigateToDetail={() => navigateToDetail(farm)} />
                        </>

                    )
                })
            ) }

        </Container>
    );
}

export default Farms;
