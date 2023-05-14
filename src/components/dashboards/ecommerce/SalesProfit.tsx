import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar } from '@mui/material';
import { IconArrowDownRight } from '@tabler/icons-react';

import DashboardCard from '../../shared/DashboardCard';


const SalesProfit = () => {
  const theme = useTheme();
  const errorlight = theme.palette.error.light;

  return (
    <DashboardCard>
      <>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: (theme) => theme.palette.error.light, width: 40, height: 40 }}
        >
          <Avatar src={"/images/svgs/icon-office-bag-2.svg"} alt="icon1Img" sx={{ width: 24, height: 24 }} />
        </Avatar>
        <Typography variant="subtitle2" color="textSecondary" mt={3}>
          Sales Profit
        </Typography>
        <Typography variant="h4">$456,120</Typography>
        <Stack direction="row" spacing={1} mt={1} alignItems="center">
          <Avatar sx={{ bgcolor: errorlight, width: 20, height: 20 }}>
            <IconArrowDownRight width={16} color="#FA896B" />
          </Avatar>
          <Typography variant="subtitle2" color="textSecondary">
            +9%
          </Typography>
        </Stack>
      </>
    </DashboardCard>
  );
};

export default SalesProfit;
