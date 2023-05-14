// import React, { FunctionComponent } from 'react';
// import { TablerIcon } from '@tabler/icons-react';
// import { OverridableComponent } from '@mui/material/OverridableComponent';
// import { SvgIconTypeMap } from '@mui/material';

// export type GeneralIcon =
//   | (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
//       muiName: string;
//     })
//   | React.ComponentClass<any>
//   | FunctionComponent<any>
//   | TablerIcon;


import React, { FunctionComponent } from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

export type GeneralIcon =
  | (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
      muiName: string;
    })
  | React.ComponentClass<any>
  | FunctionComponent<any>;
