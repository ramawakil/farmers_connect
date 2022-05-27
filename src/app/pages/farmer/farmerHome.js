import React, {useState} from 'react';
import {Box, Container, Tab, Tabs} from "@mui/material";
import {Route, Routes, useNavigate} from "react-router-dom";
import Farms from "./farms";
import NewFarmForm from "./newFarmForm";


function FarmerHome(props) {
    const [value, setValue] = useState('/farmer');
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(newValue);

    };


    return (
        <Container maxWidth='md' sx={{ mt: 3 }}>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="/farmer" label="Farms" />
                    <Tab value="/farmer/" label="SHAMBA Requests" />
                </Tabs>
            </Box>

            <Box>

                <Routes>
                    <Route path='/' element={<Farms />} />
                    <Route path='/new-farm' element={<NewFarmForm />} />
                </Routes>
            </Box>

        </Container>
    );
}

export default FarmerHome;