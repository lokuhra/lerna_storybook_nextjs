import React, { memo } from 'react';

import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

const CameraLocation = ({ liveStatus, classNameLocation }) => {
  return (
    <Box display="flex">
      <Icon color="primary">location_on</Icon>
      <Typography className={classNameLocation}>
        {liveStatus?.online
          ? `${liveStatus.city}, ${liveStatus.country}`
          : `Camera offline`}
      </Typography>
    </Box>
  );
};

export default memo(CameraLocation);
