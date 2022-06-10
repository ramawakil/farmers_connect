import React from 'react';
import AppTable from "../../../components/commons/AppTable";

const Headers = [
    'Roll Number', 'First Name', 'Last Name', 'email', 'Title'
]

const Columns = [
    'id', 'first_name', 'last_name', `user`, 'role'
]

function CompanyTable({ data }) {
    return (
        <>
            <AppTable tableData={data} tableHeaders={Columns} columns={Headers} />
        </>
    );
}

export default CompanyTable;