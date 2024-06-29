import { Grid } from '@mui/material';
import React from 'react';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
import Banner from '../Banner/Banner';
import JobSector from '../JobSector/JobSector';
import SearchArea from '../SearchArea/SearchArea';

const Main = () => {
    return (
        <Grid>
            <Navigation />
            <Banner />
            <SearchArea />
            {/* <JobSector /> */}
            <Footer />
        </Grid>
    );
};

export default Main;