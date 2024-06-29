import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@mui/material';
import React from 'react';
import success from '../../Images/Message/success.png';
import error from '../../Images/Message/error.png';

const Message = ({ open, onclose, message, status }) => {
    return (
        <Grid>
            <Dialog
                open={open}
                onClose={onclose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title" sx={{ textAlign: 'center' }}>
                    <img style={{ width: '100px', height: '100px', }} src={message?.message ? success : error} alt="success" />
                </DialogTitle>
                <DialogContent sx={{ marginBottom: '20px' }}>
                    <DialogContentText sx={{ fontSize: '20px', fontWeight: '600', letterSpacing: '2px', }}>
                        {/* Successfully Create Product */}
                        {message ? (message?.message ? message?.message : (message?.error && 'Please select all field.')) : 'Failed ! Please check again...'}
                    </DialogContentText>
                </DialogContent>
                {/* <DialogActions>
                    <Button style={{ fontSize: '15px', fontWeight: '600', backgroundColor: 'red', color: 'white', border: '1px solid red', padding: '5px 15px', borderRadius: '10px' }} autoFocus onClick={onclose}>
                        Cancle
                    </Button>
                </DialogActions> */}
            </Dialog>
        </Grid>
    );
};

export default Message;