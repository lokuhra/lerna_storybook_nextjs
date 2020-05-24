import React, { memo } from 'react';

import WifiIndicator from 'react-wifi-indicator';

function WiFi({ liveStatus }) {
  const wiFiSignals = [
    'DISCONNECTED',
    'UNUSABLE',
    'WEAK',
    'OKAY',
    'GREAT',
    'EXCELLENT',
  ];

  return (
    <WifiIndicator
      strength={wiFiSignals[liveStatus ? liveStatus.wifiSignal : 0]}
    />
  );
}

export default memo(WiFi);
