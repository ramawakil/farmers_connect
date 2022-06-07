import React, {useEffect, useState} from 'react';
import {Box, Container, Tab, Tabs} from "@mui/material";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Farms from "./farms";
import NewFarmForm from "./newFarmForm";
import FarmDetailPage from "./farmDetailPage";
import FarmerRequests from "./farmerRequests";
import FarmRequestDetail from "./farmRequestDetail";
import NewRequest from "./newRequest";


function FarmerHome(props) {
    const [value, setValue] = useState();
    const navigate = useNavigate();
    const params = useLocation();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(newValue);
    };

    useEffect(() => {
        setValue(params.pathname);
    }, [params.pathname]);


    return (
        <Container maxWidth='md' sx={{mt: 3}}>
            <Box sx={{width: '100%'}}>
                <Tabs
                    value={value}
                    sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="/farmer" label="Farms"/>
                    <Tab value="/farmer/farm-requests" label="SHAMBA FarmRequests"/>
                </Tabs>
            </Box>

            <Box>

                <Routes>
                    <Route path='' element={<Farms/>}/>
                    <Route path='new-farm' element={<NewFarmForm/>}/>
                    <Route path=':farmId' element={<FarmDetailPage/>}/>
                    <Route path='farm-requests/*'>
                        <Route path='' element={<FarmerRequests/>}/>
                    <Route path='new-request' element={<NewRequest/>} />
                        <Route path=':farmRequestId' element={<FarmRequestDetail/>}/>
                    </Route>

                </Routes>
            </Box>

        </Container>
    );
}

export default FarmerHome;