import React, { memo, useEffect, useState } from 'react';
import { makeStyles, theme } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import LeftHover from './LeftHover';
import clsx from 'clsx';

function MyImage({
  last_thumbnail,
  liveStatus,
  width,
  height,
  permanentSensors,
}) {
  useEffect(() => {
    console.log('render image');
  }, []);

  const [isHover, setIsHover] = useState(true);

  const useStyles = makeStyles((theme) => ({
    image: {
      width: width,
      height: height,
      position: 'relative',
    },
    grey: {
      filter: 'grayscale(100%)',
    },
    container: {
      position: 'relative',
      textAlign: 'center',
      color: 'white',
    },
    hidden: { display: 'none' },
    sensors: {
      position: 'absolute',
      top: '8px',
      left: '16px',
      padding: '0.5rem',
      background: 'rgb(0,0,0,0.5)',
    },
    cardio: {
      fontSize: '16px',
      marginTop: '-4px',
      color: 'red',
    },
    cardioIcon: {
      fontSize: '16px',
      color: 'red',
    },
    sp02Title: { color: 'white', fontSize: '16px' },
    sp02Text: {
      fontSize: '16px',
      marginTop: '-8px',
    },
  }));

  const classes = useStyles();
  return (
    <Box
      className={classes.container}
      onMouseLeave={() => setIsHover(false)}
      onMouseOver={() => setIsHover(true)}
    >
      <img
        src={last_thumbnail}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={clsx(
          classes.image,
          liveStatus && !liveStatus.online && classes.grey,
        )}
      />

      <LeftHover
        onMouseOver={() => setIsHover(true)}
        classNameBoxLeft={
          permanentSensors
            ? classes.sensors
            : clsx([
                isHover ? classes.block : classes.hidden,
                classes.sensors,
              ])
        }
        classNameCardioIcon={classes.cardioIcon}
        classNameCardio={classes.cardio}
        classNameSp02Title={classes.sp02Title}
        classNameSp02Text={classes.sp02Text}
      />
    </Box>
  );
}

export default memo(MyImage);
