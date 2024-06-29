import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { BsFillCalendarMinusFill } from 'react-icons/bs';
import { GrCurrency } from 'react-icons/gr';
import { TbPointFilled } from 'react-icons/tb';
import { GoLocation } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { AiFillUnlock } from 'react-icons/ai';
import location from '../../Images/Job/location.jpg';
import Modal from '@mui/material/Modal';
import FileBase64 from 'react-file-base64';
import Message from '../../Component/Message/Message';
import Loader from '../../Component/Loader/Loader';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const JobDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false)
    };

    const handleOpen = () => {
        setOpen(true);
        setTimeout(() => handleClose(), 3000);
        // message.message === 'Successfully Applied' ? navigate(`/`) : navigate(`/job-details/${id}`);
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

    //Modal
    const [opens, setOpens] = useState(false);

    const onOpenModal = () => {
        setOpens(true);
        // setTimeout(() => onCloseModal(), 3000);
    };
    const onCloseModal = () => {
        setOpens(false);
    };

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
    const [experience, setExperience] = useState('');
    const handleExperienceChange = (e) => {
        setExperience(e.target.value);
    };
    const [letter, setLetter] = useState('');
    const handleLetterChange = (e) => {
        setLetter(e.target.value);
    };

    const [loading, setLoading] = useState(false);
    const [jobInfo, setJobInfo] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch(`https://talent-hustle-server.vercel.app/search/${id}`, {
        })
            .then(res => res.json())
            .then(data => {
                setJobInfo(data);
                setLoading(false);
            })
    }, []);
    // console.log(jobInfo);

    const [url, setUrl] = React.useState('');
    const [item, setItem] = useState({ cv: '' });

    // Handle the `onChange` event of the `file` input
    const onChange = (e) => {
        const files = e.target.files;
        files.length > 0 && setUrl(URL.createObjectURL(files[0]));
        console.log(files);
    };
    // console.log(item);


    const hanldeApply = async (e) => {
        onCloseModal();
        const info = {
            'name': name,
            'email': userData?.email,
            'title': jobInfo?.title,
            'cvEmail': email,
            'companyEmail': jobInfo.companyEmail,
            'number': number,
            'letter': letter,
            'experience': experience,
            'cv': item?.cv
        }
        try {
            setLoading(true);
            const response = await fetch(`https://talent-hustle-server.vercel.app/apply`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(info),
            });
            const result = await response.json();
            setLoading(false);
            if (result.message === 'Successful') {
                setName('');
                setNumber('');
                setEmail('');
                setExperience('');
                setLetter('');
                const addonMessage = {
                    message: 'Successfully Applied'
                };
                setMessage(addonMessage);
                handleOpen();
                setLoading(false);
            }
            else if (result.message === 'Failed') {
                setName('');
                setNumber('');
                setEmail('');
                setExperience('');
                setLetter('');
                const addonMessage = {
                    message: 'Failed Application. Try again...'
                };
                setMessage(addonMessage);
                handleOpen();
                setLoading(false);
            }
            // console.log("Success:", result);
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
                                <Grid item md={8}>
                                    <Grid>
                                        <Grid>
                                            <Grid sx={{ marginBottom: '10px' }}>
                                                <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
                                                    JOB DETAILS
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{ border: '2px solid #F3F4F9', borderRadius: '10px' }}>
                                                <Grid sx={{ padding: '20px' }}>
                                                    <Grid>
                                                        <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
                                                            {jobInfo?.title}
                                                        </Typography>
                                                        <Typography sx={{ fontSize: '15px', marginBottom: '10px', marginTop: '5px' }}>
                                                            Job Type : {jobInfo?.jobCategory}
                                                        </Typography>
                                                        <Grid
                                                            container
                                                            spacing={4}
                                                            marginBottom='10px'
                                                        >
                                                            <Grid item md={6}>
                                                                <Grid
                                                                    container
                                                                    spacing={4}
                                                                >
                                                                    <Grid item md={6}>
                                                                        <Grid sx={{ backgroundColor: '#D9D9D9', padding: '3px 10px', borderRadius: '5px' }}>
                                                                            <Grid
                                                                                display='flex'
                                                                                alignItems='center'
                                                                                justifyContent='center'
                                                                            >
                                                                                <BsFillCalendarMinusFill style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                                                <Typography sx={{ fontSize: '13px' }}>
                                                                                    {jobInfo?.jobType}
                                                                                </Typography>
                                                                            </Grid>
                                                                        </Grid>
                                                                    </Grid>
                                                                    <Grid item md={6}>
                                                                        <Grid sx={{ backgroundColor: '#D9D9D9', padding: '3px 10px', borderRadius: '5px' }}>
                                                                            <Grid
                                                                                display='flex'
                                                                                alignItems='center'
                                                                                justifyContent='center'
                                                                            >
                                                                                <GrCurrency style={{ fontSize: '15px', marginBottom: '1px', marginRight: '5px' }} />
                                                                                <Typography sx={{ fontSize: '13px' }}>
                                                                                    ${jobInfo?.minSalary} - ${jobInfo?.maxSalary}
                                                                                </Typography>
                                                                            </Grid>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item md={6}></Grid>
                                                        </Grid>
                                                        {/* <Typography sx={{ fontSize: '15px', marginBottom: '10px' }}>
                                                            Posted : 30+ days ago 'Based on your profile'
                                                        </Typography> */}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        {/* <Grid>
                                            <Grid sx={{ marginTop: '20px' }}>
                                                <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
                                                    QUALIFICATION
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{ border: '2px solid #F3F4F9', borderRadius: '10px', marginTop: '10px' }}>
                                                <Grid sx={{ padding: '20px' }}>
                                                    <Grid>
                                                        <Grid
                                                            display='flex'
                                                            alignItems='center'
                                                            margin='10px 0px'
                                                        >
                                                            <TbPointFilled style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                            <Typography sx={{ fontSize: '15px' }}>
                                                                Work authorization (Required)
                                                            </Typography>
                                                        </Grid>
                                                        <Grid
                                                            display='flex'
                                                            alignItems='center'
                                                            margin='10px 0px'
                                                        >
                                                            <TbPointFilled style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                            <Typography sx={{ fontSize: '15px' }}>
                                                                Work authorization (Required)
                                                            </Typography>
                                                        </Grid>
                                                        <Grid
                                                            display='flex'
                                                            alignItems='center'
                                                            margin='10px 0px'
                                                        >
                                                            <TbPointFilled style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                            <Typography sx={{ fontSize: '15px' }}>
                                                                Work authorization (Required)
                                                            </Typography>
                                                        </Grid>
                                                        <Grid
                                                            display='flex'
                                                            alignItems='center'
                                                            margin='10px 0px'
                                                        >
                                                            <TbPointFilled style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                            <Typography sx={{ fontSize: '15px' }}>
                                                                Work authorization (Required)
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid> */}
                                        <Grid>
                                            <Grid sx={{ marginTop: '20px' }}>
                                                <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
                                                    FULL JOB DESCRIPTION
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{ border: '2px solid #F3F4F9', borderRadius: '10px', marginTop: '10px' }}>
                                                <Grid sx={{ padding: '20px' }}>
                                                    <Grid>
                                                        <Grid>
                                                            <Typography dangerouslySetInnerHTML={{__html: jobInfo?.description}} sx={{ fontSize: '15px' }}>
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={4}>
                                    <Grid sx={{ marginTop: '40px' }}>
                                        <Grid>
                                            <img style={{ width: '100%', height: '250px', marginBottom: '-5px' }} src={jobInfo?.image} alt="Banner" />
                                        </Grid>
                                        <Grid sx={{ backgroundColor: '#FFF', padding: '10px 20px' }}>
                                            <Grid sx={{ marginTop: '20px', marginBottom: '10px' }}>
                                                <Grid>
                                                    <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
                                                        {jobInfo?.companyName}
                                                    </Typography>
                                                </Grid>
                                                <Grid sx={{ marginTop: '10px' }}>
                                                    <Grid
                                                        display='flex'
                                                        alignItems='center'
                                                    >
                                                        <GoLocation style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                        <Typography sx={{ fontSize: '15px' }}>
                                                            {jobInfo?.location}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid sx={{ marginTop: '10px' }}>
                                                    <Grid
                                                        display='flex'
                                                        alignItems='center'
                                                    >
                                                        <BiTimeFive style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                        <Typography sx={{ fontSize: '15px' }}>
                                                            {jobInfo?.jobType}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid sx={{ marginTop: '10px' }}>
                                                    <Grid
                                                        display='flex'
                                                        alignItems='center'
                                                    >
                                                        <AiFillUnlock style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                        <Typography sx={{ fontSize: '15px' }}>
                                                            {jobInfo?.date}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid sx={{ marginTop: '10px' }}>
                                                    <Grid
                                                        display='flex'
                                                        alignItems='center'
                                                    >
                                                        <GrCurrency style={{ fontSize: '15px', marginBottom: '2px', marginRight: '5px' }} />
                                                        <Typography sx={{ fontSize: '15px' }}>
                                                            ${jobInfo?.minSalary} - {jobInfo?.maxSalary} Per month
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                {/* <Grid sx={{ marginTop: '30px', marginBottom: '20px' }}>
                                                    <Typography sx={{ fontSize: '15px' }}>
                                                        Lorem ipsum dolor sit amet consectetur.
                                                        Faucibus vel nibh turpis mi eget bibendum.
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '15px' }}>
                                                        Lorem ipsum dolor sit amet consectetur.
                                                        Faucibus vel nibh turpis mi eget bibendum.
                                                    </Typography>
                                                </Grid> */}
                                            </Grid>
                                        </Grid>
                                        <Grid sx={{ backgroundColor: '#291F78', textAlign: 'center', padding: '5px 0px' }}>
                                            <Button
                                                onClick={onOpenModal}
                                                variant='contained' style={{
                                                    color: 'white', textTransform: 'none', fontSize: '17px', borderRadius: '10px', backgroundColor: '#291F78', width: '100%', ':hover': {
                                                        bgcolor: '#291F78',
                                                        color: 'white',
                                                    }
                                                }}>
                                                Drop Your CV
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            {
                loading && <Loader />
            }
            <Footer />
            <Modal
                open={opens}
                onClose={onCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {
                    userData?.isCandidate === '1' ?
                        <>
                            <Box sx={style}>
                                <Typography sx={{ fontSize: '25px', fontWeight: '600', marginTop: '-20px', marginBottom: '20px' }}>
                                    Apply
                                </Typography>
                                <Grid>
                                    <Grid sx={{ marginTop: '10px' }}>
                                        <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                            Full Name
                                        </Typography>
                                        <TextField
                                            sx={{
                                                color: 'white', width: '100%', borderRadius: '5px', backgroundColor: 'white', [`& fieldset`]: {
                                                    borderRadius: '5px',
                                                },
                                            }}
                                            value={name}
                                            onChange={handleNameChange}
                                            placeholder='Enter your name'
                                            variant="outlined"
                                            size='small'
                                        />
                                    </Grid>
                                    <Grid sx={{ marginTop: '10px' }}>
                                        <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                            Email Address
                                        </Typography>
                                        <TextField
                                            sx={{
                                                color: 'white', width: '100%', borderRadius: '5px', backgroundColor: 'white', [`& fieldset`]: {
                                                    borderRadius: '5px',
                                                },
                                            }}
                                            value={email}
                                            onChange={handleEmailChange}
                                            placeholder='Enter your email'
                                            variant="outlined"
                                            size='small'
                                        />
                                    </Grid>
                                    <Grid sx={{ marginTop: '10px' }}>
                                        <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                            Cover Letter
                                        </Typography>
                                        <TextField
                                            sx={{
                                                color: 'white', width: '100%', borderRadius: '5px', backgroundColor: 'white', [`& fieldset`]: {
                                                    borderRadius: '5px',
                                                },
                                            }}
                                            value={letter}
                                            onChange={handleLetterChange}
                                            placeholder='Enter your cover letter'
                                            variant="outlined"
                                            multiline
                                            rows={3}
                                        />
                                    </Grid>
                                    <Grid sx={{ marginTop: '10px' }}>
                                        <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                            Phone Number
                                        </Typography>
                                        <TextField
                                            sx={{
                                                color: 'white', width: '100%', borderRadius: '5px', backgroundColor: 'white', [`& fieldset`]: {
                                                    borderRadius: '5px',
                                                },
                                            }}
                                            value={number}
                                            onChange={handleNumberChange}
                                            placeholder='Enter your number'
                                            variant="outlined"
                                            size='small'
                                        />
                                    </Grid>
                                    <Grid sx={{ marginTop: '10px' }}>
                                        <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                            Upload CV
                                        </Typography>
                                        <Grid sx={{ marginTop: '5px' }}>
                                            <FileBase64 multiple={false} type="file" onDone={({ base64 }) => setItem({ ...item, cv: base64 })} />
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ marginTop: '10px' }}>
                                        <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                            Additional Question
                                        </Typography>
                                        <TextField
                                            sx={{
                                                color: 'white', width: '100%', borderRadius: '5px', backgroundColor: 'white', [`& fieldset`]: {
                                                    borderRadius: '5px',
                                                },
                                            }}
                                            value={experience}
                                            onChange={handleExperienceChange}
                                            placeholder='How many years of experience ?'
                                            variant="outlined"
                                            size='small'
                                        />
                                    </Grid>
                                </Grid>
                                <Grid sx={{ marginTop: '30px' }}>
                                    <Button variant='contained'
                                        onClick={hanldeApply}
                                        style={{
                                            color: 'white', fontSize: '17px', backgroundColor: '#291F78', width: '100%', ':hover': {
                                                bgcolor: '#291F78',
                                                color: 'white',
                                            }
                                        }}>
                                        SUBMIT APPLICATION
                                    </Button>
                                </Grid>
                            </Box>
                        </>
                        :
                        <>
                            <Box sx={style}>
                                <Typography sx={{ fontSize: '24px', fontWeight: '600' }}>
                                    Please login as a candidate to apply this job!
                                </Typography>
                            </Box>
                        </>
                }
            </Modal>
            {
                open && <Message open={open} onclose={handleClose} message={message} />
            }
        </>
    );
};

export default JobDetails;