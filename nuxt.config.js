module.exports = {
  babel: {
    "plugins": [
      ["component", [{
          "libraryName": "element-ui",
          "styleLibraryName": "theme-default"
        },
      ]]
    ],
    comments: true
  },
  plugins: ['~plugins/element-ui'],
  css: [
    'element-ui/lib/theme-chalk/index.css',
    { src: '~assets/global.styl', lang: 'stylus' }
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'byrnav',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'byr.moe nav' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['element-ui'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

