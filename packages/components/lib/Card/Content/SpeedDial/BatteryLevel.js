import React, { memo } from 'react';

import Icon from '@material-ui/core/Icon';
import { isUndefined } from 'ramda-adjunct';

function RightHover({ liveStatus }) {
  const colors = {
    low: 'error',
    medium: 'action',
    high: 'primary',
  };

  const bat = isUndefined(liveStatus) ? 0 : liveStatus;
  const colorBattery =
    bat > 60 ? 'high' : bat > 29 ? 'medium' : 'low';
  return (
    <Icon color={colors[colorBattery]}>battery_charging_full</Icon>
  );
}

export default memo(RightHover);
