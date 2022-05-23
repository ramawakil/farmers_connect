import React, {useEffect} from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import {useRouter} from "next/router";


function AppTabs({links}) {

    const [value, setValue] = React.useState(links[0].id);
    const navigate = useRouter();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        handleChange(null, value);
    }, []);


    return (
        <div>
            <Box sx={{width: '100%'}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    {links.map(link => (
                        <Tab key={link.id} label={link.label} value={link.id}/>
                    ))}
                </Tabs>

            </Box>
        </div>
    );
}

export default AppTabs;
