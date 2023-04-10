import React from 'react';
import Nav from '../components/Nav/Nav';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import Table from "../components/Table/Table";

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

function Panel() {
    return (
        <Box sx={{display: 'flex'}}>
            <Nav/>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <DrawerHeader/>
                <Table/>
            </Box>
        </Box>
    );
}

export default Panel;