import Card from '../lib/Card';
import MaterialTheme from '../lib/MaterialTheme';
import React from 'react';
import { action } from '@storybook/addon-actions';
import image from './last_thumbnail.jpg';

const data = {
  url: 'https://cs.hipcam.com/cameras/2c3ae85d360c/',
  name: 'SHA - Presidencia',
  uuid: '2c3ae85d360c',
  view_urls: {
    rtmps:
      'rtmps://fls-sa-ey6mpiz8wkcq3sfu.hipcam.com:443/pro/3/2c3ae85d360c',
    hls:
      'https://fls-sa-ey6mpiz8wkcq3sfu.hipcam.com:8080/pro/3/2c3ae85d360c/index.m3u8',
  },
  video_setting: {
    id: 1,
    name: 'high',
    audioBitrate: 64,
    videoBitrate: 800,
    videoFps: 25,
    videoKeyFrame: 8,
    streamWidth: 1920,
    streamHeight: 1080,
    viewWidth: 1920,
    viewHeight: 1080,
    qp_min: 10,
    qp_max: 51,
    default: true,
  },
  streamToken: '14d3be33bf30d694f209bfd26bf2e39b7cc12c7f',
  version: {
    number: 5100,
    hash: '28bed11d508ccd8a85521dc2852fdfbb',
    zipurl: null,
    info: [],
    force: false,
    size: 1024,
  },
  model: {
    slug: 'indoor',
    sale_price: '0.00',
    production_cost: '0.00',
    name: 'indoor',
    port: null,
    url_path: '',
    is_own: true,
    type: 0,
    features: [
      'lights',
      'motion',
      'persons',
      'smart',
      'sound',
      'temperature',
    ],
  },
  streamUrl:
    'rtmps://fls.hipcam.com:443/pro/3/2c3ae85d360c?token=14d3be33bf30d694f209bfd26bf2e39b7cc12c7f',
  timezone: 'America/Argentina/Buenos_Aires',
  date_format: 'dd/MM/YYYY',
  recordingEnabled: true,
  viewURL:
    'rtmps://fls-sa-ey6mpiz8wkcq3sfu.hipcam.com:443/pro/3/2c3ae85d360c',
  liveStatus: {
    music: {
      random: false,
      is_playing: false,
      repeat: 'default',
    },
    pluggedIn: true,
    wifiName: '"SHA Socios"',
    alarm_playing: false,
    from: '2c3ae85d360c',
    country_code: '',
    city: 'Buenos Aires',
    country: 'Argentina',
    temperature: 19,
    version: 5100,
    timezone: 'America/Argentina/Buenos_Aires',
    humidity: 41,
    batteryLevel: 100,
    safeguard: 103,
    wifiSignal: 4,
    longitude: -58.3985481262207,
    latitude: -34.60572814941406,
    last_seen: 1590256224,
    online: true,
  },
  alerts: {
    alarm: false,
    to: [],
    motion_detected: false,
  },
  schedule:
    "[{'end': '09:00', 'name': 'horario reducido', 'enabled': True, 'days': [2, 3, 4, 5, 6, 7, 1], 'date': None, 'uuid': 'cca00fe27d44409a9027534d84b4c2c3', 'start': '00:00'}]",
  timeWaterMark: true,
  regions: {
    region: {
      id: 106,
      points: [
        {
          x: 47.0,
          y: 33.0,
        },
        {
          x: 1079.0,
          y: 33.0,
        },
        {
          x: 1079.0,
          y: 592.0,
        },
        {
          x: 234.0,
          y: 541.0,
        },
      ],
      width: 1080,
      height: 607,
      enabled: true,
      feature: 'smart',
    },
    action: 'update',
  },
  timeline:
    'https://cs.hipcam.com/cameras/2c3ae85d360c/oauth-timeline/',
  scaleTemp: 'c',
  rotate: 0,
  creation_date: '2018-10-14T18:33:40.463663Z',
  last_update: '2020-05-03T21:06:01.931438Z',
  powerLeds: true,
  nightVision: true,
  sleepScreen: false,
  mic: true,
  assistant_mic: true,
  autobalanceQuality: true,
  volume: 10,
  update_need_confirm: false,
  post_confirm_update_version: null,
  babyScreen: false,
  ampm: true,
  bright: 3,
  theme: 'black',
  screenWeather: false,
  screenRoomTemperature: true,
  screenDateTime: false,
  screenDelay: 30.0,
  location: true,
  last_thumbnail: image,
  feature_settings: {
    sound: {
      enabled: false,
      available: true,
    },
    lights: {
      enabled: false,
      available: true,
    },
    smart: {
      enabled: false,
      alarm: false,
      available: true,
    },
    temperature: {
      range: [-6, 48],
      available: true,
      enabled: false,
    },
    'notify-methods': {
      mail: false,
      push: false,
    },
  },
  geofencing: false,
  is_armed: true,
  language: 'es_ar',
  armed: false,
  privacy: false,
  incognito: false,
  resume_wait_time: 0,
  trial_remaining: 0,
  plan_data: {
    renewal: '2019-10-16T12:48:16Z',
    current_until: '2019-10-16T12:48:16Z',
    current_plan: {
      interval: 'month',
      stripe_id: 'gold',
      id: 4,
      name: 'gold',
      category: {
        name: 'gold',
        icon:
          'https://prod-hipcam-img.s3.amazonaws.com/payments/static/opt/rest-api/csrest/payments/static/icons/gold.png?AWSAccessKeyId=AKIATVDFHJH3PIXVWO5K&Signature=P9h2tR8jpz7FzY2sRZodtx1MI1Y%3D&Expires=1590259825',
      },
      features: ['CT', 'HS', 'SR', 'UD', 'VH'],
      plan_free: false,
      default: false,
      storage: 43200,
    },
    future_plan: {
      interval: 'month',
      stripe_id: 'gold',
      id: 4,
      name: 'gold',
      category: {
        name: 'gold',
        icon:
          'https://prod-hipcam-img.s3.amazonaws.com/payments/static/opt/rest-api/csrest/payments/static/icons/gold.png?AWSAccessKeyId=AKIATVDFHJH3PIXVWO5K&Signature=P9h2tR8jpz7FzY2sRZodtx1MI1Y%3D&Expires=1590259825',
        features: ['CT', 'HS', 'SR', 'UD', 'VH'],
      },
      storage: 43200,
    },
    updates_exceeded: false,
    used_storage: 12135,
  },
  skin: null,
  ringtone: null,
  credentials: {
    weather: 'eb64878fe56a228988dfdb04a4944437',
    ipApi: 'KqwEzA0PFqPODci',
    googleLocation: 'AIzaSyBa9qBhusIzFQC8afwKC-3jAilBOd78DHQ',
  },
  hpk_status: {
    status: 'OK',
    current_version: 5100,
    next_version: 5100,
  },
  location_by_user: null,
  is_owner: false,
  users: [
    {
      username: 'jl@hipcam.com',
      id: 3,
      first_name: 'Jony',
      last_name: 'Lemcovich',
      is_owner: true,
    },
    {
      username: '126gumer@gmail.com',
      id: 378,
      first_name: 'Gustavo',
      last_name: 'Mohadeb',
      is_owner: false,
    },
    {
      username: 'edgardoh10@hotmail.com',
      id: 381,
      first_name: 'edgardo',
      last_name: 'Hersztenkraut',
      is_owner: false,
    },
    {
      username: 'itorlasco@gmail.com',
      id: 491,
      first_name: 'Nacho',
      last_name: '',
      is_owner: false,
    },
  ],
};

export default {
  title: 'Card',
  component: Card,
};

export const Card1 = () => (
  <MaterialTheme>
    <Card key={data.uuid} {...data} width={384} height={216} />
  </MaterialTheme>
);
