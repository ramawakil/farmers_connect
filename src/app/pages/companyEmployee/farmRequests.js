import React from 'react';
import {Container} from "@mui/material";
import {useNavigate} from "react-router-dom";
import FarmRequestsListComponent from "../../components/farmRequestsListComponent";
import farmsRequestApi from '../../api/farmRequests';
import {toast} from "react-toastify";


function FarmRequests(props) {
    const [farmRequests, setFarmRequests] = React.useState([]);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    React.useEffect(() => {
        fetchFarmRequests();
    }, [])

    const fetchFarmRequests = async () => {
        try {
            const response = await farmsRequestApi.farmRequests();
            setFarmRequests(response.data);
        } catch (e) {
            setError(e.response.data.detail);
            toast.error(error)
        }
    }

    const navigateToRequest = (request) => {
        navigate(`/company/requests/${request.id}`)
    }

    return (
        <>
            <Container maxWidth='md'>
                {
                    farmRequests.length > 0 && (
                        farmRequests.map((req, index) => (
                            <FarmRequestsListComponent key={index} request={req} navigateToDetail={() => navigateToRequest(req)}  />
                        ))
                    )
                }
            </Container>
        </>
    );
}

export default FarmRequests;