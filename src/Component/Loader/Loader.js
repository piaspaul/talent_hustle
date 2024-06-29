import { Grid } from '@mui/material';
import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <Grid>
            <div
                // style={{ display: isLoading ? 'flex' : 'none' }} 
                className='modal'>
                <div className='modal-content'>
                    <div className='loader'></div>
                    <div className='modal-text'>Loading...</div>
                </div>
            </div>
        </Grid>
    );
};

export default Loader;