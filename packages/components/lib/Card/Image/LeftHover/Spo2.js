import React, { memo } from 'react';

import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import spo2 from './spo2.png';

const useStyles = makeStyles(() => ({
  infoSPO2: {
    padding: '0px',
    margin: '0px',
  },
  boxContent: {
    marginTop: '10px',
  },
}));

function Spo2() {
  const classes = useStyles();

  return (
    <Box className={classes.boxContent}>
      <Icon>
        <img
          src={spo2}
          className={classes.oxi}
          style={{ width: '24px', height: '24px' }}
        />
      </Icon>
      <Typography className={classes.infoSPO2}>{`99%`}</Typography>
    </Box>
  );
}

export default memo(Spo2);
