import { Grid, Typography } from '@mui/material';
import React from 'react';
import banner from '../../../Images/home/banner.png';
import search from '../../../Images/home/search2.png';

const Banner = () => {
    return (
        <Grid>
            <Grid>
                <img style={{ width: '100%', height: '650px', }} src={search} alt="Banner" />
            </Grid>
            <Grid sx={{marginTop:'-450px', marginBottom: '300px'}}>
                <Typography sx={{ fontSize: '30px', color: 'black', fontWeight: '600', textAlign: 'center', letterSpacing: '5px', marginBottom: '20px' }}>
                    The Easiest Way To Get Your New Job
                </Typography>
                {/* <Typography sx={{ fontSize: '15px', color: 'black', fontWeight: '600', textAlign: 'center' }}>
                    Thousand of jobs in the construction agency available. Browse as a visitor and register to apply.
                </Typography> */}
            </Grid>
        </Grid>
    );
};

export default Banner;