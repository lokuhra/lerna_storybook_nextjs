import React, { memo } from 'react';

import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

function Cardio({ classNameCardioIcon, classNameCardio }) {
  return (
    <Box>
      <Icon className={classNameCardioIcon}>favorite</Icon>
      <Typography className={classNameCardio}>{`67`}</Typography>
    </Box>
  );
}

export default memo(Cardio);
