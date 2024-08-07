import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { NavLink } from "react-router-dom";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './Sidebar.css'

export default function Sidebar() {

    return (
        <div className='sidebar d-flex flex-column justify-content-between'>
            <Box role="presentation">
                <List>
                    <ListItem>
                        <NavLink to='/' className={({ isActive }) => (isActive ? "activelink" : null)}>
                            <ListItemButton>
                                <ListItemIcon className='sidebar-icons'>
                                    <HomeIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon className='sidebar-icons'>
                                <NoteAltOutlinedIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <NavLink to="/payments" className={({ isActive }) => (isActive ? "activelink" : null)}>
                            <ListItemButton>
                                <ListItemIcon className='sidebar-icons'>
                                    <AccountBalanceWalletIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon className='sidebar-icons'>
                                <LocalMallOutlinedIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon className='sidebar-icons'>
                            <ExitToAppIcon />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );
}
