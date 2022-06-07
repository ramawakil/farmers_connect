import React from 'react';
import {Container} from "@mui/material";
import AppTable from "../../components/commons/AppTable";

const Headers = [
    'First Name', 'Last Name', 'Mobile', 'Registered Date'
]

const Columns = [
    'firstName', 'lastName', 'mobile', 'created_at'
]

function FarmLeaderTable({ data }) {
    return (
      <>
        <Container maxWidth='md'>
            <AppTable columns={Headers} tableHeaders={Columns} tableData={data} />
        </Container>
      </>
    );
}

export default FarmLeaderTable;