import { Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import SearchIcon from '@mui/icons-material/Search';
import { GoLocation } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { AiFillUnlock } from 'react-icons/ai';
import { GrCurrency } from 'react-icons/gr';
import { FormControl, InputAdornment, createStyles, makeStyles } from '@material-ui/core';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../Component/Loader/Loader';


const useStyles = makeStyles(() => {
    return createStyles({
        search: {
            margin: "0"
        }
    });
});

const Jobs = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { search } = useStyles();
    const [showClearIcon, setShowClearIcon] = useState("none");
    // console.log(location.state);

    const handleChange = (event) => {
        setShowClearIcon(event.target.value === "" ? "none" : "flex");
    };

    const handleButton = (id) => {
        navigate(`/job-details/${id}`);
        // console.log(id);
    }

    const [loading, setLoading] = useState(false);
    const [jobInfo, setJobInfo] = useState([]);
    // useEffect(() => {
    //     setLoading(true);
    //     fetch(`https://talent-hustle-server.vercel.app/search/?title=${location.state.title}&location=${location.state.locationInfo}`, {
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setJobInfo(data);
    //             setLoading(false);
    //         })
    // }, []);
    useEffect(() => {
        setLoading(true);
        fetch(`https://talent-hustle-server.vercel.app/search/${location.state.title}&${location.state.locationInfo}`, {
        })
            .then(res => res.json())
            .then(data => {
                setJobInfo(data);
                setLoading(false);
            })
    }, []);
    // console.log(jobInfo);


    return (
        <>
            <Navigation />
            <Grid>
                <Grid>
                    <Container>
                        <Grid>
                            <Typography sx={{ fontSize: '24px', fontWeight: '700', marginTop: '50px', marginBottom: '-100px' }}>
                                Job Search Results
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            spacing={8}
                        >
                            <Grid item md={0}>
                            </Grid>
                            <Grid item md={12}>
                                <Grid sx={{ marginTop: '30px' }}>
                                    <Grid sx={{ border: '1px solid #F3F4F9', boxShadow: '1', borderRadius: '10px', marginBottom: '30px' }}>
                                        <Grid sx={{ padding: '20px 20px' }}>
                                            {
                                                jobInfo.length !== 0 ?
                                                    <>
                                                        {
                                                            jobInfo.map((info) =>
                                                                <Grid
                                                                    key={info?._id}
                                                                    container
                                                                    spacing={4}
                                                                    alignItems='center'
                                                                    marginBottom='50px'
                                                                >
                                                                    <Grid item md={8}>
                                                                        <Grid>
                                                                            <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                                                                {info?.title}
                                                                            </Typography>
                                                                            <Grid
                                                                                container
                                                                                spacing={4}
                                                                                marginBottom='10px'
                                                                            >
                                                                                <Grid item md={6}>
                                                                                    <Grid
                                                                                        display='flex'
                                                                                        alignItems='center'
                                                                                    >
                                                                                        <GoLocation style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                                        <Typography sx={{ fontSize: '15px' }}>
                                                                                            {info?.location}
                                                                                        </Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                                <Grid item md={6}>
                                                                                    <Grid
                                                                                        display='flex'
                                                                                        alignItems='center'
                                                                                    >
                                                                                        <BiTimeFive style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                                        <Typography sx={{ fontSize: '15px' }}>
                                                                                            {info?.jobType}
                                                                                        </Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                            </Grid>
                                                                            <Grid
                                                                                container
                                                                                spacing={4}
                                                                            >
                                                                                <Grid item md={6}>
                                                                                    <Grid
                                                                                        display='flex'
                                                                                        alignItems='center'
                                                                                    >
                                                                                        <AiFillUnlock style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                                        <Typography sx={{ fontSize: '15px' }}>
                                                                                            {info?.date}
                                                                                        </Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                                <Grid item md={6}>
                                                                                    <Grid
                                                                                        display='flex'
                                                                                        alignItems='center'
                                                                                    >
                                                                                        <GrCurrency style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                                        <Typography sx={{ fontSize: '15px' }}>
                                                                                            ${info?.minSalary} - {info?.maxSalary} Per month
                                                                                        </Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </Grid>
                                                                    </Grid>
                                                                    <Grid item md={4}>
                                                                        <Grid sx={{ textAlign: 'end', alignItems: 'center' }}>
                                                                            <Button
                                                                                onClick={() => handleButton(info?._id)}
                                                                                variant="contained"
                                                                            >
                                                                                View
                                                                            </Button>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                            )
                                                        }
                                                    </>
                                                    :
                                                    <>
                                                        <Grid sx={{ marginTop: '50px', marginBottom: '50px' }}>
                                                            <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                                                NO jobs are available in your search! Search something other...
                                                            </Typography>
                                                        </Grid>
                                                    </>
                                            }
                                        </Grid>
                                    </Grid>
                                    {/* <Grid sx={{ border: '1px solid #F3F4F9', boxShadow: '1', borderRadius: '10px', marginBottom: '30px' }}>
                                        <Grid sx={{ padding: '20px 20px' }}>
                                            <Grid
                                                container
                                                spacing={4}
                                                alignItems='center'
                                            >
                                                <Grid item md={8}>
                                                    <Grid>
                                                        <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                                            SALES & MARKETING COORDINATOR
                                                        </Typography>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                            marginBottom='10px'
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GoLocation style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        New York , Casborn
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <BiTimeFive style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        Full Time
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <AiFillUnlock style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        20/03/2023
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GrCurrency style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        $2000 - 2100 Per month
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item md={4}>
                                                    <Grid sx={{ textAlign: 'end', alignItems: 'center' }}>
                                                        <Button
                                                            onClick={() => handleButton(2)}
                                                            variant="contained"
                                                        >
                                                            View
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ border: '1px solid #F3F4F9', boxShadow: '1', borderRadius: '10px', marginBottom: '30px' }}>
                                        <Grid sx={{ padding: '20px 20px' }}>
                                            <Grid
                                                container
                                                spacing={4}
                                                alignItems='center'
                                            >
                                                <Grid item md={8}>
                                                    <Grid>
                                                        <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                                            SALES & MARKETING COORDINATOR
                                                        </Typography>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                            marginBottom='10px'
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GoLocation style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        New York , Casborn
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <BiTimeFive style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        Full Time
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <AiFillUnlock style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        20/03/2023
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GrCurrency style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        $2000 - 2100 Per month
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item md={4}>
                                                    <Grid sx={{ textAlign: 'end', alignItems: 'center' }}>
                                                        <Button
                                                            onClick={() => handleButton(3)}
                                                            variant="contained"
                                                        >
                                                            View
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ border: '1px solid #F3F4F9', boxShadow: '1', borderRadius: '10px', marginBottom: '30px' }}>
                                        <Grid sx={{ padding: '20px 20px' }}>
                                            <Grid
                                                container
                                                spacing={4}
                                                alignItems='center'
                                            >
                                                <Grid item md={8}>
                                                    <Grid>
                                                        <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                                            SALES & MARKETING COORDINATOR
                                                        </Typography>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                            marginBottom='10px'
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GoLocation style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        New York , Casborn
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <BiTimeFive style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        Full Time
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <AiFillUnlock style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        20/03/2023
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GrCurrency style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        $2000 - 2100 Per month
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item md={4}>
                                                    <Grid sx={{ textAlign: 'end', alignItems: 'center' }}>
                                                        <Button
                                                            onClick={() => handleButton(4)}
                                                            variant="contained"
                                                        >
                                                            View
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ border: '1px solid #F3F4F9', boxShadow: '1', borderRadius: '10px', marginBottom: '30px' }}>
                                        <Grid sx={{ padding: '20px 20px' }}>
                                            <Grid
                                                container
                                                spacing={4}
                                                alignItems='center'
                                            >
                                                <Grid item md={8}>
                                                    <Grid>
                                                        <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                                            SALES & MARKETING COORDINATOR
                                                        </Typography>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                            marginBottom='10px'
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GoLocation style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        New York , Casborn
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <BiTimeFive style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        Full Time
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <AiFillUnlock style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        20/03/2023
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GrCurrency style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        $2000 - 2100 Per month
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item md={4}>
                                                    <Grid sx={{ textAlign: 'end', alignItems: 'center' }}>
                                                        <Button
                                                            onClick={() => handleButton(5)}
                                                            variant="contained"
                                                        >
                                                            View
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ border: '1px solid #F3F4F9', boxShadow: '1', borderRadius: '10px', marginBottom: '30px' }}>
                                        <Grid sx={{ padding: '20px 20px' }}>
                                            <Grid
                                                container
                                                spacing={4}
                                                alignItems='center'
                                            >
                                                <Grid item md={8}>
                                                    <Grid>
                                                        <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                                            SALES & MARKETING COORDINATOR
                                                        </Typography>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                            marginBottom='10px'
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GoLocation style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        New York , Casborn
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <BiTimeFive style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        Full Time
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <AiFillUnlock style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        20/03/2023
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GrCurrency style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        $2000 - 2100 Per month
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item md={4}>
                                                    <Grid sx={{ textAlign: 'end', alignItems: 'center' }}>
                                                        <Button
                                                            onClick={() => handleButton(6)}
                                                            variant="contained"
                                                        >
                                                            View
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ border: '1px solid #F3F4F9', boxShadow: '1', borderRadius: '10px', marginBottom: '30px' }}>
                                        <Grid sx={{ padding: '20px 20px' }}>
                                            <Grid
                                                container
                                                spacing={4}
                                                alignItems='center'
                                            >
                                                <Grid item md={8}>
                                                    <Grid>
                                                        <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                                            SALES & MARKETING COORDINATOR
                                                        </Typography>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                            marginBottom='10px'
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GoLocation style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        New York , Casborn
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <BiTimeFive style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        Full Time
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <AiFillUnlock style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        20/03/2023
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GrCurrency style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        $2000 - 2100 Per month
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item md={4}>
                                                    <Grid sx={{ textAlign: 'end', alignItems: 'center' }}>
                                                        <Button
                                                            onClick={() => handleButton(7)}
                                                            variant="contained"
                                                        >
                                                            View
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ border: '1px solid #F3F4F9', boxShadow: '1', borderRadius: '10px', marginBottom: '30px' }}>
                                        <Grid sx={{ padding: '20px 20px' }}>
                                            <Grid
                                                container
                                                spacing={4}
                                                alignItems='center'
                                            >
                                                <Grid item md={8}>
                                                    <Grid>
                                                        <Typography sx={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                                                            SALES & MARKETING COORDINATOR
                                                        </Typography>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                            marginBottom='10px'
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GoLocation style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        New York , Casborn
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <BiTimeFive style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        Full Time
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <AiFillUnlock style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        20/03/2023
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    display='flex'
                                                                    alignItems='center'
                                                                >
                                                                    <GrCurrency style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                    <Typography sx={{ fontSize: '15px' }}>
                                                                        $2000 - 2100 Per month
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item md={4}>
                                                    <Grid sx={{ textAlign: 'end', alignItems: 'center' }}>
                                                        <Button
                                                            onClick={() => handleButton(8)}
                                                            variant="contained"
                                                        >
                                                            View
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                {
                    loading && <Loader />
                }
            </Grid>
            <Footer />
        </>
    );
};

export default Jobs;