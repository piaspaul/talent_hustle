import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import contact from '../../Images/contact33.png'
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Component/Loader/Loader';
import Message from '../../Component/Message/Message';

const ContactUs = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        navigate(`/contact`);
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

    const handleClick = () => {

    }
    return (
        <Grid>
            <>
                <Navigation />
                <Grid>
                    <Grid>
                        <Grid>
                            <img style={{ width: '100%', height: '450px', }} src={contact} alt="Banner" />
                        </Grid>
                        <Grid marginTop='-280px'>
                            <Typography sx={{ fontSize: '30px', color: 'black', fontWeight: '600', textAlign: 'center', letterSpacing: '5px' }}>
                                Contact Us
                            </Typography>
                            <Typography sx={{ fontSize: '15px', color: 'black', fontWeight: '600', textAlign: 'center' }}>
                                Feel free any queries contact with us
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid sx={{ marginTop: '250px' }}>
                        <Container>
                            <Grid>
                                <Grid
                                    container
                                    spacing={4}
                                >
                                    <Grid item md={2}>
                                    </Grid>
                                    <Grid item md={4}>
                                        <Grid>
                                            <Grid sx={{ backgroundColor: '#291F78', textAlign: 'center', padding: '5px 0px' }}>
                                                <Typography sx={{ fontSize: '20px', color: 'white' }}>
                                                    Quick Contact
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{ backgroundColor: '#B0ACAC', padding: '10px 20px' }}>
                                                <Grid sx={{ marginTop: '20px', marginBottom: '20px' }}>
                                                    <Grid sx={{ marginBottom: '30px' }}>
                                                        <Typography sx={{ fontSize: '12px', fontWeight: '600', color: '#000000' }}>
                                                            If you have any questions simply use
                                                            the following contact details.
                                                        </Typography>
                                                    </Grid>
                                                    <Grid>
                                                        <Typography sx={{ fontSize: '18px', fontWeight: '600', color: '#291F78' }}>
                                                            Address
                                                        </Typography>
                                                        <Typography sx={{ fontSize: '12px', fontWeight: '600', color: '#000000' }}>
                                                            Banani
                                                        </Typography>
                                                        <Typography sx={{ fontSize: '12px', fontWeight: '600', color: '#000000' }}>
                                                            Suite 13 Road
                                                        </Typography>
                                                        <Typography sx={{ fontSize: '12px', fontWeight: '600', color: '#000000' }}>
                                                            Dhaka, Bangladesh
                                                        </Typography>
                                                    </Grid>
                                                    <Grid sx={{ marginTop: '10px' }}>
                                                        <Typography sx={{ fontSize: '18px', fontWeight: '600', color: '#291F78' }}>
                                                            Email
                                                        </Typography>
                                                        <Typography sx={{ fontSize: '12px', fontWeight: '600', color: '#000000' }}>
                                                            talenthustle111@gmail.com
                                                        </Typography>
                                                    </Grid>
                                                    <Grid sx={{ marginTop: '10px' }}>
                                                        <Typography sx={{ fontSize: '18px', fontWeight: '600', color: '#291F78' }}>
                                                            Call
                                                        </Typography>
                                                        <Typography sx={{ fontSize: '12px', fontWeight: '600', color: '#000000' }}>
                                                            +8801690134270
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={4}>
                                        <Grid>
                                            <Grid sx={{ backgroundColor: '#291F78', textAlign: 'center', padding: '5px 0px' }}>
                                                <Typography sx={{ fontSize: '20px', color: 'white' }}>
                                                    CONTACT RECRUITMENT
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{ backgroundColor: '#B0ACAC', padding: '10px 20px' }}>
                                                <Grid>
                                                    <Grid>
                                                        <TextField
                                                            sx={{
                                                                color: 'white', width: '100%', borderRadius: '5px', marginTop: '8px', backgroundColor: 'white', [`& fieldset`]: {
                                                                    borderRadius: 'px',
                                                                },
                                                            }}
                                                            value={name}
                                                            onChange={nameChange}
                                                            placeholder='Name'
                                                            variant="outlined"
                                                            size='small'
                                                        />
                                                    </Grid>
                                                    <Grid>
                                                        <TextField
                                                            sx={{
                                                                color: 'white', width: '100%', borderRadius: '5px', marginTop: '8px', backgroundColor: 'white', [`& fieldset`]: {
                                                                    borderRadius: 'px',
                                                                },
                                                            }}
                                                            value={email}
                                                            onChange={emailChange}
                                                            placeholder='Email'
                                                            variant="outlined"
                                                            size='small'
                                                        />
                                                    </Grid>
                                                    <Grid>
                                                        <TextField
                                                            sx={{
                                                                color: 'white', width: '100%', borderRadius: '5px', marginTop: '8px', backgroundColor: 'white', [`& fieldset`]: {
                                                                    borderRadius: 'px',
                                                                },
                                                            }}
                                                            value={messages}
                                                            onChange={messagesChange}
                                                            placeholder='Message'
                                                            variant="outlined"
                                                            rows={5}
                                                            multiline
                                                            size='small'
                                                        />
                                                    </Grid>
                                                    <Grid sx={{ marginTop: '20px' }}>
                                                        <Button variant='contained'
                                                            onClick={hanldeContact}
                                                            style={{
                                                                color: 'white', fontSize: '17px', borderRadius: '10px', backgroundColor: '#291F78', width: '100%', ':hover': {
                                                                    bgcolor: '#291F78',
                                                                    color: 'white',
                                                                }
                                                            }}>
                                                            SEND MESSAGE
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={2}>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                    {
                        loading && <Loader />
                    }
                    <Grid sx={{ backgroundColor: '#453D83', padding: '20px 0px', marginTop: '50px' }}>
                        <Grid sx={{ textAlign: 'center' }}>
                            <Typography sx={{ fontSize: '30px', color: 'white', fontWeight: '600', letterSpacing: '2px' }}>
                                HAVE A QUESTION?
                            </Typography>
                            <Typography sx={{ fontSize: '15px', color: 'white', fontWeight: '600', marginTop: '10px', marginBottom: '20px' }}>
                                We are here to help. Email us or call +8801690134270
                            </Typography>
                            {/* <Button variant='contained' style={{
                                color: 'black', fontWeight: '600', marginTop: '20px', fontSize: '17px', borderRadius: '10px', backgroundColor: '#FFFFFF', width: '250px', ':hover': {
                                    bgcolor: '#FFFFFF',
                                    color: 'black',
                                }
                            }}>
                                Contact Us
                            </Button> */}
                            <a style={{
                                textDecoration: 'none', color: 'black', padding: '10px 20px', fontWeight: '700', fontSize: '17px', borderRadius: '10px', backgroundColor: '#FFFFFF', width: '250px', ':hover': {
                                    bgcolor: '#FFFFFF',
                                    color: 'black',
                                }
                            }} className='btn' target="_blank" href="mailto:info@trektil.com" rel="noreferrer">Contact Us</a>
                        </Grid>
                    </Grid>
                    <Grid>
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
                    </Grid>
                </Grid>
                <Footer />
                {
                    open && <Message open={open} onclose={handleClose} message={message} />
                }
            </>
        </Grid>
    );
};

export default ContactUs;