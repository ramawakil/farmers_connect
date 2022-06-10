import React, {useContext} from 'react';
import {Box, Container, Divider, Paper, Stack, Typography} from "@mui/material";
import farmsRequestApi from '../../api/farmRequests';
import {toast} from "react-toastify";
import FarmRequestTable from "../../components/farmRequestTable";
import {Link, useNavigate} from "react-router-dom";
import FarmCardComponent from "../../components/farmCardComponent";
import FarmRequestsListComponent from "../../components/farmRequestsListComponent";
import LoadingContext from "../../context/loadingContext";


function FarmerRequests(props) {
    const [requests, setRequests] = React.useState([]);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();
    const { setLoading } = useContext(LoadingContext);


    React.useEffect(() => {
        getRequests();
    }, []);

    const getRequests = async () => {
        setLoading(true)
        try {
            const res = await farmsRequestApi.farmRequests();
            setRequests(res.data);
            setLoading(false);
        }
        catch (e) {
            setError(e.response.data.detail);
            setLoading(false);
            toast.error(error);
        }
    };

    const navigateRequestDetails = (request) => {
        navigate(`/farmer/farm-requests/${request.id}`, {state: {request}});
    };

    return (
        <>
            <Container maxWidth='md' sx={{ p: 5 }}>
                { requests.length > 0 && (
                    requests.map((req, index) => {
                        return (
                            <>
                                    <FarmRequestsListComponent request={req} navigateToDetail={() => navigateRequestDetails(req)}  />
                                </>

                        )
                    })
                ) }

            </Container>
        </>
    );
}

export default FarmerRequests;