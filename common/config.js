'use strict' //eslint-disable-line
const env = (process || { env: 'develop' }).env
const ENV = env.ENV || 'dev'

const LOCALHOST = env.LOCALHOST_IP || '0.0.0.0'

const config = {}

// env     = full name of the environment
// host    = where the server is served
// apphost = where client is served
// api     = where the api is served
// minify  = where to minify everything and create single bundle (or keep two separate, non-minified bundles)
// www     = cordova web folder

switch (ENV) {
  case 't':
  case 'test':
    config.env = 'test'
    config.host = 'http://' + LOCALHOST + ':3001/'
    config.apphost = 'http://' + LOCALHOST + ':8080/'
    config.minify = false
    break

  case 'd':
  case 'dev':
  case 'development':
    config.env = 'development'
    config.host = 'http://' + LOCALHOST + ':3000/'
    config.minify = false
    break

  case 'p':
  case 'prod':
  case 'production':
    config.env = 'production'
    config.host = '' // 'https://.herokuapp.com/';
    config.minify = true
    config.dbUri = env.MONGODB_URI
    break

  default:
    throw Error('Invalid environment (ENV): ' + ENV)
}

config.api = config.host + 'api'

export default config
