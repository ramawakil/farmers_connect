import React from 'react';
import {Link, TableBody, TableCell, TableRow} from "@mui/material";

function AppTableBody({ tableData, tableColumns: columns }) {
    return (
        <TableBody>
            {
                tableData.map((row, index) => (
                    <Link key={index} href={`/media/${row['bibNum']}`}>
                        <TableRow  sx={{ cursor: 'pointer' }}>
                            {
                                columns.map((column, index) => (

                                    <TableCell align='justify' sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}  key={index}>{row[column]}</TableCell>
                                ))
                            }
                        </TableRow>
                    </Link>
                ))
            }
        </TableBody>
    );
}

export default AppTableBody;