import React, { memo } from 'react';

import Box from '@material-ui/core/Box';
import Cardio from './Cardio';
import Spo2 from './Spo2';

function LeftBox({
  onMouseOver,
  classNameBoxLeft,
  classNameCardioIcon,
  classNameCardio,
  classNameSp02Title,
  classNameSp02Text,
}) {
  return (
    <Box onMouseOver={onMouseOver} className={classNameBoxLeft}>
      <Cardio
        classNameCardioIcon={classNameCardioIcon}
        classNameCardio={classNameCardio}
      />
      <Spo2
        classNameSp02Title={classNameSp02Title}
        classNameSp02Text={classNameSp02Text}
      />
    </Box>
  );
}

export default memo(LeftBox);
