import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import './Login.css';
import login from '../../Images/Login/login.png';
import Loader from '../../Component/Loader/Loader';
import Message from '../../Component/Message/Message';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [flag, setFlag] = useState('');

    const handleButtonClick = (id) => {
        setFlag(id);
        // console.log(id);
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


    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    // const [candidate, setCandidate] = useState('');
    const handleClose = () => {
        setOpen(false);
        navigate(`/home`);
    };
    // console.log(flag)

    const handleOpen = () => {
        setOpen(true);
        setTimeout(() => handleClose(), 3000);
    };

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const info = {
            'email': data.email,
            'password': data.password,
            'isCandidate': flag
        };
        try {
            setLoading(true);
            const response = await fetch(`https://talent-hustle-server.vercel.app/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(info),
            });

            const result = await response.json();
            setLoading(true);
            // console.log(result);
            if (result.message === 'Login Successful') {
                // setCandidate(result?.data?.isCandidate);
                localStorage.setItem('userInfo', JSON.stringify(result.data));
                const addonMessage = {
                    message: 'Successfully Login'
                };
                setMessage(addonMessage);
                handleOpen();
                setLoading(false);
            }
            else if (result.message === 'Login Failed') {
                // setCandidate(result?.data?.isCandidate);
                const addonMessage = {
                    message: 'Login Failed!!! Try Again...'
                };
                setMessage(addonMessage);
                handleOpen();
                setLoading(false);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (
        <>
            <Navigation />
            <Grid>
                <Grid>
                    <Container>
                        <Grid sx={{ marginTop: '50px' }}>
                            <Grid
                                container
                                spacing={0}
                            >
                                <Grid item md={4.5}>
                                    <Grid sx={{ padding: '50px 40px', borderRadius: '10px 0px 0px 10px', boxShadow: '2', backgroundImage: 'linear-gradient(to right, #FFFFFF, #7697EB)' }}>
                                        <Grid>
                                            <Typography sx={{ fontSize: '30px', fontWeight: '600', marginBottom: '20px', letterSpacing: '2px' }}>
                                                The Easiest Way to
                                                Get Your New Job
                                            </Typography>
                                            <Typography sx={{ fontSize: '15px', marginBottom: '20px' }}>
                                                Browse as a visitor and register to apply LOGIN
                                                right now
                                            </Typography>
                                        </Grid>
                                        <Grid sx={{ textAlign: 'center' }}>
                                            <img style={{ width: '80%', height: '205px', }} src={login} alt="Banner" />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {
                                    loading && <Loader />
                                }
                                <Grid item md={7.5}>
                                    <Grid sx={{ padding: '71px 20px', borderRadius: '0px 10px 10px 0px', boxShadow: '2', backgroundImage: 'linear-gradient(to right, #FFFFFF, #7697EB)' }}>
                                        <Grid sx={{ textAlign: 'center' }}>
                                            <Typography sx={{ fontSize: '25px', fontWeight: '600', marginBottom: '20px' }}>
                                                Login Using
                                            </Typography>
                                        </Grid>
                                        <Grid sx={{ marginBottom: '20px' }}>
                                            <Grid
                                                display='flex'
                                                alignItems='center'
                                                justifyContent='center'
                                                gap={4}
                                            >
                                                <Button
                                                    sx={{ fontSize: '17px', fontWeight: '600', textTransform: 'none', padding: '10px 30px' }}
                                                    variant={flag === '1' ? 'contained' : 'outlined'}
                                                    onClick={() => handleButtonClick('1')}
                                                >
                                                    Candidate
                                                </Button>
                                                <Button
                                                    sx={{ fontSize: '17px', fontWeight: '600', textTransform: 'none', padding: '10px 30px' }}
                                                    variant={flag === '2' ? 'contained' : 'outlined'}
                                                    onClick={() => handleButtonClick('2')}
                                                >
                                                    Employee
                                                </Button>
                                            </Grid>
                                        </Grid>
                                        <Grid sx={{ textAlign: 'center' }}>
                                            <Typography sx={{ fontSize: '20px', fontWeight: '600', color: '#291F78' }}>
                                                Existing User
                                            </Typography>
                                            <Grid>
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        sx={{ width: '50%', textAlign: 'center', marginTop: '20px', marginRight: '10px', marginLeft: '10px' }}
                                                        variant="outlined"
                                                        placeholder='Email'
                                                        type='email'
                                                        size='small'
                                                        name='email'
                                                        {...register("email", { required: 'Email is required.' })}
                                                    />
                                                    {errors.email && <p className='text'>Email is required</p>}
                                                    <TextField
                                                        id="outlined-basic2"
                                                        sx={{ width: '50%', textAlign: 'center', marginTop: '20px', marginRight: '10px', marginLeft: '10px' }}
                                                        variant="outlined"
                                                        placeholder='Password'
                                                        type='password'
                                                        size='small'
                                                        name='password'
                                                        {...register("password", { required: 'Password is required.' })}
                                                    />
                                                    {errors.email && <p className='text'>Password is required</p>}
                                                    <Button
                                                        sx={{ width: '50%', textAlign: 'center', marginTop: '20px', backgroundColor: '#291F78', paddingTop: '10px', paddingBottom: '10px', marginRight: '10px', marginLeft: '10px' }}
                                                        variant="contained"
                                                        type="submit" >
                                                        Login
                                                    </Button>
                                                </form>
                                            </Grid>
                                            {/* <Grid>
                                                <Button
                                                    sx={{ width: '50%', textAlign: 'center', marginTop: '30px', paddingTop: '10px', paddingBottom: '10px', marginRight: '10px', marginLeft: '10px' }}
                                                    variant="contained"
                                                    type="submit" >
                                                    Login with Google
                                                </Button>
                                            </Grid> */}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid >
            </Grid >
            <Footer />
            {
                open && <Message open={open} onclose={handleClose} message={message} />
            }
        </>
    );
};

export default Login;