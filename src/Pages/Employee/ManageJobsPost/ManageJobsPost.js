import { Button, FormControl, Grid, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FileBase64 from 'react-file-base64';
import Message from '../../../Component/Message/Message';
import Loader from '../../../Component/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const jobTypes = [
    {
        value: 'Part Time',
        label: 'Part-Time',
    },
    {
        value: 'Full Time',
        label: 'Full-Time',
    }
];
const jobCategories = [
    {
        value: 'Remote',
        label: 'Remote',
    },
    {
        value: 'On-Site',
        label: 'On-Site',
    }
];
const jobSkills = [
    {
        value: 'React',
        label: 'React',
    },
    {
        value: 'Node.Js',
        label: 'Node.Js',
    },
    {
        value: 'Django',
        label: 'Django',
    },
    {
        value: 'Redux',
        label: 'Redux',
    },
    {
        value: 'SEO',
        label: 'SEO',
    },
    {
        value: 'Programming',
        label: 'Programming',
    },
];

const ManageJobsPost = () => {

    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState('');
    const handleCompanyNameChange = (e) => {
        setCompanyName(e.target.value);
    };

    const [companyTitle, setCompanyTitle] = useState('');
    const handleCompanyTitleChange = (e) => {
        setCompanyTitle(e.target.value);
    };
    const [companyEmail, setCompanyEmail] = useState('');
    const handleCompanyEmailChange = (e) => {
        setCompanyEmail(e.target.value);
    };
    const [companyNumber, setCompanyNumber] = useState('');
    const handleCompanyNumberChange = (e) => {
        setCompanyNumber(e.target.value);
    };
    const [jobType, setJobType] = useState('');
    const handleJobTypeChange = (e) => {
        setJobType(e.target.value);
    };
    const [jobCategory, setJobcategory] = useState('');
    const handleJobCategoryChange = (e) => {
        setJobcategory(e.target.value);
    };
    const [experience, setExperience] = useState('');
    const handleExperienceChange = (e) => {
        setExperience(e.target.value);
    };
    const [location, setLocation] = useState('');
    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };
    const [minSalary, setMinSalary] = useState('');
    const handleMinSalaryChange = (e) => {
        setMinSalary(e.target.value);
    };
    const [maxSalary, setMaxSalary] = useState('');
    const handleMaxSalaryChange = (e) => {
        setMaxSalary(e.target.value);
    };
    const [jobSkill, setJobSkill] = useState([]);
    const handleJobSkillChange = (e) => {
        setJobSkill(e.target.value);
    };
    const [description, setDescription] = useState('');
    const handleDescriptionChange = (value) => {
        setDescription(value);
    };

    const [image, setImage] = useState({ logo: '' });


    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        navigate(`/company-dashboard/dashboard`);
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
    }, []);

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const hanldeJobPost = async (e) => {
        const info = {
            'companyName': companyName,
            'companyEmail': userData?.email,
            'title': companyTitle,
            'email': companyEmail,
            'number': companyNumber,
            'jobType': jobType,
            'jobCategory': jobCategory,
            'experience': experience,
            'location': location,
            'minSalary': minSalary,
            'maxSalary': maxSalary,
            'skils': jobSkill,
            'description': description,
            'image': image?.logo
        }
        try {
            setLoading(true);
            const response = await fetch(`https://talent-hustle-server.vercel.app/job`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(info),
            });
            const result = await response.json();
            // console.log(result);
            setLoading(false);
            if (result.message === 'Successful') {
                setCompanyName('');
                setCompanyTitle();
                setCompanyEmail();
                setCompanyNumber();
                setJobType();
                setJobcategory();
                setExperience();
                setLocation();
                setMinSalary();
                setMaxSalary();
                setJobSkill();
                setDescription();
                const addonMessage = {
                    message: 'Successfully Create Job Post.'
                };
                setMessage(addonMessage);
                handleOpen();
                setLoading(false);
            }
            else if (result.message === 'Failed') {
                setCompanyName('');
                setCompanyTitle();
                setCompanyEmail();
                setCompanyNumber();
                setJobType();
                setJobcategory();
                setExperience();
                setLocation();
                setMinSalary();
                setMaxSalary();
                setJobSkill();
                setDescription();
                const addonMessage = {
                    message: 'Failed to create job post. Try again...'
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
                            Manage Job Post
                        </Typography>
                    </Grid>
                    {
                        loading && <Loader />
                    }
                    <Grid>
                        <Grid
                            container
                            spacing={8}
                        >
                            <Grid item md={6}>
                                <Grid>
                                    <Typography sx={{ fontSize: '15px', fontWeight: '600', marginTop: '15px' }}>
                                        Company Name
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        sx={{ width: '100%', }}
                                        variant="outlined"
                                        // placeholder='Full Name'
                                        value={companyName}
                                        onChange={handleCompanyNameChange}
                                        type='text'
                                        size='small'
                                        name='fullName'
                                    />
                                </Grid>
                            </Grid>
                            <Grid item md={6}>
                                <Grid>
                                    <Typography sx={{ fontSize: '15px', fontWeight: '600', marginTop: '15px' }}>
                                        Job Title
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        sx={{ width: '100%', }}
                                        variant="outlined"
                                        // placeholder='Full Name'
                                        value={companyTitle}
                                        onChange={handleCompanyTitleChange}
                                        type='text'
                                        size='small'
                                        name='fullName'
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={8}
                        >
                            <Grid item md={6}>
                                <Grid>
                                    <Typography sx={{ fontSize: '15px', fontWeight: '600', marginTop: '15px' }}>
                                        Email Address
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        sx={{ width: '100%', }}
                                        variant="outlined"
                                        // placeholder='Full Name'
                                        value={companyEmail}
                                        onChange={handleCompanyEmailChange}
                                        type='text'
                                        size='small'
                                        name='fullName'
                                    />
                                </Grid>
                            </Grid>
                            <Grid item md={6}>
                                <Grid>
                                    <Typography sx={{ fontSize: '15px', fontWeight: '600', marginTop: '15px' }}>
                                        Phone Number
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        sx={{ width: '100%', }}
                                        variant="outlined"
                                        // placeholder='Full Name'
                                        value={companyNumber}
                                        onChange={handleCompanyNumberChange}
                                        type='text'
                                        size='small'
                                        name='fullName'
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={8}
                        >
                            <Grid item md={6}>
                                <Grid>
                                    <Typography sx={{ fontSize: '15px', fontWeight: '600', marginTop: '15px' }}>
                                        Job Type
                                    </Typography>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Select
                                            required
                                            sx={{ color: 'black', width: '100%', }}
                                            size='small'
                                            // input={<OutlinedInput label="Job Skills *" />}
                                            value={jobType || ''}
                                            name='Job Type'
                                            onChange={handleJobTypeChange}
                                        >
                                            {/* <MenuItem disabled value=''>--- Select ---</MenuItem> */}
                                            {jobTypes.map((option) => (
                                                <MenuItem key={option.value} value={option.label}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item md={6}>
                                <Grid>
                                    <Typography sx={{ fontSize: '15px', fontWeight: '600', marginTop: '15px' }}>
                                        Job Category
                                    </Typography>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Select
                                            required
                                            sx={{ color: 'black', width: '100%', }}
                                            size='small'
                                            // input={<OutlinedInput label="Job Skills *" />}
                                            value={jobCategory || ''}
                                            name='Job Category'
                                            onChange={handleJobCategoryChange}
                                        >
                                            {/* <MenuItem disabled value=''>--- Select ---</MenuItem> */}
                                            {jobCategories.map((option) => (
                                                <MenuItem key={option.value} value={option.label}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={8}
                        >
                            <Grid item md={6}>
                                <Grid>
                                    <Typography sx={{ fontSize: '15px', fontWeight: '600', marginTop: '15px' }}>
                                        Experience
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        sx={{ width: '100%', }}
                                        variant="outlined"
                                        // placeholder='Full Name'
                                        value={experience}
                                        onChange={handleExperienceChange}
                                        type='text'
                                        size='small'
                                        name='fullName'
                                    />
                                </Grid>
                            </Grid>
                            <Grid item md={6}>
                                <Grid>
                                    <Typography sx={{ fontSize: '15px', fontWeight: '600', marginTop: '15px' }}>
                                        Location
                                    </Typography>
                                    <TextField
                                        id="outlined-basic"
                                        sx={{ width: '100%', }}
                                        variant="outlined"
                                        // placeholder='Full Name'
                                        value={location}
                                        onChange={handleLocationChange}
                                        type='text'
                                        size='small'
                                        name='fullName'
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={8}
                        >
                            <Grid item md={6}>
                                <Grid
                                    container
                                    spacing={8}
                                >
                                    <Grid item md={6}>
                                        <Grid>
                                            <Typography sx={{ fontSize: '15px', fontWeight: '600', marginTop: '15px' }}>
                                                Monthly Salary
                                            </Typography>
                                            <TextField
                                                id="outlined-basic"
                                                sx={{ width: '100%', }}
                                                variant="outlined"
                                                placeholder='Min Salary'
                                                value={minSalary}
                                                onChange={handleMinSalaryChange}
                                                type='text'
                                                size='small'
                                                name='fullName'
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Grid>
                                            <Typography sx={{ fontSize: '15px', fontWeight: '600', marginTop: '15px' }}>
                                                .
                                            </Typography>
                                            <TextField
                                                id="outlined-basic"
                                                sx={{ width: '100%', }}
                                                variant="outlined"
                                                placeholder='Max Salary'
                                                value={maxSalary}
                                                onChange={handleMaxSalaryChange}
                                                type='text'
                                                size='small'
                                                name='fullName'
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={6}>
                                <Grid>
                                    <Typography sx={{ fontSize: '15px', fontWeight: '600', marginTop: '15px' }}>
                                        Job Skills
                                    </Typography>
                                    <FormControl sx={{ width: '100%' }}>
                                        <Select
                                            required
                                            sx={{ color: 'black', width: '100%', }}
                                            multiple
                                            size='small'
                                            // input={<OutlinedInput label="Job Skills *" />}
                                            value={jobSkill || []}
                                            name='kitchen_equipment'
                                            onChange={handleJobSkillChange}
                                        >
                                            {/* <MenuItem disabled value=''>--- Select ---</MenuItem> */}
                                            {jobSkills.map((option) => (
                                                <MenuItem key={option.value} value={option.label}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={8}
                        >
                            <Grid item md={6}>
                                <Grid sx={{ marginTop: '10px' }}>
                                    <Typography sx={{ fontSize: '15px', fontWeight: '600' }}>
                                        Upload Company Logo
                                    </Typography>
                                    <Grid sx={{ marginTop: '5px' }}>
                                        <FileBase64 multiple={false} type="file" accept='image/*' onDone={({ base64 }) => setImage({ ...image, logo: base64 })} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={6}>

                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid>
                                <Typography sx={{ fontSize: '15px', fontWeight: '600', marginTop: '15px' }}>
                                    Job Description
                                </Typography>
                                {/* <TextField
                                    id="outlined-basic"
                                    multiline
                                    rows={4}
                                    sx={{ width: '100%', }}
                                    variant="outlined"
                                    // placeholder='Full Name'
                                    value={description}
                                    onChange={handleDescriptionChange}
                                    type='text'
                                    name='fullName'
                                /> */}
                                <ReactQuill
                                    theme="snow"
                                    value={description}
                                    onChange={handleDescriptionChange} />
                            </Grid>
                        </Grid>
                        <Grid sx={{ marginTop: '50px', textAlign: 'end' }}>
                            <Button variant='contained'
                                onClick={hanldeJobPost}
                                style={{
                                    color: 'white', fontSize: '17px', backgroundColor: '#291F78', width: '20%', ':hover': {
                                        bgcolor: '#291F78',
                                        color: 'white',
                                    }
                                }}>
                                SUBMIT
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {
                open && <Message open={open} onclose={handleClose} message={message} />
            }
        </>
    );
};

export default ManageJobsPost;