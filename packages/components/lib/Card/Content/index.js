import React, { memo } from 'react';

import Box from '@material-ui/core/Box';
import CameraLocation from './CameraLocation';
import CameraName from './CameraName';
import CardContent from '@material-ui/core/CardContent';
import SpeedDial from './SpeedDial';
import Switch from './Switch';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  titleName: {
    backgroundColor: '#e8e8e8',
    color: '#333',
    fontSize: '.95em',
    padding: '0.1em .75em',
    fontWeight: '600',
  },
  cardContentLayout: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

const Content = ({
  name,
  liveStatus,
  isOnSwitch,
  handleChangeSwitch,
}) => {
  const classes = useStyles();

  return (
    <CardContent
      className={clsx([classes.titleName, classes.cardContentLayout])}
    >
      <Box>
        <CameraName
          name={name}
          classNameTitleName={classes.titleName}
        />
        <CameraLocation
          liveStatus={liveStatus}
          classNameLocation={classes.titleName}
        />
      </Box>
      <Switch
        isOnSwitch={isOnSwitch}
        handleChangeSwitch={handleChangeSwitch}
      />
      <SpeedDial liveStatus={liveStatus} />
    </CardContent>
  );
};

export default memo(Content);
