import React, { useContext, useEffect, useState } from 'react';
import { AppBar, CssBaseline, makeStyles, Toolbar, useMediaQuery, useTheme } from '@material-ui/core';
import { Avatar, Button, Grid, ListItemIcon, Menu, MenuItem, Typography, } from '@mui/material';
import { Link, NavLink, useLocation } from 'react-router-dom';
import NavDrawer from '../Navigation/Drawer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import logo from '../../Images/home/logo.png'
import Person from "@mui/icons-material/Person";
import Logout from "@mui/icons-material/Logout";
import Loader from '../../Component/Loader/Loader';
import Message from '../../Component/Message/Message';


const useStyles = makeStyles((theme) => ({
    navlinks: {
        display: 'flex',
        backgroundColor: 'white',
    },
    logo: {
        flexGrow: '1',
        marginTop: '-5px'
    },
    link: {
        textDecoration: 'none',
        marginTop: '-5px',
        color: 'black',
        fontSize: '24px',
        marginLeft: theme.spacing(3),
        '&:hover': {
            color: 'red',
        },
        fontWeight: '600'
    },
    link1: {
        textDecoration: 'none',
        color: 'black',
        marginTop: '-5px',
        fontSize: '24px',
        marginLeft: theme.spacing(3),
        '&:hover': {
            color: 'red',
        },
        fontWeight: '600'
    },
    link4: {
        textDecoration: 'none',
        color: 'black',
        marginTop: '-5px',
        fontSize: '24px',
        marginLeft: theme.spacing(3),
        '&:hover': {
            color: 'red',
        },
        fontWeight: '600'
    },
    link5: {
        textDecoration: 'none',
        marginTop: '-5px',
        color: 'black',
        fontSize: '25px',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        '&:hover': {
            color: 'red',
        },
        fontWeight: '600'
    },
    link7: {
        textDecoration: 'none',
        color: 'black',
        marginTop: '10px',
        fontWeight: 600,
        paddingRight: '20px',
        fontSize: '24px',
        marginLeft: theme.spacing(3),
        '&:hover': {
            color: 'red',
        },
    },
    link8: {
        textDecoration: 'none',
        color: 'black',
        marginTop: '10px',
        fontWeight: 600,
        fontSize: '24px',
        marginLeft: theme.spacing(3),
        '&:hover': {
            color: 'red',
        },
    },
}));

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classes = useStyles();
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    const opens = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloses = () => {
        setAnchorEl(null);
    };

    const [message, setMessage] = useState('');
    const [messageOpen, setMessageOpen] = useState(false);
    const handleMessageClose = () => {
        setMessageOpen(false);
        navigate(`/home`);
    };

    const handleMessageOpen = () => {
        setMessageOpen(true);
        setTimeout(() => handleMessageClose(), 3000);
    };

    const logoutUser = () => {
        setLoading(true);
        localStorage.removeItem('userInfo');
        const addonMessage = {
            message: 'Successfully Logout'
        };
        setMessage(addonMessage);
        handleMessageOpen();
        setLoading(false);
    };

    const handleLogoutUser = () => {
        logoutUser();
        // navigate('/');
        // window.location.reload();
    }

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        let interval = setInterval(() => {
            if (userData) {
                const updateInfo = JSON.parse(localStorage.getItem('userInfo'));
                setUserData(updateInfo || []);
            }
        }, 200)
        return () => clearInterval(interval);
    }, []);

    // console.log(userData);

    //Profile
    const handleProfile = () => {
        navigate('/profile');
    };
    const handleDashboard = () => {
        navigate('/company-dashboard');
    };



    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <AppBar style={{ background: 'white', height: '70px', width: '100%' }} position='sticky'>
                <CssBaseline>
                    <Toolbar>
                        <Link to='/' className={classes.logo}>
                            <img style={{ width: '100px', height: '80px', marginLeft: '20px' }} src={logo} alt="Trektil" />
                        </Link>

                        {isMobile ? (
                            <NavDrawer />
                        ) : (
                            <Grid
                                container
                                display='flex'
                                alignItems='center'
                                justifyContent='flex-end'
                                textAlign='right'
                                className={classes.navlinks}>
                                <Grid item md={7} display='flex' justifyContent='flex-start' marginTop='10px'>
                                    {/* <NavLink to='/tour-plan' style={{ textDecoration: 'none' }} className={classes.link1}>
                                                    {t('nOption1')}
                                                </NavLink> */}
                                    <NavLink to='/' style={{ textDecoration: 'none', fontFamily: 'serif' }} className={classes.link}>
                                        HOME
                                    </NavLink>
                                    <NavLink to='/about' style={{ textDecoration: 'none', fontFamily: 'serif' }} className={classes.link}>
                                        ABOUT
                                    </NavLink>
                                    {/* <NavLink to='/jobs' style={{ textDecoration: 'none' }} className={classes.link4}>
                                        JOBS
                                    </NavLink> */}
                                    {/* <NavLink to='/news' style={{ textDecoration: 'none' }} className={classes.link4}>
                                        NEWS
                                    </NavLink> */}
                                    <NavLink to='/contact' style={{ textDecoration: 'none', fontFamily: 'serif' }} className={classes.link4}>
                                        CONTACT
                                    </NavLink>
                                </Grid>
                                {
                                    loading && <Loader />
                                }
                                <Grid item md={5} display='flex' justifyContent='flex-end'
                                    marginTop='10px'>
                                    {
                                        userData.length !== 0 ?
                                            <>
                                                {
                                                    userData && userData?.isCandidate === '1' ?
                                                        <>
                                                            <Button
                                                                onClick={handleClick}
                                                                size="small"
                                                                sx={{
                                                                    ml: 1, color: 'black', textTransform: 'none', '&:hover': {
                                                                        bgcolor: 'white',
                                                                        color: 'black',
                                                                    },
                                                                    '&:focus': {
                                                                        color: 'white',
                                                                        bgcolor: 'white'
                                                                    },
                                                                }}
                                                                aria-controls={open ? "account-menu" : undefined}
                                                                aria-haspopup="true"
                                                                aria-expanded={open ? "true" : undefined}
                                                            >
                                                                <Avatar sx={{ width: 30, height: 30, boxShadow: '2' }}>{userData?.name[0]}</Avatar>
                                                            </Button>
                                                            <Grid
                                                                alignItems='center'
                                                                textAlign='start'
                                                            >
                                                                <Typography sx={{ fontWeight: '600', color: 'black', marginTop: '12px', fontSize: '16px' }}>{userData?.name}</Typography>
                                                                <Typography sx={{ color: 'black', fontSize: '12px', marginTop: '-5px', }}>{userData?.email}</Typography>
                                                            </Grid>
                                                            <Menu
                                                                anchorEl={anchorEl}
                                                                id="account-menu"
                                                                open={opens}
                                                                onClose={handleCloses}
                                                                onClick={handleCloses}
                                                                PaperProps={{
                                                                    elevation: 0,
                                                                    sx: {
                                                                        overflow: "visible",
                                                                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                                                        mt: 1.5,
                                                                        "& .MuiAvatar-root": {
                                                                            width: 32,
                                                                            height: 32,
                                                                            ml: -0.5,
                                                                            mr: 1
                                                                        },
                                                                        "&:before": {
                                                                            content: '""',
                                                                            display: "block",
                                                                            position: "absolute",
                                                                            top: 0,
                                                                            right: 14,
                                                                            width: 10,
                                                                            height: 10,
                                                                            bgcolor: "background.paper",
                                                                            transform: "translateY(-50%) rotate(45deg)",
                                                                            zIndex: 0
                                                                        }
                                                                    }
                                                                }}
                                                                transformOrigin={{ horizontal: "left", vertical: "top" }}
                                                                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                                                            >
                                                                <MenuItem
                                                                    onClick={handleProfile}
                                                                    sx={{
                                                                        '&.hover': {
                                                                            backgroundColor: 'red'
                                                                        },
                                                                    }}>
                                                                    <ListItemIcon>
                                                                        <Person sx={{ color: '#A10F0F' }} fontSize="small" />
                                                                    </ListItemIcon>
                                                                    Profile
                                                                </MenuItem>
                                                                {/* <MenuItem
                                                                                onClick={handleNote}
                                                                            >
                                                                                <ListItemIcon>
                                                                                    <NoteAltIcon sx={{ color: '#A10F0F' }} fontSize="small" />
                                                                                </ListItemIcon>
                                                                                Keep Note
                                                                            </MenuItem> */}
                                                                {/* <MenuItem>
                                                                                <ListItemIcon>
                                                                                    <FavoriteIcon sx={{ color: '#A10F0F' }} fontSize="small" />
                                                                                </ListItemIcon>
                                                                                My favourite place
                                                                            </MenuItem>
                                                                            <MenuItem>
                                                                                <ListItemIcon>
                                                                                    <Settings sx={{ color: '#A10F0F' }} fontSize="small" />
                                                                                </ListItemIcon>
                                                                                Settings
                                                                            </MenuItem> */}
                                                                <MenuItem
                                                                    onClick={handleLogoutUser}
                                                                >
                                                                    <ListItemIcon>
                                                                        <Logout sx={{ color: '#A10F0F' }} fontSize="small" />
                                                                    </ListItemIcon>
                                                                    Logout
                                                                </MenuItem>
                                                            </Menu>
                                                        </>
                                                        :
                                                        <>
                                                            <Button
                                                                onClick={handleClick}
                                                                size="small"
                                                                sx={{
                                                                    ml: 1, color: 'black', textTransform: 'none', '&:hover': {
                                                                        bgcolor: 'white',
                                                                        color: 'black',
                                                                    },
                                                                    '&:focus': {
                                                                        color: 'white',
                                                                        bgcolor: 'white'
                                                                    },
                                                                }}
                                                                aria-controls={open ? "account-menu" : undefined}
                                                                aria-haspopup="true"
                                                                aria-expanded={open ? "true" : undefined}
                                                            >
                                                                <Avatar sx={{ width: 30, height: 30, boxShadow: '2' }}>{userData?.name[0]}</Avatar>
                                                            </Button>
                                                            <Grid
                                                                alignItems='center'
                                                                textAlign='start'
                                                            >
                                                                <Typography sx={{ fontWeight: '600', color: 'black', marginTop: '12px', fontSize: '16px' }}>{userData?.name}</Typography>
                                                                <Typography sx={{ color: 'black', fontSize: '12px', marginTop: '-5px', }}>{userData?.email}</Typography>
                                                            </Grid>
                                                            <Menu
                                                                anchorEl={anchorEl}
                                                                id="account-menu"
                                                                open={opens}
                                                                onClose={handleCloses}
                                                                onClick={handleCloses}
                                                                PaperProps={{
                                                                    elevation: 0,
                                                                    sx: {
                                                                        overflow: "visible",
                                                                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                                                        mt: 1.5,
                                                                        "& .MuiAvatar-root": {
                                                                            width: 32,
                                                                            height: 32,
                                                                            ml: -0.5,
                                                                            mr: 1
                                                                        },
                                                                        "&:before": {
                                                                            content: '""',
                                                                            display: "block",
                                                                            position: "absolute",
                                                                            top: 0,
                                                                            right: 14,
                                                                            width: 10,
                                                                            height: 10,
                                                                            bgcolor: "background.paper",
                                                                            transform: "translateY(-50%) rotate(45deg)",
                                                                            zIndex: 0
                                                                        }
                                                                    }
                                                                }}
                                                                transformOrigin={{ horizontal: "left", vertical: "top" }}
                                                                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                                                            >
                                                                <MenuItem
                                                                    onClick={handleDashboard}
                                                                    sx={{
                                                                        '&.hover': {
                                                                            backgroundColor: 'red'
                                                                        },
                                                                    }}>
                                                                    <ListItemIcon>
                                                                        <Person sx={{ color: '#A10F0F' }} fontSize="small" />
                                                                    </ListItemIcon>
                                                                    Dashboard
                                                                </MenuItem>
                                                                {/* <MenuItem
                                                                                onClick={handleNote}
                                                                            >
                                                                                <ListItemIcon>
                                                                                    <NoteAltIcon sx={{ color: '#A10F0F' }} fontSize="small" />
                                                                                </ListItemIcon>
                                                                                Keep Note
                                                                            </MenuItem> */}
                                                                {/* <MenuItem>
                                                                                <ListItemIcon>
                                                                                    <FavoriteIcon sx={{ color: '#A10F0F' }} fontSize="small" />
                                                                                </ListItemIcon>
                                                                                My favourite place
                                                                            </MenuItem>
                                                                            <MenuItem>
                                                                                <ListItemIcon>
                                                                                    <Settings sx={{ color: '#A10F0F' }} fontSize="small" />
                                                                                </ListItemIcon>
                                                                                Settings
                                                                            </MenuItem> */}
                                                                <MenuItem
                                                                    onClick={handleLogoutUser}
                                                                >
                                                                    <ListItemIcon>
                                                                        <Logout sx={{ color: '#A10F0F' }} fontSize="small" />
                                                                    </ListItemIcon>
                                                                    Logout
                                                                </MenuItem>
                                                            </Menu>
                                                        </>
                                                }
                                            </>
                                            :
                                            <>
                                                <NavLink to='/login' style={{ textDecoration: 'none', fontFamily: 'serif' }} className={classes.link5}>
                                                    Login
                                                </NavLink>
                                                <NavLink to='/register' style={{ textDecoration: 'none', fontFamily: 'serif' }} className={classes.link5}>
                                                    Register
                                                </NavLink>
                                            </>
                                    }
                                </Grid>
                            </Grid>
                        )}
                    </Toolbar>
                </CssBaseline>
            </AppBar>
            {
                messageOpen && <Message open={messageOpen} onclose={handleMessageClose} message={message} />
            }
        </>
    );
};

export default Navigation;