import React from 'react';
import {Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import AppTableHeader from "./AppTableHeader";
import AppTableBody from "./AppTableBody";

function AppTable({caption, tableData, tableHeaders, columns, handleClick}) {
    return (
        <>
            <TableContainer component={Paper} sx={{ maxWidth: '100%' }}>
                <Table sx={{ maxWidth: '100%' }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: 'lightgray'}}>
                            {
                                columns.map((header, index) => (
                                    <TableCell align='justify' key={index}>{header}</TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tableData.map((row, index) => (
                                    <TableRow  sx={{ cursor: 'pointer' }} key={index} onClick={() => handleClick(row.id)}>
                                        {
                                            tableHeaders.map((column, index) => (

                                                <TableCell align='justify' sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}  key={index}>{row[column]}</TableCell>
                                            ))
                                        }
                                    </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default AppTable;