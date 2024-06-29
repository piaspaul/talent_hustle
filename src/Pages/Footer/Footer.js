import { Box, Card, CardMedia, Container, Grid, Link } from '@mui/material';
import React from 'react';
import NavigationIcon from '@mui/icons-material/Navigation';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {

    return (
        <footer style={{ marginTop: '100px' }}>
            <Box
                px={{ xs: 3, sm: 10 }}
                // py={{ xs: 5, sm: 8 }}
                sx={{ bgcolor: '#383648', opacity: '100%', backgroundImage: 'linear-gradient(to right, #383648, #7668E1)' }}
                color="white"
            >
                <Container>
                    <Grid container spacing={4} sx={{ marginBottom: '100px' }}>
                        {/* <Grid item xs={12} sm={6} md={3} marginBottom='10px'>
                            <Box sx={{ fontWeight: '600', fontSize: 25, marginBottom: 2 }}>
                                JOBHUNT
                            </Box>
                            <Box sx={{ fontSize: 15, marginBottom: 2 }}>
                                Job Searching Just Got Easy.
                                Use JobHUNT to run a hiring
                                site and earn money in the
                                process!
                            </Box>
                        </Grid> */}
                        <Grid item xs={12} sm={6} md={3} marginBottom='10px'>
                            <Box sx={{ fontWeight: '500', fontSize: 20, marginBottom: 2 }}>
                                ABOUT US
                            </Box>
                            <Box sx={{ marginBottom: '10px' }}>
                                <Link href="/about" sx={{
                                    textDecoration: 'none', '&:hover': {
                                        color: 'inherit',
                                        textDecoration: 'none'
                                    },
                                }} color="inherit">
                                    About Talent Hustle
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/contact" sx={{
                                    textDecoration: 'none', '&:hover': {
                                        color: 'inherit',
                                        textDecoration: 'none'
                                    },
                                }} color="inherit">
                                    Contact us
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} marginBottom='10px'>
                            <Box sx={{ fontWeight: '500', fontSize: 20, marginBottom: 2 }}>
                                CANDIDATE
                            </Box>
                            <Box sx={{ marginBottom: '10px' }}>
                                <Link href="/register" sx={{
                                    textDecoration: 'none', '&:hover': {
                                        color: 'inherit',
                                        textDecoration: 'none'
                                    },
                                }} color="inherit">
                                    Create Account
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} marginBottom='10px'>
                            <Box sx={{ fontWeight: '500', fontSize: 20, marginBottom: 2 }}>
                                EMPLOYEES
                            </Box>
                            <Box sx={{ marginBottom: '10px' }}>
                                <Link href="/register" sx={{
                                    textDecoration: 'none', '&:hover': {
                                        color: 'inherit',
                                        textDecoration: 'none'
                                    },
                                }} color="inherit">
                                    Create Account
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} marginBottom='10px'>
                            <Box sx={{ fontWeight: '500', fontSize: 20, marginBottom: 2 }}>
                                SOCIAL MEDIA
                            </Box>
                            <Box sx={{ marginBottom: '10px' }}>
                                <Link href="https://twitter.com/abirarko2?s=20" target='_blank' sx={{
                                    textDecoration: 'none', '&:hover': {
                                        color: 'inherit',
                                        textDecoration: 'none'
                                    },
                                }} color="inherit">
                                    TWITTER
                                </Link>
                            </Box>
                            <Box sx={{ marginBottom: '10px' }}>
                                <Link href="https://www.linkedin.com/in/pias-paul-b92718232/" target='_blank' sx={{
                                    textDecoration: 'none', '&:hover': {
                                        color: 'inherit',
                                        textDecoration: 'none'
                                    },
                                }} color="inherit">
                                    LINKEDIN
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} sx={{ paddingLeft: 8, paddingRight: 8 }}>
                        <Grid item xs={12} sm={12} md={3} marginBottom='10px'>

                        </Grid>
                        <Grid item xs={12} sm={6} md={3} marginBottom='10px'>
                            {/* <Box sx={{ fontWeight: '500', fontSize: 25, marginBottom: 2 }}>
                                {t('fTitle5')}
                                Business Partners
                            </Box>
                            <Box>
                                <Link href="#" sx={{ textDecoration: 'none' }} color="inherit">
                                    {t('fContentM1')}
                                    Affiliate Marketing
                                </Link>
                            </Box>
                            <Box>
                                <Link href="#" sx={{ textDecoration: 'none' }} color="inherit">
                                    {t('fContentM2')}
                                    Trade Partners
                                </Link>
                            </Box>
                            <Box>
                                <Link href="#" sx={{ textDecoration: 'none' }} color="inherit">
                                    {t('fContentM3')}
                                    e-Presurement
                                </Link>
                            </Box> */}
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} marginBottom='10px'>
                            {/* <Box sx={{ fontWeight: '500', fontSize: 25, marginBottom: 2 }}>
                                {t('fTitle6')}
                                Group Companies
                            </Box>
                            <Box>
                                <Link href="#" sx={{ textDecoration: 'none' }} color="inherit">
                                    {t('fContentM4')}
                                </Link>
                            </Box>
                            <Box>
                                <Link href="#" sx={{ textDecoration: 'none' }} color="inherit">
                                    {t('fContentM5')}
                                </Link>
                            </Box>
                            <Box>
                                <Link href="#" sx={{ textDecoration: 'none' }} color="inherit">
                                    {t('fContentM6')}
                                </Link>
                            </Box> */}
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} marginBottom='10px'>
                            {/* <Box sx={{ fontWeight: '500', fontSize: 25, marginBottom: 2 }}>
                                {t('fTitle7')}
                                <br />
                                {t('fTitle8')}
                            </Box>
                            <Box
                                display='flex'
                                marginBottom='10px'
                            >
                                <Link to='/' sx={{ marginRight: 1 }}>
                                    <img style={{ width: '30px', height: '30px', }} src={facebook} alt='' />
                                </Link>
                                <Link to='/' sx={{ marginRight: 1 }}>
                                    <img style={{ width: '30px', height: '30px', }} src={instagram} alt='' />
                                </Link>
                                <Link to='/' sx={{ marginRight: 1 }}>
                                    <img style={{ width: '30px', height: '30px', }} src={youtube} alt='' />
                                </Link>
                                <Link to='/' sx={{ marginRight: 1 }}>
                                    <img style={{ width: '30px', height: '30px', }} src={twitter} alt='' />
                                </Link>
                                <Link to='/' sx={{ marginRight: 1 }}>
                                    <img style={{ width: '30px', height: '30px', }} src={linkedin} alt='' />
                                </Link>
                            </Box> */}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;