import React, { useState } from 'react';

import BatteryLevel from './BatteryLevel';
import EditIcon from '@material-ui/icons/Edit';
import { IoIosContact } from 'react-icons/io';
import MsjWsp from './MsjWsp';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import WiFi from './WiFi';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    transform: 'translateZ(0px)',
    fontsize: '2px',
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(0),
    right: theme.spacing(0),
    '& > .MuiFab-root': {
      width: '40px',
      height: '40px',
      minWidth: '0',
      minHeight: '0',
    },
  },
}));

function OpenIconSpeedDial({ liveStatus, onClickContact }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const actions = [
    {
      icon: <BatteryLevel liveStatus={liveStatus} />,
      name: `${liveStatus.batteryLevel}%`,
    },
    {
      icon: <WiFi liveStatus={liveStatus} />,
      name: `lvl ${liveStatus.wifiSignal}`,
    },
    {
      icon: <MsjWsp />,
      name: 'WhatsApp',
    },
    {
      icon: (
        <IoIosContact
          style={{ fontSize: '24px', color: 'pink' }}
          onClick={onClickContact}
        />
      ),
      name: 'medical record',
    },
  ];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        className={classes.speedDial}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        direction={'left'}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
            style={{ fontSize: '5px' }}
          />
        ))}
      </SpeedDial>
    </div>
  );
}

export default OpenIconSpeedDial;
