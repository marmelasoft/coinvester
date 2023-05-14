import React from 'react';
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

const WelcomeCard = () => {
  return (
    <Card
      elevation={0}
      sx={{ backgroundColor: (theme) => theme.palette.primary.light, py: 0 }}
    >
      <CardContent sx={{ py: 2 }}>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item sm={6} display="flex" alignItems="center">
            <Box
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
              }}
            >
              <Typography variant="h5">Welcome back Mathew!</Typography>
              <Typography variant="subtitle2" my={2} color="textSecondary">
                You have earned 54% more than last month which is great thing.
              </Typography>
              <Button variant="contained" color="primary">
                Check
              </Button>
            </Box>
          </Grid>
          <Grid item sm={5}>
            <Box mb="-90px">
              <img
                src="/images/backgrounds/welcome-bg2.png"
                alt={"welcomeImg"}
                width="300px"
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
