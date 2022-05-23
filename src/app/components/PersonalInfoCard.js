import React from 'react';
import AppListItem from "./AppListItem";
import {Box} from "@mui/material";

function PersonalInfoCard(props) {
    return (
        <Box>
            <AppListItem image='/rama.jpg' title='Ramadhan Marijani' icon={false} />
            <AppListItem image='/id-card-user.svg' title='90803428784327' icon={false} subtitle='NIN' />
        </Box>
    );
}

export default PersonalInfoCard;