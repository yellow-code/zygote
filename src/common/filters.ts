export const filters = [
  {
    name: 'CSS Stylesheet',
    id: 'css',
    content: {
      embedded: {
        pre: '<style type="text/css">',
        post: '</style>',
        location: 'head',
      },
      link: {
        pre: '<link rel="stylesheet" href="',
        post: '">',
        filename: 'index.css',
        location: 'head',
      }
    },
  },
  {
    name: 'JavaScript',
    id: 'js',
    content: {
      embedded: {
        pre: '<script type="text/javascript">',
        post: '</script>',
        location: 'body'
      },
      link: {
        pre: '<script type="text/javascript" src="',
        post: '"></script>',
        location: 'head',
        filename: 'index.js'
      }
    },
  },
  {
    name: 'Favicon',
    id: 'favicon',
    content: {
      ico: {
        pre: '<link rel="icon" type="image/x-icon" href="',
        post: '">',
        location: 'head',
        filename: 'favicon.ico'
      },
      png: {
        pre: '<link rel="icon" type="image/png" href="',
        post: '">',
        location: 'head',
        filename: 'favicon.png',
      },
      gif: {
        pre: '<link rel="icon" type="image/gif" href="',
        post: '">',
        location: 'head',
        filename: 'favicon.gif',
      }
    },
  },
  {
    name: 'Viewport',
    id: 'viewport',
    content: '<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">',
    location: 'head'
  },
  {
    name: 'Google Web Fonts',
    id: 'googlefonts',
    content: {
      pre: '<link href="https://fonts.googleapis.com/css?family=',
      post: '&display=swap" rel="stylesheet">',
      location: 'head',
      filename: 'Open+Sans'
    },
  },
  {
    name: 'JQuery',
    id: 'jquery',
    content: '<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>',
    location: 'head'
  },
]
