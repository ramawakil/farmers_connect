import React from 'react';
import {Backdrop, CircularProgress} from "@mui/material";

function AppLoadingScreen({loading}) {
    

    return (
        <>
            <div>
                {/*<Button onClick={handleToggle}>Show backdrop</Button>*/}
                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={loading}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </div>
        </>
    );
}

export default AppLoadingScreen;