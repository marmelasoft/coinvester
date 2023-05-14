import React from 'react';
import { Grid, Typography, AvatarGroup, Avatar, Stack } from '@mui/material';
import AnimationFadeIn from '../animation/Animation';

const DemoTitle = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} sm={10} lg={8}>
        <AnimationFadeIn>
          <>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1}
              alignItems="center"
              justifyContent="center"
              mb={2}
            >
              <AvatarGroup>
                <Avatar alt="Remy Sharp" src='/images/profile/user-1.jpg' sx={{ width: 28, height: 28 }} />
                <Avatar alt="Travis Howard" src='/images/profile/user-2.jpg' sx={{ width: 28, height: 28 }} />
                <Avatar alt="Cindy Baker" src='/images/profile/user-3.jpg' sx={{ width: 28, height: 28 }} />
              </AvatarGroup>
              <Typography variant="h6">52,589+</Typography>
              <Typography variant="h6" color="textSecondary">
                developers & agencies using our templates
              </Typography>
            </Stack>
            <Typography
              variant="h2"
              fontWeight={700}
              textAlign="center"
              sx={{
                fontSize: {
                  lg: '36px',
                  xs: '25px',
                },
                lineHeight: {
                  lg: '43px',
                  xs: '30px',
                },
              }}
            >
              Production Ready & Developer Friendly Material UI NextJs Admin Template
            </Typography>
          </>
        </AnimationFadeIn>
      </Grid>
    </Grid>
  );
};

export default DemoTitle;
