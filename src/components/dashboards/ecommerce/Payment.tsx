import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar } from '@mui/material';
import { IconArrowUpLeft } from '@tabler/icons-react';
import DashboardCard from '../../shared/DashboardCard';

const Payment = () => {
  const theme = useTheme();
  const successlight = theme.palette.success.light;

  return (
    <DashboardCard>
      <>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: (theme) => theme.palette.primary.light, width: 40, height: 40 }}
        >
          <Avatar src={"/images/svgs/icon-paypal.svg"} alt="paypal-icon" sx={{ width: 24, height: 24 }} />
        </Avatar>
        <Typography variant="subtitle2" color="textSecondary" mt={3}>
          Payments
        </Typography>
        <Typography variant="h4">$678,298</Typography>
        <Stack direction="row" spacing={1} mt={1} alignItems="center">
          <Avatar sx={{ bgcolor: successlight, width: 20, height: 20 }}>
            <IconArrowUpLeft width={16} color="#39B69A" />
          </Avatar>
          <Typography variant="subtitle2" color="textSecondary">
            +9%
          </Typography>
        </Stack>
      </>
    </DashboardCard>
  );
};

export default Payment;
