import React from 'react';
import AppTable from "./commons/AppTable";

function AppLoanTable({ tableData, tableHeaders, columns, caption }) {
    return (

        <AppTable tableData={tableData} tableHeaders={tableHeaders} columns={columns} caption={caption} />

    );
}

export default AppLoanTable;