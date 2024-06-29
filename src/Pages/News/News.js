import { Avatar, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import news from '../../Images/News/news.jpg';
import news1 from '../../Images/new/news1.png';
import news2 from '../../Images/new/news2.png';
import news3 from '../../Images/new/news3.jpg';
import person from '../../Images/News/men.jpg';
import { FaCommentAlt } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { TbArrowBigRightFilled } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputAdornment, createStyles, makeStyles } from '@material-ui/core';
import adobe from '../../Images/News/adobe.png';
import adm from '../../Images/News/adm.png';
import stripe from '../../Images/News/stripe.png';
import amd from '../../Images/News/amd.png';

const useStyles = makeStyles(() => {
    return createStyles({
        search: {
            margin: "0",
            width: '100%'
        }
    });
});

const News = () => {
    const navigate = useNavigate();
    const { search } = useStyles();
    const [showClearIcon, setShowClearIcon] = useState("none");

    const handleChange = (event) => {
        setShowClearIcon(event.target.value === "" ? "none" : "flex");
    };

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch(`https://talent-hustle-server.vercel.app/job`, {
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data);
    //         })
    // }, []);

    // console.log(data);


    return (
        <>
            <Navigation />
            <Grid>
                <Grid>
                    <Grid>
                        <img style={{ width: '100%', height: '450px', }} src={news} alt="Banner" />
                    </Grid>
                    <Grid marginTop='-300px'>
                        <Typography sx={{ fontSize: '30px', color: 'black', fontWeight: '600', textAlign: 'center', letterSpacing: '5px' }}>
                            News
                        </Typography>
                        <Typography sx={{ fontSize: '15px', color: 'black', fontWeight: '600', textAlign: 'center' }}>
                            LATEST NEWS MADE FROM BEST AUTHOR
                        </Typography>
                    </Grid>
                </Grid>
                <Grid sx={{ marginTop: '300px' }}>
                    <Container>
                        <Grid
                            container
                            spacing={4}
                        >
                            <Grid item md={12}>
                                <Grid>
                                    <Typography sx={{ fontSize: '25px', fontWeight: '600' }}>
                                        Latest News
                                    </Typography>
                                    <Grid sx={{ marginBottom: '30px' }}>
                                        <Grid>
                                            <img style={{ width: '100%', height: '280px', }} src={news1} alt="Banner" />
                                        </Grid>
                                        <Grid sx={{ marginTop: '-80px' }}>
                                            <Typography sx={{ fontSize: '18px', color: 'black', fontWeight: '600', letterSpacing: '5px', padding: '0px 30px' }}>
                                                HOW TO TURN REVIEWS INTO REVENUE:
                                                MAKING THE MOST OF POSITIVE CUSTOMER FEEDBACK.
                                            </Typography>
                                        </Grid>
                                        <Grid sx={{ marginTop: '30px' }}>
                                            <Grid sx={{ borderRadius: '2px', boxShadow: '4' }}>
                                                <Grid sx={{ padding: '0px 10px' }}>
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
                                                                    <Grid
                                                                        display='flex'
                                                                        alignItems='center'
                                                                        gap={1}
                                                                    >
                                                                        <FaCommentAlt style={{ fontSize: '20px' }} />
                                                                        <Typography sx={{ fontSize: '15px' }}>
                                                                            0 Comment
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                                <Grid item md={4}>
                                                                    <Grid
                                                                        display='flex'
                                                                        alignItems='center'
                                                                        gap={1}
                                                                    >
                                                                        <FaCalendarAlt style={{ fontSize: '20px' }} />
                                                                        <Typography sx={{ fontSize: '15px' }}>
                                                                            22 May 2023
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item md={4}>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid
                                                        container
                                                        spacing={4}
                                                    >
                                                        <Grid item md={12}>
                                                            <Grid sx={{ padding: '20px 20px 20px 20px', marginBottom: '20px' }}>
                                                                <Grid sx={{ border: '1px solid gray', borderRadius: '10px', boxShadow: '2' }}>
                                                                    <Grid sx={{ padding: '10px !important' }}>
                                                                        <Typography sx={{ fontSize: '12px', marginBottom: '5px' }}>
                                                                            Morbi cursus libero at odio elementum consectetur. Vestibulum eleifend eros euismod rhoncus fringilla. Phasellus venenatis
                                                                            dignissim mauris sed cursus. In sed lorem quis libero egestas congue sit amet vitae nisl. Suspendisse ultricies mauris vitae
                                                                            sollicitudin posuere. Praesent non lobortis ligula. Phasellus sed euismod diam, sed efficitur diam. Donec maximus, nisi…...
                                                                        </Typography>
                                                                        <Link to='news-details' style={{ textDecoration: 'none', fontSize: '12px', fontWeight: '600' }} >View Post</Link>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item md={0}></Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ marginBottom: '30px' }}>
                                        <Grid>
                                            <img style={{ width: '100%', height: '280px', }} src={news2} alt="Banner" />
                                        </Grid>
                                        <Grid sx={{ marginTop: '-80px' }}>
                                            <Typography sx={{ fontSize: '18px', color: 'black', fontWeight: '600', letterSpacing: '5px', padding: '0px 30px' }}>
                                                ARE RETAILERS LOSING CONTROL OF THE CUSTOMER JOURNEY
                                                TO PERVASIVE SOCIAL PLATFORMS?
                                            </Typography>
                                        </Grid>
                                        <Grid sx={{ marginTop: '30px' }}>
                                            <Grid sx={{ borderRadius: '2px', boxShadow: '4' }}>
                                                <Grid sx={{ padding: '0px 10px' }}>
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
                                                                    <Grid
                                                                        display='flex'
                                                                        alignItems='center'
                                                                        gap={1}
                                                                    >
                                                                        <FaCommentAlt style={{ fontSize: '20px' }} />
                                                                        <Typography sx={{ fontSize: '15px' }}>
                                                                            0 Comment
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                                <Grid item md={4}>
                                                                    <Grid
                                                                        display='flex'
                                                                        alignItems='center'
                                                                        gap={1}
                                                                    >
                                                                        <FaCalendarAlt style={{ fontSize: '20px' }} />
                                                                        <Typography sx={{ fontSize: '15px' }}>
                                                                            22 May 2023
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item md={4}>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid
                                                        container
                                                        spacing={4}
                                                    >
                                                        <Grid item md={12}>
                                                            <Grid sx={{ padding: '20px 20px 20px 20px', marginBottom: '20px' }}>
                                                                <Grid sx={{ border: '1px solid gray', borderRadius: '10px', boxShadow: '2' }}>
                                                                    <Grid sx={{ padding: '10px !important' }}>
                                                                        <Typography sx={{ fontSize: '12px', marginBottom: '5px' }}>
                                                                            Morbi cursus libero at odio elementum consectetur. Vestibulum eleifend eros euismod rhoncus fringilla. Phasellus venenatis
                                                                            dignissim mauris sed cursus. In sed lorem quis libero egestas congue sit amet vitae nisl. Suspendisse ultricies mauris vitae
                                                                            sollicitudin posuere. Praesent non lobortis ligula. Phasellus sed euismod diam, sed efficitur diam. Donec maximus, nisi…...
                                                                        </Typography>
                                                                        <Link to='#' style={{ textDecoration: 'none', fontSize: '12px', fontWeight: '600' }} >View Post</Link>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item md={0}></Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ marginBottom: '30px' }}>
                                        <Grid>
                                            <img style={{ width: '100%', height: '280px', }} src={news3} alt="Banner" />
                                        </Grid>
                                        <Grid sx={{ marginTop: '-80px' }}>
                                            <Typography sx={{ fontSize: '18px', color: 'black', fontWeight: '600', letterSpacing: '5px', padding: '0px 30px' }}>
                                                HOW TO TURN REVIEWS INTO REVENUE:
                                                MAKING THE MOST OF POSITIVE CUSTOMER FEEDBACK.
                                            </Typography>
                                        </Grid>
                                        <Grid sx={{ marginTop: '30px' }}>
                                            <Grid sx={{ borderRadius: '2px', boxShadow: '4' }}>
                                                <Grid sx={{ padding: '0px 10px' }}>
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
                                                                    <Grid
                                                                        display='flex'
                                                                        alignItems='center'
                                                                        gap={1}
                                                                    >
                                                                        <FaCommentAlt style={{ fontSize: '20px' }} />
                                                                        <Typography sx={{ fontSize: '15px' }}>
                                                                            0 Comment
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                                <Grid item md={4}>
                                                                    <Grid
                                                                        display='flex'
                                                                        alignItems='center'
                                                                        gap={1}
                                                                    >
                                                                        <FaCalendarAlt style={{ fontSize: '20px' }} />
                                                                        <Typography sx={{ fontSize: '15px' }}>
                                                                            22 May 2023
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item md={4}>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid
                                                        container
                                                        spacing={4}
                                                    >
                                                        <Grid item md={12}>
                                                            <Grid sx={{ padding: '20px 20px 20px 20px', marginBottom: '20px' }}>
                                                                <Grid sx={{ border: '1px solid gray', borderRadius: '10px', boxShadow: '2' }}>
                                                                    <Grid sx={{ padding: '10px !important' }}>
                                                                        <Typography sx={{ fontSize: '12px', marginBottom: '5px' }}>
                                                                            Morbi cursus libero at odio elementum consectetur. Vestibulum eleifend eros euismod rhoncus fringilla. Phasellus venenatis
                                                                            dignissim mauris sed cursus. In sed lorem quis libero egestas congue sit amet vitae nisl. Suspendisse ultricies mauris vitae
                                                                            sollicitudin posuere. Praesent non lobortis ligula. Phasellus sed euismod diam, sed efficitur diam. Donec maximus, nisi…...
                                                                        </Typography>
                                                                        <Link to='#' style={{ textDecoration: 'none', fontSize: '12px', fontWeight: '600' }} >View Post</Link>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item md={0}></Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={0}>
                                {/* <Grid>
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
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default News;