import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import about from '../../Images/new/about001.png';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Component/Loader/Loader';
import Message from '../../Component/Message/Message';

const About = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        navigate(`/about`);
    };

    const handleOpen = () => {
        setOpen(true);
        setTimeout(() => handleClose(), 3000);
    };

    const [name, setName] = useState('');
    const nameChange = (e) => {
        setName(e.target.value);
    }

    const [email, setEmail] = useState('');
    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    const [messages, setMessages] = useState('');
    const messagesChange = (e) => {
        setMessages(e.target.value);
    }


    const hanldeContact = async (e) => {
        // onCloseModal();
        // console.log(data);
        const info = {
            'email': email,
            'name': name,
            'message': messages
        }
        try {
            setLoading(true);
            const response = await fetch(`https://talent-hustle-server.vercel.app/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(info),
            });
            const result = await response.json();
            setLoading(false);
            if (result.message === 'Successful') {
                setEmail('');
                setName('');
                setMessages('');
                const addonMessage = {
                    message: 'Successfully Submit Contact Information.'
                };
                setMessage(addonMessage);
                handleOpen();
                setLoading(false);
            }
            else if (result.message === 'Failed') {
                setEmail('');
                setName('');
                setMessages('');
                const addonMessage = {
                    message: 'Failed to submit contact information!!! Try Again...'
                };
                setMessage(addonMessage);
                handleOpen();
                setLoading(false);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const [newsEmail, setNewsEmail] = useState('');
    const newsEmailChange = (e) => {
        setNewsEmail(e.target.value);
    }

    const hanldeNews = async (e) => {
        // onCloseModal();
        // console.log(data);
        const info = {
            'email': newsEmail,
        }
        try {
            setLoading(true);
            const response = await fetch(`https://talent-hustle-server.vercel.app/news`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(info),
            });
            const result = await response.json();
            setLoading(false);
            if (result.message === 'Successful') {
                setNewsEmail('');
                const addonMessage = {
                    message: 'Successfully Submit Email.'
                };
                setMessage(addonMessage);
                handleOpen();
                setLoading(false);
            }
            else if (result.message === 'Failed') {
                setNewsEmail('');
                const addonMessage = {
                    message: 'Failed to submit email!!! Try Again...'
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
                    <Grid>
                        <img style={{ width: '100%', height: '450px', }} src={about} alt="Banner" />
                    </Grid>
                    <Grid marginTop='-300px'>
                        <Typography sx={{ fontSize: '30px', color: 'black', fontWeight: '600', textAlign: 'center', letterSpacing: '5px' }}>
                            About Us
                        </Typography>
                        <Typography sx={{ fontSize: '15px', color: 'black', fontWeight: '600', textAlign: 'center' }}>
                            We are here for any information check this out
                        </Typography>
                    </Grid>
                </Grid>
                <Grid sx={{ marginTop: '300px' }}>
                    <Container>
                        <Grid>
                            <Grid
                                container
                                spacing={8}
                            >
                                <Grid item md={12}>
                                    <Typography sx={{ fontSize: '30px', fontWeight: '600' }}>
                                        About Talent Hustle
                                    </Typography>
                                    <Typography sx={{ fontSize: '17px', marginTop: '20px' }}>
                                        At TalentHustle, we understand the challenges that both
                                        job seekers and employers face in today's competitive
                                        job market. That's why we've created a user-friendly
                                        platform that is easy to navigate and offers a wide
                                        range of features to help both parties achieve their goals.
                                    </Typography>
                                    <Typography sx={{ fontSize: '17px', marginTop: '20px' }}>
                                        For job seekers, our platform offers a number of benefits,
                                        including the ability to create a customized profile, search
                                        for job openings based on their specific preferences and
                                        qualifications, and schedule interviews with employers directly
                                        through our website. We also offer a wealth of resources to help
                                        job seekers improve their resumes, cover letters, and interviewing
                                        skills, so they can put their best foot forward during the hiring process.
                                    </Typography>
                                    <Typography sx={{ fontSize: '17px', marginTop: '20px', marginBottom: '20px' }}>
                                        For employers, our platform provides access to a pool of highly qualified
                                        candidates from around the world, along with tools to streamline the hiring
                                        process, including automated interview scheduling, candidate screening,
                                        and applicant tracking. Our platform is also designed to help employers
                                        build their brand and attract top talent through targeted advertising
                                        and employer branding features.
                                    </Typography>
                                    <Typography sx={{ fontSize: '30px', fontWeight: '600' }}>
                                        Mission
                                    </Typography>
                                    <Typography sx={{ fontSize: '17px', marginTop: '10px' }}>
                                        We think everyone should be able to progress toward a profession
                                        that provides them a sense of direction.
                                    </Typography>
                                    <Typography sx={{ fontSize: '17px', marginTop: '10px' }}>
                                        TalenHustle's goal is to create personal success for everyone
                                        as a result. Despite of history or starting place, we seek to
                                        give the tools and opportunities that will allow everyone to
                                        find purpose and worth in their work.
                                    </Typography>
                                    <Typography sx={{ fontSize: '17px', marginTop: '10px' }}>
                                        Because more successful matches between job seekers and employers benefit everyone.
                                    </Typography>
                                </Grid>
                                <Grid item md={0}>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                {/* <Grid sx={{ backgroundColor: '#453D83', padding: '20px 0px' }}>
                    <Grid sx={{ textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '30px', color: 'white', fontWeight: '600', letterSpacing: '2px' }}>
                            HAVE A QUESTION?
                        </Typography>
                        <Typography sx={{ fontSize: '15px', color: 'white', fontWeight: '600', marginTop: '10px' }}>
                            We are here to help. Email us or call +8801690134270
                        </Typography>
                        <Button variant='contained' style={{
                            color: 'black', fontWeight: '600', marginTop: '20px', fontSize: '17px', borderRadius: '10px', backgroundColor: '#FFFFFF', width: '250px', ':hover': {
                                bgcolor: '#FFFFFF',
                                color: 'black',
                            }
                        }}>
                            Contact Us
                        </Button>
                    </Grid>
                </Grid> */}
                {
                    loading && <Loader />
                }
                {/* <Grid>
                    <Container>
                        <Grid sx={{ marginTop: '50px', marginBottom: '50px' }}>
                            <Grid sx={{ backgroundColor: '#FFFDFD', boxShadow: '6', padding: '40px 40px', borderRadius: '20px', backgroundImage: 'linear-gradient(to right, #9F37CE, #291F78)' }}>
                                <Grid
                                    container
                                    spacing={4}
                                    alignItems='center'
                                >
                                    <Grid item md={6}>
                                        <Grid>
                                            <Typography sx={{ fontSize: '30px', fontWeight: '600', letterSpacing: '5px', color: '#000000' }}>
                                                Never Want to Miss Any
                                            </Typography>
                                            <Typography sx={{ fontSize: '35px', fontWeight: '600', letterSpacing: '5px', color: '#291F78' }}>
                                                Job News?
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Grid
                                            container
                                            spacing={1}
                                        >
                                            <Grid item md={6}>
                                                <TextField
                                                    sx={{
                                                        color: 'white', width: '100%', borderRadius: '10px', backgroundColor: 'white', [`& fieldset`]: {
                                                            borderRadius: '10px',
                                                        },
                                                    }}
                                                    value={newsEmail}
                                                    onChange={newsEmailChange}
                                                    placeholder='Email'
                                                    variant="outlined"
                                                    size='small'
                                                />
                                            </Grid>
                                            <Grid item md={6}>
                                                <Button variant='contained'
                                                    onClick={hanldeNews}
                                                    style={{
                                                        color: 'white', fontSize: '17px', borderRadius: '15px', backgroundColor: '#291F78', width: '100%', ':hover': {
                                                            bgcolor: '#291F78',
                                                            color: 'white',
                                                        }
                                                    }}>
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid> */}
            </Grid>
            <Footer />
            {
                open && <Message open={open} onclose={handleClose} message={message} />
            }
        </>
    );
};

export default About;