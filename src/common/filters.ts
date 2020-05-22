import { SettingsStates } from "./types";

export const filters = [
  {
    name: 'Viewport',
    id: 'viewport',
    content: (obj: SettingsStates) => `<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">`,
    location: 'head',
    settings: []
  },
  {
    name: 'Favicon',
    id: 'favicon',
    content: (obj: SettingsStates) => {
      return `<link rel="icon" type="image/${obj.type || 'png'}" href="${obj.filepath || 'favicon.png'}">`;
    },
    location: 'head',
    settings: [
      {
        id: 'type',
        name: 'Type',
        inputType: 'text',
        default: 'png'
      },
      {
        id: 'filepath',
        name: 'Filepath',
        inputType: 'text',
        default: 'favicon.png'
      }
    ]
  },
  {
    name: 'Google Web Fonts',
    id: 'googlefonts',
    content: (obj: SettingsStates) => `<link href="https://fonts.googleapis.com/css?family=font1|font2|font3&display=swap" rel="stylesheet">`,
    location: 'head',
    settings: []
  },
  {
    name: 'Linked CSS Stylesheet',
    id: 'css-l',
    content: (obj: SettingsStates) => {
      return `<link rel="stylesheet" href="${obj.filepath || 'index.css'}">`;
    },
    location: 'head',
    settings: [
      {
        id: 'filepath',
        name: 'Filepath',
        inputType: 'string',
        default: 'index.css'
      }
    ]
  },
  {
    name: 'Embedded CSS',
    id: 'css-e',
    content: (obj: SettingsStates) => `<style type="text/css"> \n    /* Enter your CSS here */ \n  </style>`,
    location: 'head',
    settings: []
  },
  {
    name: 'JQuery',
    id: 'jquery',
    content: (obj: SettingsStates) => `<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>`,
    location: 'head',
    settings: []
  },
  {
    name: 'Linked JavaScript',
    id: 'js-l',
    content: (obj: SettingsStates) => {
      return `<script type="text/javascript" src="${obj.filepath || 'index.js'}"></script>`;
    },
    location: 'head',
    settings: [
      {
        id: 'filepath',
        name: 'Filepath',
        inputType: 'string',
        default: 'index.js'
      }
    ]
  },
  {
    name: 'Embedded JavaScript',
    id: 'js-e',
    content: (obj: SettingsStates) => `<script type="text/javascript"> \n    /* Enter your JS here */ \n  </script>`,
    location: 'body',
    settings: []
  },
]
