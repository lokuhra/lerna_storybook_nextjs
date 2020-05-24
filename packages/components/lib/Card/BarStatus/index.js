import { Box } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  borderStatus: {
    width: '100%',
    height: '0.2em',
  },
  borderStatusOnline: {
    background: '#00bb2d',
  },
  borderStatusOffline: {
    background: '#ff0000',
  },
}));

const BarStatus = ({ liveStatus }) => {
  const classes = useStyles();

  const status = liveStatus || false;

  console.log(status);

  return (
    <Box
      className={clsx([
        classes.borderStatus,
        status.online
          ? classes.borderStatusOnline
          : classes.borderStatusOffline,
      ])}
    />
  );
};

export default BarStatus;
