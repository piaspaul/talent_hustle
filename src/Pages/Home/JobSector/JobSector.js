import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import marketing from '../../../Images/Sector/marketing.png';
import graphic from '../../../Images/Sector/graphic.png';
import research from '../../../Images/Sector/research.png';

const JobSector = () => {
    return (
        <Grid>
            <Container>
                <Grid>
                    <Grid sx={{ textAlign: 'center', marginTop: '20px' }}>
                        <Typography sx={{ fontSize: '30px', fontWeight: '600', color: 'gray', letterSpacing: '3px' }}>
                            One Platform
                        </Typography>
                        <Typography sx={{ fontSize: '30px', fontWeight: '600', color: '#191157', letterSpacing: '3px' }}>
                            Many Solution
                        </Typography>
                    </Grid>
                    <Grid sx={{ marginTop: '100px', marginBottom: '50px' }}>
                        <Grid
                            container
                            spacing={8}
                        >
                            <Grid item md={4}>
                                <Grid sx={{ backgroundColor: '#FFFFFF', boxShadow: '8', borderRadius: '10px', height: '200px' }}>
                                    <Grid
                                        container
                                        spacing={4}
                                    >
                                        <Grid item md={3}>
                                            <Grid sx={{ textAlign: 'center' }}>
                                                <img style={{ width: '35px', height: '35px', }} src={marketing} alt="Marketing" />
                                            </Grid>
                                        </Grid>
                                        <Grid item md={9}>
                                            <Typography sx={{ fontSize: '20px', fontWeight: '600', letterSpacing: '3px' }}>
                                                Marketing & Communication
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        spacing={4}
                                        paddingTop='10px'
                                    >
                                        <Grid item md={3}>
                                        </Grid>
                                        <Grid item md={9}>
                                            <Typography sx={{ fontSize: '13px' }}>
                                                Lorem ipsum dolor sit amet consectetur.
                                                Feugiat morbi elit ornare varius.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        spacing={4}
                                        paddingTop='10px'
                                    >
                                        <Grid item md={3}>
                                        </Grid>
                                        <Grid item md={9}>
                                            <Grid>
                                                <Button sx={{ color: "#220BD8", fontSize: '12px', fontWeight: '600' }} variant="text">58 jobs are here</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={4}>
                                <Grid sx={{ backgroundColor: '#FFFFFF', boxShadow: '8', borderRadius: '10px', height: '200px' }}>
                                    <Grid
                                        container
                                        spacing={4}
                                    >
                                        <Grid item md={3}>
                                            <Grid sx={{ textAlign: 'center' }}>
                                                <img style={{ width: '35px', height: '35px', }} src={graphic} alt="Marketing" />
                                            </Grid>
                                        </Grid>
                                        <Grid item md={9}>
                                            <Typography sx={{ fontSize: '20px', fontWeight: '600', letterSpacing: '3px' }}>
                                                Graphic Design
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        spacing={4}
                                        paddingTop='10px'
                                    >
                                        <Grid item md={3}>
                                        </Grid>
                                        <Grid item md={9}>
                                            <Typography sx={{ fontSize: '13px' }}>
                                                Lorem ipsum dolor sit amet consectetur.
                                                Feugiat morbi elit ornare varius.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        spacing={4}
                                        paddingTop='10px'
                                    >
                                        <Grid item md={3}>
                                        </Grid>
                                        <Grid item md={9}>
                                            <Grid>
                                                <Button sx={{ color: "#220BD8", fontSize: '12px', fontWeight: '600' }} variant="text">5 jobs are here</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={4}>
                                <Grid sx={{ backgroundColor: '#FFFFFF', boxShadow: '8', borderRadius: '10px', height: '200px' }}>
                                    <Grid
                                        container
                                        spacing={4}
                                    >
                                        <Grid item md={3}>
                                            <Grid sx={{ textAlign: 'center' }}>
                                                <img style={{ width: '35px', height: '35px', }} src={research} alt="Marketing" />
                                            </Grid>
                                        </Grid>
                                        <Grid item md={9}>
                                            <Typography sx={{ fontSize: '20px', fontWeight: '600', letterSpacing: '3px' }}>
                                                Human Research & Development
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        spacing={4}
                                        paddingTop='10px'
                                    >
                                        <Grid item md={3}>
                                        </Grid>
                                        <Grid item md={9}>
                                            <Typography sx={{ fontSize: '13px' }}>
                                                Lorem ipsum dolor sit amet consectetur.
                                                Feugiat morbi elit ornare varius.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        spacing={4}
                                        paddingTop='10px'
                                    >
                                        <Grid item md={3}>
                                        </Grid>
                                        <Grid item md={9}>
                                            <Grid>
                                                <Button sx={{ color: "#220BD8", fontSize: '12px', fontWeight: '600' }} variant="text">32 jobs are here</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default JobSector;