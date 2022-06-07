import React, {useContext, useEffect, useState} from 'react';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {Box, Container, Tab, Tabs} from "@mui/material";
import Farms from "../farmer/farms";
import FarmRequests from "../companyEmployee/farmRequests";
import FarmDetailPage from "../farmer/farmDetailPage";
import FarmerRequests from "../farmer/farmerRequests";
import NewRequest from "../farmer/newRequest";
import FarmRequestDetail from "../farmer/farmRequestDetail";
import CompanyRequestDetail from "./companyRequestDetail";
import UserContext from "../../context/userContext";
import CompanyEmployment from "./companyEmployment";

function CompanyHome(props) {
    const { user } = useContext(UserContext);
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
        <>
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
                        <Tab value="/company" label="Home"/>
                        {user.is_staff && <Tab value='/company/employment' label="Organization"/>}
                    </Tabs>
                </Box>

                <Box>

                    <Routes>
                        <Route path='' element={<FarmRequests/>}/>
                        <Route path='requests/:requestId' element={<CompanyRequestDetail/>}/>
                        <Route path='employment' element={<CompanyEmployment/>}/>

                    </Routes>
                </Box>

            </Container>

        </>
    );
}

export default CompanyHome;