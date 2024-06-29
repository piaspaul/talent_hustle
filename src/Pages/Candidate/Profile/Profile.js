import { Avatar, Badge, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../../Navigation/Navigation';
import Footer from '../../Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import adobe from '../../../Images/News/adobe.png';
import adm from '../../../Images/News/adm.png';
import stripe from '../../../Images/News/stripe.png';
import amd from '../../../Images/News/amd.png';
import { TbArrowBigRightFilled } from 'react-icons/tb';
import { IconButton, styled } from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from '@mui/icons-material/Person';
import './Profile.css';
import Message from '../../../Component/Message/Message';
import Loader from '../../../Component/Loader/Loader';

const Input = styled("input")({
    display: "none"
});

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 20,
    height: 20,
    border: '2px solid none',
    backgroundColor: '#2B6687'
}));

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}


const Profile = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const [number, setNumber] = useState('');
    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    };
    const [email, setEmail] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const [address, setAddress] = useState('');
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };


    const imagetypes = ['image/*'];
    const [image, setImage] = useState('');
    const [preview, setPreview] = useState(null);
    const [item, setItem] = useState({ image: '' });
    const [previewError, setPreviewError] = useState(null);
    const handleImageUpdate = (e) => {
        const selectFile = e.target.files[0];
        const image = convertToBase64(selectFile);
        setImage(image);
        // console.log(convertToBase64(selectFile));
        if (selectFile) {
            if (selectFile && selectFile.type.substr(0, 5) === 'image') {
                setPreview(URL.createObjectURL(selectFile));
                setPreviewError('')
            }
            else {
                // setImage(null);
                setPreview(null);
                setPreviewError('Please select valid image');
            }
        }
        else {
            setPreviewError('Select your file');
        }
    };
    // console.log(item);

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

    const [loading, setLoading] = useState(false);
    const [meetingInfo, setMeetingInfo] = useState([]);
    useEffect(() => {
        // setLoading(true);
        if (userData?.email) {
            fetch(`https://talent-hustle-server.vercel.app/meeting/${userData?.email}`, {
            })
                .then(res => res.json())
                .then(data => {
                    setMeetingInfo(data);
                    // setLoading(false);
                })
        }
    }, [meetingInfo, userData?.email]);
    // console.log(meetingInfo)

    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        navigate(`/profile`);
    };

    const handleOpen = () => {
        setOpen(true);
        setTimeout(() => handleClose(), 3000);
    };


    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        const info = {
            'name': name,
            'email': email,
            'number': number,
            'address': address,
            'image': image
        }
        try {
            setLoading(true);
            const response = await fetch(`https://talent-hustle-server.vercel.app/profile`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(info),
            });

            const result = await response.json();
            setLoading(true);
            if (result.message === 'Successful') {
                // localStorage.setItem('userInfo', JSON.stringify(result.data));
                const addonMessage = {
                    message: 'Successfully Update Profile Details.'
                };
                setMessage(addonMessage);
                handleOpen();
                setLoading(false);
            }
            else if (result.message === 'Failed') {
                const addonMessage = {
                    message: 'Failed to upload profile!!! Try Again...'
                };
                setMessage(addonMessage);
                handleOpen();
                setLoading(false);
            }
            // if (result) {
            //     // setLoading(false);
            //     navigate(`/profile`);
            // }
            // console.log("Success:", result);
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
                    <Container>
                        <Grid sx={{ marginTop: '50px' }}>
                            <Grid
                                container
                                spacing={4}
                            >
                                <Grid item md={7}>
                                    <Grid sx={{ borderRadius: '10px', boxShadow: '4' }}>
                                        <Grid sx={{ backgroundColor: '#B0AADC', borderRadius: '10px' }}>
                                            <Typography sx={{ fontSize: '17px', fontWeight: '600', padding: '10px 20px' }}>
                                                Profile Details
                                            </Typography>
                                        </Grid>
                                        <Grid sx={{ padding: '20px 20px' }}>
                                            <Grid
                                                paddingTop='10px'
                                                marginBottom='20px'
                                            >
                                                <Badge
                                                    overlap="circular"
                                                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                                    badgeContent={
                                                        <>
                                                            <label htmlFor="icon-button-file">
                                                                <Grid className="input-file">
                                                                    <Input
                                                                        onChange={handleImageUpdate}
                                                                        accept="image/*" id="icon-button-file" type="file" name="image" />
                                                                    {/* <FileBase64 multiple={false} type="file" accept="image/*" onDone={({ base64 }) => setItem({ ...item, image: base64 })} /> */}
                                                                </Grid>
                                                                <IconButton
                                                                    color="primary"
                                                                    aria-label="upload picture"
                                                                    component="span"
                                                                >
                                                                    <SmallAvatar>
                                                                        <EditIcon sx={{
                                                                            color: 'white', '&.MuiSvgIcon-root': {
                                                                                fontSize: '15px',
                                                                            },
                                                                        }} />
                                                                    </SmallAvatar>
                                                                </IconButton>
                                                            </label>
                                                        </>
                                                    }
                                                >
                                                    {
                                                        preview
                                                            ?
                                                            <img
                                                                src={preview}
                                                                alt='preview'
                                                                style={{ width: 100, height: 100, borderRadius: '50%', objectFit: "cover" }}
                                                                onClick={() => {
                                                                    setImage(null);
                                                                }}
                                                            />
                                                            :
                                                            <Avatar
                                                                sx={{
                                                                    width: 100, height: 100, backgroundColor: "#298BC257"
                                                                }}
                                                            >
                                                                <PersonIcon sx={{
                                                                    color: '#843434', '&.MuiSvgIcon-root': {
                                                                        fontSize: '40px',
                                                                    },
                                                                }} />
                                                            </Avatar>
                                                    }
                                                </Badge>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{ fontSize: '13px', marginTop: '15px' }}>
                                                    Full Name
                                                </Typography>
                                                <TextField
                                                    id="outlined-basic"
                                                    sx={{ width: '70%', }}
                                                    variant="outlined"
                                                    // placeholder='Full Name'
                                                    value={name}
                                                    onChange={handleNameChange}
                                                    type='text'
                                                    size='small'
                                                    name='fullName'
                                                />
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{ fontSize: '13px', marginTop: '15px' }}>
                                                    Phone
                                                </Typography>
                                                <TextField
                                                    id="outlined-basic"
                                                    sx={{ width: '70%', }}
                                                    variant="outlined"
                                                    // placeholder='Full Name'
                                                    value={number}
                                                    onChange={handleNumberChange}
                                                    type='text'
                                                    size='small'
                                                    name='phone'
                                                />
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{ fontSize: '13px', marginTop: '15px' }}>
                                                    Email
                                                </Typography>
                                                <TextField
                                                    id="outlined-basic"
                                                    sx={{ width: '70%', }}
                                                    variant="outlined"
                                                    // placeholder='Full Name'
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                    type='email'
                                                    size='small'
                                                    name='email'
                                                />
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{ fontSize: '13px', marginTop: '15px' }}>
                                                    Address
                                                </Typography>
                                                <TextField
                                                    id="outlined-basic"
                                                    sx={{ width: '70%', }}
                                                    variant="outlined"
                                                    // placeholder='Full Name'
                                                    value={address}
                                                    onChange={handleAddressChange}
                                                    type='email'
                                                    size='small'
                                                    name='email'
                                                />
                                            </Grid>
                                            <Grid>
                                                <Button
                                                    onClick={handleProfileUpdate}
                                                    sx={{ marginTop: '30px', backgroundColor: '#291F78', textTransform: 'none' }}
                                                    variant="contained"
                                                >
                                                    Save and Change
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={5}>
                                    <Grid sx={{ backgroundColor: '#B0AADC', borderRadius: '10px', marginBottom: '20px' }}>
                                        <Typography sx={{ fontSize: '17px', fontWeight: '600', padding: '10px 20px' }}>
                                            Join Meeting
                                        </Typography>
                                    </Grid>
                                    {
                                        meetingInfo.map((info) => <Grid key={info?._id} sx={{ marginBottom: '20px' }}>
                                            <Grid sx={{ marginBottom: '10px' }}>
                                                <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                                    Your Job Title : {info?.title}
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{ marginBottom: '10px' }}>
                                                <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                                    Your Meeting Time : {info?.meeting}
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Button variant='contained' component="label">
                                                    <a href={info?.meetingLink} style={{ textDecoration: 'none', }} target="_blank" download rel="noreferrer">
                                                        Join Meeting
                                                    </a>
                                                </Button>
                                            </Grid>
                                        </Grid>)
                                    }
                                </Grid>
                                <Grid item md={0}>
                                    {/* <Grid>
                                        <Grid>
                                            <Typography sx={{ fontSize: '25px', fontWeight: '600', marginBottom: '10px' }}>
                                                FEATURED JOB
                                            </Typography>
                                            <Grid sx={{ borderRadius: '10px', boxShadow: '4' }}>
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
                        </Grid>
                    </Container>
                </Grid>
                {
                    loading && <Loader />
                }
            </Grid>
            <Footer />
            {
                open && <Message open={open} onclose={handleClose} message={message} />
            }
        </>
    );
};

export default Profile;