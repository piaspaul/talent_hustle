import { Button, Container, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HouseIcon from '@mui/icons-material/House';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../../Component/Loader/Loader';
import error from '../../../Images/Message/error.png';

const SearchArea = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    // const location = useLocation();

    const [title, setTitle] = useState('');
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const [locationInfo, setLocationInfo] = useState('');
    const handleLocationChange = (e) => {
        setLocationInfo(e.target.value);
    };

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        let interval = setInterval(() => {
            if (userData) {
                const updateInfo = JSON.parse(localStorage.getItem('userInfo'));
                setUserData(updateInfo || []);
            }
        }, 200)
        return () => clearInterval(interval);
    }, [userData]);
    // console.log(userData)

    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        navigate(`/login`);
    };

    const handleOpen = () => {
        setOpen(true);
        setTimeout(() => handleClose(), 3000);
    };


    const handleSearch = async (e) => {
        e.preventDefault();
        // console.log(title);
        // console.log(location);
        setLoading(true);
        if (userData?.email) {
            navigate(`/jobs`,
                {
                    state: {
                        title: title,
                        locationInfo: locationInfo,
                    }
                });
            setLoading(false);
        }
        else {
            // setLoading(true);
            // const addonMessage = {
            //     message: 'Please Login First!!!'
            // };
            // setMessage(addonMessage);
            handleOpen();
            // navigate(`/login`);
            // setLoading(false);
        }
        // const info = {
        //     'title': title,
        //     'location': location,
        // }
        // try {
        //     const response = await fetch(`https://talent-hustle-server.vercel.app/search`, {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(info),
        //     });

        //     const result = await response.json();
        //     console.log(result);
        // } catch (error) {
        //     console.error("Error:", error);
        // }
    };
    return (
        <>
            <Grid sx={{ marginTop: '-250px', position: 'relative', marginBottom: '250px' }}>
                <Container>
                    <Grid>
                        <Grid
                            sx={{ backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '30px 20px', boxShadow: '8' }}
                        >
                            <Grid
                                container
                                spacing={4}
                            >
                                <Grid item md={5}>
                                    <TextField
                                        sx={{
                                            color: 'black', width: '100%', [`& fieldset`]: {
                                                borderRadius: 2.5,
                                                height: '55px',
                                            },
                                            // '& .MuiSelect-select': {
                                            //     width: '1%'
                                            // },
                                        }}
                                        placeholder="Job Title"
                                        // size='small'
                                        id="outlined-select-city"
                                        value={title}
                                        name='title'
                                        onChange={handleTitleChange}
                                    >
                                    </TextField>
                                </Grid>
                                {
                                    loading && <Loader />
                                }
                                <Grid item md={5}>
                                    <TextField
                                        sx={{
                                            color: 'black', width: '100%', [`& fieldset`]: {
                                                borderRadius: 2.5,
                                                height: '55px',
                                            },
                                            // '& .MuiSelect-select': {
                                            //     width: '1%'
                                            // },
                                        }}
                                        placeholder="Location"
                                        // size='small'
                                        id="outlined-select-city"
                                        value={locationInfo}
                                        name='location'
                                        onChange={handleLocationChange}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item md={2}>
                                    <Button
                                        onClick={handleSearch}
                                        sx={{
                                            backgroundColor: '#291F78', textTransform: 'none', width: '100%', padding: '10px 20px', borderRadius: '10px', '&:hover': {
                                                bgcolor: '#291F78',
                                            }, fontSize: '20px', fontWeight: '600', fontFamily: 'monospace'
                                        }}
                                        variant="contained"
                                    >
                                        Search
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid>
            <Dialog
                open={open}
                onClose={onclose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title" sx={{ textAlign: 'center' }}>
                    <img style={{ width: '100px', height: '100px', }} src={error} alt="success" />
                </DialogTitle>
                <DialogContent sx={{ margin: '30px 10px' }}>
                    <DialogContentText sx={{ fontSize: '20px', fontWeight: '600', letterSpacing: '2px', }}>
                        {/* Successfully Create Product */}
                        {'Please Login First ...'}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </Grid>
        </>
    );
};

export default SearchArea;