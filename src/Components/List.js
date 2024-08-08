import { React, useState } from 'react'
import data from "./vault.json"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

function List(props) {
    let parseData = JSON.stringify(data)
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'Name',
            headerName: 'Game Name',
            width: 300,
            editable: true,
        },
        {
            field: 'Claimed',
            headerName: 'Claimed',
            width: 150,
            editable: false,
        }
    ];

    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.Name.toLowerCase().includes(props.input)
        }
    })
    return (
        
        
        <Box sx={{ height: 1500, width: '100%' }}>
            <DataGrid
                rows={filteredData}
                columns={columns}
                pageSize={50}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>

    )
}

export default List