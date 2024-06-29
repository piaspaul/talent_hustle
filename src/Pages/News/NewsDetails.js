import { Avatar, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import about from '../../Images/About/about.png';
import { Link } from 'react-router-dom';
import { FormControl, InputAdornment, createStyles, makeStyles } from '@material-ui/core';
import adobe from '../../Images/News/adobe.png';
import adm from '../../Images/News/adm.png';
import stripe from '../../Images/News/stripe.png';
import amd from '../../Images/News/amd.png';
import SearchIcon from '@mui/icons-material/Search';
import news1 from '../../Images/News/news1.png';
import news2 from '../../Images/News/news2.png';
import person from '../../Images/News/men.jpg';
import { FaCommentAlt } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { TbArrowBigRightFilled } from 'react-icons/tb';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const useStyles = makeStyles(() => {
    return createStyles({
        search: {
            margin: "0",
            width: '100%'
        }
    });
});

const NewsDetails = () => {
    const { search } = useStyles();
    const [showClearIcon, setShowClearIcon] = useState("none");

    const handleChange = (event) => {
        setShowClearIcon(event.target.value === "" ? "none" : "flex");
    };

    return (
        <>
            <Navigation />
            <Grid>
                <Grid>
                    <Grid>
                        <img style={{ width: '100%', height: '450px', }} src={about} alt="Banner" />
                    </Grid>
                    <Grid marginTop='-150px'>
                        <Grid sx={{ marginLeft: '200px' }}>
                            <Typography sx={{ fontSize: '25px', color: 'black', fontWeight: '600', letterSpacing: '5px' }}>
                                How to turn reviews into revenue:
                            </Typography>
                            <Typography sx={{ fontSize: '25px', color: 'black', fontWeight: '600', letterSpacing: '5px' }}>
                                Making the most of positive customer feedback.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{ marginTop: '150px' }}>
                    <Container>
                        <Grid
                            container
                            spacing={4}
                        >
                            <Grid item md={8}>
                                <Grid>
                                    <Typography sx={{ fontSize: '25px', fontWeight: '600' }}>
                                        Latest News
                                    </Typography>
                                    <Grid sx={{ marginBottom: '30px' }}>
                                        <Grid>
                                            <img style={{ width: '100%', height: '280px', }} src={news1} alt="Banner" />
                                        </Grid>
                                        <Grid sx={{ marginTop: '5px' }}>
                                            <Grid sx={{ borderRadius: '2px', boxShadow: '4' }}>
                                                <Grid sx={{ padding: '0px 20px 20px 20px' }}>
                                                    <Grid
                                                        container
                                                        spacing={4}
                                                    >
                                                        <Grid item md={8}>
                                                            <Grid
                                                                container
                                                                spacing={4}
                                                                alignItems='center'
                                                            >
                                                                <Grid item md={4}>
                                                                    <Grid
                                                                        display='flex'
                                                                        alignItems='center'
                                                                        gap={1}
                                                                    >
                                                                        <Avatar alt="Remy Sharp" src={person} />
                                                                        <Typography sx={{ fontSize: '13px' }}>
                                                                            ADMINISTRATOR
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                                <Grid item md={4}>

                                                                </Grid>
                                                                <Grid item md={4}>

                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item md={4}>
                                                            <Grid sx={{ textAlign: 'end' }}>
                                                                <Typography sx={{ fontSize: '15px', fontWeight: '600', color: '#291F78' }}>
                                                                    Share
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ marginTop: '10px' }}>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                        >
                                                            <Grid item md={10}>
                                                                <Grid>
                                                                    <Typography sx={{ fontSize: '17px', fontWeight: '600' }}>
                                                                        HOW TO TURN REVIEWS INTO REVENUE:
                                                                        MAKING THE MOST OF POSITIVE CUSTOMER FEEDBACK.
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={2}>
                                                                <Grid sx={{ textAlign: 'end', marginTop: '30px' }}>
                                                                    <Typography sx={{ fontSize: '15px', color: '#291F78' }}>
                                                                        10 Days ago
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid sx={{ padding: '20px' }}>
                                                <Typography sx={{ fontSize: '15px', marginTop: '10px' }}>
                                                    Morbi cursus libero at odio elementum consectetur. Vestibulum eleifend eros euismod rhoncus fringilla.
                                                    Phasellus venenatis dignissim mauris sed cursus. In sed lorem quis libero egestas congue sit amet vitae
                                                    nisl. Suspendisse ultricies mauris vitae sollicitudin posuere.
                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', marginTop: '10px' }}>
                                                    Morbi cursus libero at odio elementum consectetur. Vestibulum eleifend eros euismod rhoncus fringilla.
                                                    Phasellus venenatis dignissim mauris sed cursus. In sed lorem quis libero egestas congue sit amet vitae
                                                    nisl. Suspendisse ultricies mauris vitae sollicitudin posuere.
                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', marginTop: '10px' }}>
                                                    Morbi cursus libero at odio elementum consectetur. Vestibulum eleifend eros euismod rhoncus fringilla.
                                                    Phasellus venenatis dignissim mauris sed cursus. In sed lorem quis libero egestas congue sit amet vitae
                                                    nisl. Suspendisse ultricies mauris vitae sollicitudin posuere.
                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', marginTop: '10px' }}>
                                                    Morbi cursus libero at odio elementum consectetur. Vestibulum eleifend eros euismod rhoncus fringilla.
                                                    Phasellus venenatis dignissim mauris sed cursus. In sed lorem quis libero egestas congue sit amet vitae
                                                    nisl. Suspendisse ultricies mauris vitae sollicitudin posuere.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={4}>
                                <Grid>
                                    <Grid>
                                        <Typography sx={{ fontSize: '25px', fontWeight: '600' }}>
                                            SEARCH
                                        </Typography>
                                        <Grid sx={{ width: '100%' }}>
                                            <FormControl className={search}>
                                                <TextField
                                                    size="small"
                                                    variant="outlined"
                                                    onChange={handleChange}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <SearchIcon />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid>
                                        <Typography sx={{ fontSize: '25px', fontWeight: '600', marginTop: '50px', marginBottom: '10px' }}>
                                            FEATURED JOB
                                        </Typography>
                                        <Grid sx={{ borderRadius: '10px', boxShadow: '1' }}>
                                            <Grid sx={{ padding: '20px' }}>
                                                <Grid>
                                                    <Grid
                                                        display='flex'
                                                        alignItems='center'
                                                        justifyContent='space-between'
                                                        marginBottom='20px'
                                                    >
                                                        <Grid
                                                            display='flex'
                                                            alignItems='center'
                                                            gap={2}
                                                        >
                                                            <Grid>
                                                                <img style={{ width: '55px', height: '50px', }} src={adobe} alt="Banner" />
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '2px' }}>
                                                                    Adobe Trick IT
                                                                </Typography>
                                                                <Typography sx={{ fontSize: '15px' }}>
                                                                    Executive Officer
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid>
                                                            <TbArrowBigRightFilled style={{ fontSize: '20px' }} />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid
                                                        display='flex'
                                                        alignItems='center'
                                                        justifyContent='space-between'
                                                        marginBottom='20px'
                                                    >
                                                        <Grid
                                                            display='flex'
                                                            alignItems='center'
                                                            gap={2}
                                                        >
                                                            <Grid>
                                                                <img style={{ width: '55px', height: '50px', }} src={adm} alt="Banner" />
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '2px' }}>
                                                                    AMD IT
                                                                </Typography>
                                                                <Typography sx={{ fontSize: '15px' }}>
                                                                    Executive Officer
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid>
                                                            <TbArrowBigRightFilled style={{ fontSize: '20px' }} />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid
                                                        display='flex'
                                                        alignItems='center'
                                                        justifyContent='space-between'
                                                        marginBottom='20px'
                                                    >
                                                        <Grid
                                                            display='flex'
                                                            alignItems='center'
                                                            gap={2}
                                                        >
                                                            <Grid>
                                                                <img style={{ width: '55px', height: '50px', }} src={stripe} alt="Banner" />
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '2px' }}>
                                                                    Stripe IT
                                                                </Typography>
                                                                <Typography sx={{ fontSize: '15px' }}>
                                                                    Mobile App Engineer
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid>
                                                            <TbArrowBigRightFilled style={{ fontSize: '20px' }} />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid
                                                        display='flex'
                                                        alignItems='center'
                                                        justifyContent='space-between'
                                                        marginBottom='20px'
                                                    >
                                                        <Grid
                                                            display='flex'
                                                            alignItems='center'
                                                            gap={2}
                                                        >
                                                            <Grid>
                                                                <img style={{ width: '55px', height: '50px', }} src={amd} alt="Banner" />
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '2px' }}>
                                                                    AMD IT
                                                                </Typography>
                                                                <Typography sx={{ fontSize: '15px' }}>
                                                                    Executive Officer
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid>
                                                            <TbArrowBigRightFilled style={{ fontSize: '20px' }} />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid
                                                        display='flex'
                                                        alignItems='center'
                                                        justifyContent='space-between'
                                                        marginBottom='20px'
                                                    >
                                                        <Grid
                                                            display='flex'
                                                            alignItems='center'
                                                            gap={2}
                                                        >
                                                            <Grid>
                                                                <img style={{ width: '55px', height: '50px', }} src={adobe} alt="Banner" />
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '2px' }}>
                                                                    Adobe Trick IT
                                                                </Typography>
                                                                <Typography sx={{ fontSize: '15px' }}>
                                                                    Executive Officer
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid>
                                                            <TbArrowBigRightFilled style={{ fontSize: '20px' }} />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid
                                                        display='flex'
                                                        alignItems='center'
                                                        justifyContent='space-between'
                                                    // marginBottom='20px'
                                                    >
                                                        <Grid
                                                            display='flex'
                                                            alignItems='center'
                                                            gap={2}
                                                        >
                                                            <Grid>
                                                                <img style={{ width: '55px', height: '50px', }} src={amd} alt="Banner" />
                                                            </Grid>
                                                            <Grid>
                                                                <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '2px' }}>
                                                                    AMD IT
                                                                </Typography>
                                                                <Typography sx={{ fontSize: '15px' }}>
                                                                    Executive Officer
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid>
                                                            <Link to='#' style={{ textDecoration: 'none', color: 'black' }}>
                                                                <TbArrowBigRightFilled style={{ fontSize: '20px' }} />
                                                            </Link>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Grid sx={{ backgroundColor: '#453D83', padding: '20px 0px' }}>
                    <Grid sx={{ textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '30px', color: 'white', fontWeight: '600', letterSpacing: '2px' }}>
                            HAVE A QUESTION?
                        </Typography>
                        <Typography sx={{ fontSize: '15px', color: 'white', fontWeight: '600', marginTop: '10px' }}>
                            We are here to help. Email us or call +44 534 643 2544
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
                                                    placeholder='Email'
                                                    variant="outlined"
                                                    size='small'
                                                />
                                            </Grid>
                                            <Grid item md={6}>
                                                <Button variant='contained' style={{
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
        </>
    );
};

export default NewsDetails;