import React from 'react';
import {Container} from "@mui/material";
import farmsRequestApi from '../../api/farmRequests';
import {toast} from "react-toastify";
import FarmRequestTable from "../../components/farmRequestTable";


function FarmerRequests(props) {
    const [requests, setRequests] = React.useState([]);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        getRequests();
        console.log(requests);
    }, []);

    const getRequests = async () => {
        try {
            const res = await farmsRequestApi.farmRequests();
            setRequests(res.data);
            console.log(res);
        }
        catch (e) {
            setError(e.response.data.detail);
            toast.error(error);
        }
    };

    return (
        <>
            <Container maxWidth='md' sx={{ p: 5 }}>
                <FarmRequestTable farmRequests={requests} />
            </Container>
        </>
    );
}

export default FarmerRequests;