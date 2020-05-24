import { Helmet } from 'react-helmet';
import React from 'react';

function hel() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/jwplayer/5.10/jwplayer.js"
      ></script>
    </Helmet>
  );
}

export default hel;
