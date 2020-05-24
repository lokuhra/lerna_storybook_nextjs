import React, { memo } from 'react';

import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

const CameraName = ({ name, classNameTitleName }) => {
  return (
    <Box display="flex">
      <Icon color="primary">videocam</Icon>
      <Typography className={classNameTitleName}>{name}</Typography>
    </Box>
  );
};

export default memo(CameraName);
