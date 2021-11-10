import React, { FunctionComponent } from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Main: FunctionComponent = (props) => {
    return (
        <Container maxWidth="sm" style={{ backgroundColor: '#E5E5E5', minHeight: '100vh', minWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <Box sx={{my: 4, padding: 10, width: 800}}>
                { props.children }
            </Box>
        </Container>
    )
}

export default Main