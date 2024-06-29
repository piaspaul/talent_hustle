import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AiOutlineEye } from "react-icons/ai";
import { AiFillPrinter } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Message from '../../../Component/Message/Message';
import Loader from '../../../Component/Loader/Loader';

const ManageResume = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

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


    const [applyInfo, setApplyInfo] = useState([]);
    useEffect(() => {
        if (userData?.email) {
            // setLoading(true);
            fetch(`https://talent-hustle-server.vercel.app/apply/${userData?.email}`, {
            })
                .then(res => res.json())
                .then(data => {
                    setApplyInfo(data);
                    // setLoading(false);
                })
        }
    }, [applyInfo, userData?.email]);
    // console.log(userData);
    // console.log(applyInfo);
    const [time, setTime] = useState('');
    const [meeting, setMeeting] = useState('');
    const meetingChange = (e, value) => {
        setTime(value);
        // console.log(value);
        setMeeting(e.target.value);
    }
    const [id, setId] = useState('');
    const [roomId, setRoomId] = useState('');
    const roomIdChange = (e, value) => {
        setId(value);
        setRoomId(e.target.value);
    };

    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        navigate(`/company-dashboard/dashboard`);
    };

    const handleOpen = () => {
        setOpen(true);
        setTimeout(() => handleClose(), 3000);
    };


    const hanldeMeeting = async (data, e) => {
        // onCloseModal();
        // console.log(data);
        let ebody = `
        <b> Job Title : </b>${data?.title ? data?.title : ''}
        <br />
        <b> Meeting Link : </b>https://talent-hustle-video.netlify.app/room/${roomId}
        <br />
        <b> Meeting Time : </b> ${meeting}
        <br />


        `

        const info = {
            'email': data?.email,
            'title': data?.title,
            'meeting': meeting,
            'meetingLink': `https://talent-hustle-video.netlify.app/room/${roomId}`,
        }

        window.Email.send({
            SecureToken: "bccefa6a-867c-4efb-9dcf-e35589cc9f03",
            To: data?.email,
            From: 'talenthustle111@gmail.com',
            Subject: "Regarding Job Interview",
            Body: ebody
        }).then(
            // message => alert(message)
        );

        try {
            setLoading(true);
            const response = await fetch(`https://talent-hustle-server.vercel.app/meeting`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(info),
            });
            const result = await response.json();
            setLoading(true);
            if (result.message === 'Successful') {
                setMeeting('');
                setRoomId('');
                const addonMessage = {
                    message: 'Successfully Submit Meeting Information.'
                };
                setMessage(addonMessage);
                handleOpen();
                setLoading(false);
            }
            else if (result.message === 'Failed') {
                setMeeting('');
                setRoomId('');
                const addonMessage = {
                    message: 'Failed to submit meeting information!!! Try Again...'
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
            <Grid>
                <Grid sx={{ marginTop: '50px', marginBottom: '150px' }}>
                    <Grid sx={{ backgroundColor: '#291F78', textAlign: 'center', padding: '10px 0px', marginBottom: '50px' }}>
                        <Typography sx={{ fontSize: '20px', color: 'white' }}>
                            Candidates Resume List
                        </Typography>
                    </Grid>
                    {
                        loading && <Loader />
                    }
                    <Grid>
                        {
                            applyInfo.map(info => <Grid key={info?._id} sx={{ marginTop: '20px' }}>
                                <Grid sx={{ boxShadow: '4', padding: '20px', borderRadius: '10px' }}>
                                    <Grid
                                        container
                                        spacing={4}
                                        alignItems='center'
                                    >
                                        <Grid item md={6}>
                                            <Grid>
                                                <Typography sx={{ fontSize: '25px', fontWeight: '600' }}>
                                                    {info?.name}
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                display='flex'
                                                alignItems='center'
                                            >
                                                <Typography sx={{ fontSize: '17px', fontWeight: '600', marginRight: '100px' }}>
                                                    Email : {info?.email}
                                                </Typography>
                                                <Typography sx={{ fontSize: '17px', fontWeight: '600' }}>
                                                    Number : {info?.number}
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{ fontSize: '17px', fontWeight: '600' }}>
                                                    Job Title : {info?.title}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item md={6}>
                                            <Grid
                                                display='flex'
                                                alignItems='center'
                                                justifyContent='flex-end'
                                            >
                                                <Grid sx={{ textAlign: 'center' }}>
                                                    {/* <IconButton
                                            // onClick={() => handleDetails(10078)}
                                            aria-label="Edit" sx={{ padding: '2px', borderRadius: '5px', backgroundColor: '', border: '2px solid #ED4C78' }}>
                                            <AiOutlineEye style={{ fontSize: '25px', color: '#ED4C78' }} />
                                        </IconButton> */}
                                                    <Button variant='contained' component="label">
                                                        <a href={info?.cv} style={{ textDecoration: 'none', }} target="_blank" download rel="noreferrer">
                                                            Download
                                                        </a>
                                                    </Button>
                                                </Grid>
                                                {/* <Grid sx={{ textAlign: 'center', marginLeft: '20px' }}>
                                                <IconButton aria-label="Edit" sx={{ padding: '2px', borderRadius: '5px', backgroundColor: '', border: '2px solid #00C9DB' }}>
                                                    <AiFillPrinter style={{ fontSize: '25px', color: '#00C9DB' }} />
                                                </IconButton>
                                            </Grid> */}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        spacing={4}
                                        alignItems='center'
                                        paddingTop='10px'
                                    >
                                        <Grid item md={2}>
                                            <Button variant='contained' component="label">
                                                <a href='https://talent-hustle-video.netlify.app/' style={{ textDecoration: 'none', width: '100%' }} target="_blank" rel="noreferrer">
                                                    Open Meeting
                                                </a>
                                            </Button>
                                        </Grid>
                                        <Grid item md={4}>
                                            <TextField
                                                sx={{
                                                    color: 'white', width: '100%', borderRadius: '5px', marginTop: '8px', backgroundColor: 'white', [`& fieldset`]: {
                                                        borderRadius: 'px',
                                                    },
                                                }}
                                                value={time === info?._id ? meeting : ''}
                                                onChange={(e) => meetingChange(e, info?._id)}
                                                placeholder='Meeting Date & Time'
                                                variant="outlined"
                                                size='small'
                                            />
                                        </Grid>
                                        <Grid item md={2}>
                                            <TextField
                                                sx={{
                                                    color: 'white', width: '100%', borderRadius: '5px', marginTop: '8px', backgroundColor: 'white', [`& fieldset`]: {
                                                        borderRadius: 'px',
                                                    },
                                                }}
                                                value={id === info?._id ? roomId : ''}
                                                onChange={(e) => roomIdChange(e, info?._id)}
                                                placeholder='Room Id'
                                                variant="outlined"
                                                size='small'
                                            />
                                        </Grid>
                                        <Grid item md={4}>
                                            <Button variant='contained'
                                                onClick={() => hanldeMeeting(info)}
                                                style={{
                                                    color: 'white', fontSize: '17px', borderRadius: '10px', backgroundColor: '#291F78', width: '100%', ':hover': {
                                                        bgcolor: '#291F78',
                                                        color: 'white',
                                                    }
                                                }}>
                                                SEND Meeting Link
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            )
                        }
                    </Grid>
                </Grid>
            </Grid>
            {
                open && <Message open={open} onclose={handleClose} message={message} />
            }
        </>
    );
};

export default ManageResume;