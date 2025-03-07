import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';


function Page(props) {
    function handleChange(event, value) {
        props.handlePage(value)
    }
    return (
        <>
            <Typography>Page: {props.page}</Typography>
            <Pagination
                sx={{
                    '& .MuiPaginationItem-root': {
                    color: 'white', // Custom color
                    },
                }}
                count={500}
                size="large"
                page={props.page}
                onChange={handleChange}
            />     
        </>
  
    );
}

export default Page;