import React, { useState } from 'react';
import { Box, Button, Divider, Grid, styled, Paper } from '@mui/material';
import { IconChevronDown } from '@tabler/icons-react';
import AppLinks from '../../../layouts/full/vertical/header/AppLinks';
import QuickLinks from '../../../layouts/full/vertical/header/QuickLinks';
import DemosDD from './DemosDD';

const Navigations = () => {

    const StyledButton = styled(Button)(({ theme }) => ({
        fontSize: '16px',
        color: theme.palette.text.secondary
    }));

    // demos
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // pages

    const [open2, setOpen2] = useState(false);

    const handleOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };



    return (
        <>
            <StyledButton
                color="inherit"
                variant="text"
                aria-expanded={open ? 'true' : undefined}
                sx={{
                    color: open ? 'primary.main' : (theme) => theme.palette.text.secondary,
                }}
                onMouseEnter={handleOpen} onMouseLeave={handleClose}
                endIcon={<IconChevronDown size="15" style={{ marginLeft: '-5px', marginTop: '2px' }} />}
            >
                Demos
            </StyledButton>
            {open && (
                <Paper
                    onMouseEnter={handleOpen}
                    onMouseLeave={handleClose}
                    sx={{
                        position: 'absolute',
                        left: '0',
                        right: '0',
                        top: '55px',
                        maxWidth: '1200px',
                        width: '100%'
                    }}
                >
                    <DemosDD />
                </Paper>
            )}
            <Box>
                <StyledButton
                    color="inherit"
                    variant="text"
                    onMouseEnter={handleOpen2} onMouseLeave={handleClose2}
                    sx={{
                        color: open2 ? 'primary.main' : (theme) => theme.palette.text.secondary,
                    }}
                    endIcon={<IconChevronDown size="15" style={{ marginLeft: '-5px', marginTop: '2px' }} />}
                >
                    Pages
                </StyledButton>
                {open2 && (
                    <Paper
                        onMouseEnter={handleOpen2}
                        onMouseLeave={handleClose2}
                        sx={{
                            position: 'absolute',
                            left: '0',
                            right: '0',
                            top: '55px',
                            width: '850px',
                            margin: '0 auto'
                        }}
                    >
                        <Grid container>
                            <Grid item sm={8} display="flex">
                                <Box p={4} pr={0} pb={3}>
                                    <AppLinks />
                                </Box>
                                <Divider orientation="vertical" />
                            </Grid>
                            <Grid item sm={4}>
                                <Box p={4}>
                                    <QuickLinks />
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                )}
            </Box>
            <StyledButton color="inherit" variant="text" href="https://demos.adminmart.com/premium/nextjs/modernize-nextjs/docs/index.html">
                Documentation
            </StyledButton>
            <StyledButton color="inherit" variant="text" href="https://adminmart.com/support">
                Support
            </StyledButton>
            <Button color="primary" variant="contained" href="/auth/auth1/login">
                Login
            </Button>
        </>
    );
};

export default Navigations;
