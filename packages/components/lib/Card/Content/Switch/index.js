import React, { useState } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';

export default function SwitchLabels({
  isOnSwitch,
  handleChangeSwitch,
}) {
  return (
    <FormGroup column>
      <FormControlLabel
        control={
          <Switch
            checked={isOnSwitch}
            onChange={handleChangeSwitch}
            name="checkedA"
          />
        }
      />
    </FormGroup>
  );
}
