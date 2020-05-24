import React, { useCallback, useContext, useState } from 'react';

import BarStatus from './BarStatus';
import Card from '@material-ui/core/Card';
import Content from './Content';
import Grid from '@material-ui/core/Grid';
import Image from './Image';
import Modal from '../Modal';
import { makeStyles } from '@material-ui/core/styles';

const CamerasList = ({
  name,
  last_thumbnail,
  model,
  liveStatus,
  width,
  height,
  widthCardDoorbell,
}) => {
  const [isHover, setIsHover] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const useStyles = makeStyles((theme) => ({
    card: {
      width:
        model && model.slug === 'doorbell'
          ? widthCardDoorbell
          : width,
      background: model && model.slug === 'doorbell' && 'black',
      cursor: 'default',
      borderRadius: '0',
      marginBottom: '1em',
      justifyContent: 'space-between',
    },
  }));

  const classes = useStyles();

  const handleCloseModal = () => setIsOpenModal(false);
  const handleOpenModal = () => setIsOpenModal(true);

  const [isOnSwitch, setIsOnSwitch] = useState(true);

  const handleChangeSwitch = (event) => {
    setIsOnSwitch(!isOnSwitch);
  };

  return (
    <Grid
      item
      container
      xs={4}
      sm={4}
      md={4}
      lg={4}
      justify="center"
      alignItems="center"
    >
      <Modal
        isOpenModal={isOpenModal}
        handleCloseModal={handleCloseModal}
      />
      <Card className={classes.card}>
        <Image
          last_thumbnail={last_thumbnail}
          liveStatus={liveStatus}
          model={model}
          width={width}
          height={height}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          permanentSensors={isOnSwitch}
        />
        <Content
          name={name}
          liveStatus={liveStatus}
          isOnSwitch={isOnSwitch}
          handleChangeSwitch={handleChangeSwitch}
        />
        <BarStatus liveStatus={liveStatus} />
      </Card>
    </Grid>
  );
};

export default CamerasList;
