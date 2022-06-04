import React from 'react';
import {Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

function AppFormChoiceField({}) {
    return (
        <Box sx={{mx: 5}}>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Announcement For</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio/>} label="School"/>
                    <FormControlLabel value="male" control={<Radio/>} label="Classroom"/>
                    <FormControlLabel value="other" control={<Radio/>} label="Grade-level"/>
                </RadioGroup>
            </FormControl>
        </Box>
    );
}

export default AppFormChoiceField;