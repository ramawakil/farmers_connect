import React from 'react';
import {Container} from "@mui/material";
import AppTable from "../../components/commons/AppTable";

const Headers = [
    'Roll Number', 'First Name', 'Last Name', 'email',
]

const Columns = [
    'id', 'first_name', 'last_name', 'user'
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