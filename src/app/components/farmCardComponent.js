import React from 'react';
import {Box, Divider, Paper, Typography} from "@mui/material";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";

function FarmCardComponent({ farm }) {
    return (
        <>
            <Box>
                <Box component={Paper} sx={{
                    p: 3,
                    pb: 1,
                    m: 1,
                    mt: 3,
                    backgroundColor: '#eeeeff',
                    cursor: 'pointer',

                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 2,
                    }}>
                        <Typography variant='h5'>
                            { farm.title }
                        </Typography>
                        <div>
                            <Typography variant='body1'>
                                Crop cultivated: <span>{farm.crop_cultivated}</span>
                            </Typography>
                        </div>
                    </Box>

                    <Divider/>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        paddingX: 2,
                        fontSize: '1px',
                        p: 1,
                    }}>
                        <Box sx={{textAlign: 'center'}}>
                            <ShowerOutlinedIcon color='primary' />
                            <Typography variant='body1'>
                                Rainfall {farm.rainfall} mm
                            </Typography>
                        </Box>

                        <Box sx={{textAlign: 'center'}}>
                            <DeviceThermostatOutlinedIcon color='primary' />
                            <Typography variant='body1'>
                                Temperature {farm.temperature} celcius
                            </Typography>
                        </Box>
                        <Box sx={{textAlign: 'center'}}>
                            <WbSunnyOutlinedIcon color='primary' />
                            <Typography variant='body1'>
                                Humidity {farm.humidity} %
                            </Typography>
                        </Box>
                        <Box sx={{textAlign: 'center'}}>
                            <SpeedOutlinedIcon color='primary' />
                            <Typography variant='body1'>
                                PH Scale {farm.ph_scale}
                            </Typography>
                        </Box>
                    </Box>
                    <Divider/>
                    <Box sx={{
                        textAlign: 'center',
                        p: 2,
                        border: '0.5px dotted',

                    }}>
                        <p>
                            {farm.description}
                        </p>
                    </Box>
                    <Box sx={{ mb: 2, mt: 1 }}>
                        <Typography variant='subtitle1'>
                            Crop suggested: <span>{farm.crop_suggested}</span>
                        </Typography>
                    </Box>
                    <Divider/>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Typography variant='subtitle2'>
                            Location: latitude: <span>{farm.latitude}</span> longitude: <span>{farm.longitude}</span>
                        </Typography>

                        <Typography variant='subtitle2'>
                            Shamba Request Made: <span>{farm.farm_requests.length}</span>
                        </Typography>

                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default FarmCardComponent;