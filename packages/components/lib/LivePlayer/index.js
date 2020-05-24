import React, { useContext, useEffect, useLayoutEffect } from 'react';
import {
  formatRtmps2Rtmp,
  getBestResolution19_9Global,
} from 'ramdaFns';

import { Box } from '@material-ui/core';
import { Context } from 'StoreProvider';

function Video() {
  const { state } = useContext(Context);

  const formattedUrlRtmp = formatRtmps2Rtmp(
    state.streamToken,
    state.selectedCamIndex
      ? state.selectedCamIndex.view_urls.rtmps
      : 'rtmps://fls.hipcam.com:443/pro/11/1111',
  );

  const renderJwPlayer = () => {
    const videoResolution = getBestResolution19_9Global(
      state.isFullSidebar,
    );

    return jwplayer('player').setup({
      flashplayer:
        'https://cdn.jsdelivr.net/jwplayer/5.10/player.swf',
      streamer: formattedUrlRtmp.streamer,
      file: formattedUrlRtmp.file,
      controlbar: 'bottom',
      autoplay: true,
      width: videoResolution.Width,
      height: videoResolution.Height,
    });
  };

  useEffect(() => {
    renderJwPlayer();
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('resize', renderJwPlayer);
    renderJwPlayer();
    return () => window.removeEventListener('resize', renderJwPlayer);
  }, []);

  return (
    <Box justifyContent="center">
      <div id="player">Please enable Adobe Flash</div>
    </Box>
  );
}

export default Video;
