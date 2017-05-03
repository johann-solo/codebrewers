const brandColour = '#E74C3C';

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'The CodeBrewers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We build websites that are fast, secure and captivating' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css',
    { src: '~assets/css/main.sass', lang: 'sass' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: brandColour }
}
