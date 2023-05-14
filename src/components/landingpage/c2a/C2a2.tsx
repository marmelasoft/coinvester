import React from 'react';
import { Grid, Typography, Box, Button, styled, Container, Stack } from '@mui/material';
import c2aImg from 'public/images/landingpage/background/c2a.png';
import GuaranteeCard from './GuaranteeCard';
import Image from 'next/image';

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '13px 34px',
  fontSize: '16px',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
  fontWeight: 600,
}));

const StyledButton2 = styled(Button)(({ theme }) => ({
  padding: '13px 34px',
  fontSize: '16px',
  borderColor: theme.palette.background.paper,
  color: theme.palette.background.paper,
  fontWeight: 600,
  '&:hover': {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
  },
}));

const C2a2 = () => {
  return (
    <Box>
      <Box
        bgcolor="primary.main"
        sx={{
          pt: '60px',
          pb: '30px',
        }}
      >
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item xs={12} sm={12} lg={5}>
              <Typography variant="h2" color="background.paper" fontWeight={700} mt={4}>
                Build your app with our highly customizable NextJs based Dashboard
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} mt={3}>
                <StyledButton variant="contained" color="inherit" href="/auth/auth1/login">
                  Login
                </StyledButton>
                <StyledButton2
                  variant="outlined"
                  color="inherit"
                  href="https://adminmart.com/templates/nextjs/?product_sortby=free"
                >
                  Download Free Version
                </StyledButton2>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={5}>
              <Box
                sx={{
                  textAlign: {
                    xs: 'center',
                    lg: 'right',
                  },
                }}
              >
                <Image src={c2aImg} alt="img" width="330" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <GuaranteeCard />
      </Container>
    </Box>
  );
};

export default C2a2;
