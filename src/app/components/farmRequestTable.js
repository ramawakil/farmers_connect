import React from 'react';
import AppTable from "./commons/AppTable";

const Columns = [
    'Id', 'Farm', 'Category', 'Status', 'Responses', 'Created At', 'Updated At'
]

const TableHeaders = [
    'id', 'farm', 'category', 'status', 'farm_request_responses.length', 'created_at', 'updated_at'
]

const handleClick = (id) => {
    console.log(id);
}

function FarmRequestTable({ farmRequests }) {
    return (
        <>
            <AppTable tableData={farmRequests} tableHeaders={TableHeaders} caption='Farmer FarmRequests' columns={Columns} handleClick={handleClick} />
        </>
    );
}

export default FarmRequestTable;