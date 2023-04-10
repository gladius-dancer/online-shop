import React from 'react';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import {NavType} from "../../types/NavTypes";

export default function NavItem({open, text, icon}: NavType) {

    return (
        <ListItem key={text} disablePadding sx={{display: 'block'}}>
            <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                >
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} sx={{opacity: open ? 1 : 0}}/>
            </ListItemButton>
        </ListItem>
    );
}