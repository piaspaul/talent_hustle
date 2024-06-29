import React, { useContext, useState } from 'react';
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles
} from "@material-ui/core";
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Grid, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: "none",
        color: "white",
        fontWeight: 600,
        fontSize: "20px",
        // padding: '10px',
        marginLeft: '10px',
        marginRight: '10px'
    },
    icon: {
        color: "white",
    },
    button: {
        color: 'white',
        fontWeight: '600',
        fontSize: '18px',
        marginLeft: '10px',
        marginRight: '10px'
    },
    button2: {
        color: 'white',
        fontWeight: '600',
        fontSize: '18px',
        marginLeft: '-10px',
        marginRight: '10px'
    },
    drawer: {
        "& .MuiDrawer-paper": {
            backgroundColor: '#E41B17',
            opacity: '75%',
            width: '200px',
        },
        "& .MuiList-root": {
            marginTop: '50px'
        },
        // "& .MuiButtonBase-root": {
        //     marginTop: '20px',
        // },
    }
}));

const NavDrawer = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleLogoutUser = () => {
        // logoutUser();
        navigate('/');
        window.location.reload();
    }
    const handleProfile = () => {
        navigate('/profile');
        window.location.reload();
    }

    return (
        <>
            <Drawer
                className={classes.drawer}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to='/tour-plan' className={classes.link}>Option 0</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to='/today-deal' className={classes.link}>Option 0</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/about" className={classes.link}>Option 0</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/contact" className={classes.link}>Option 0</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/" className={classes.link}>Option 0</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/login" className={classes.link}>Option 0</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    );
};

export default NavDrawer;