import React from 'react';
import {TableCell, TableHead, TableRow} from "@mui/material";

function AppTableHeader({ data: tableHeadersData }) {
    return (
        <TableHead>
            <TableRow sx={{ backgroundColor: '#2196f3' }}>
                {
                    tableHeadersData.map((header, index) => (
                        <TableCell align='justify' key={index}>{header}</TableCell>
                    ))
                }
            </TableRow>
        </TableHead>
    );
}

export default AppTableHeader;