/// <reference path="./typings.d.ts" />

import {
  FileBox,
}             from 'wechaty-puppet'

import type { PuppetOAOptions } from './puppet-oa.js'
import { packageJson } from './package-json.js'

const VERSION = packageJson.version || '0.0.0'

const CHATIE_OFFICIAL_ACCOUNT_QRCODE = 'http://weixin.qq.com/r/qymXj7DEO_1ErfTs93y5'

function qrCodeForChatie (): FileBox {
  return FileBox.fromQRCode(CHATIE_OFFICIAL_ACCOUNT_QRCODE)
}

function envOptions (): Partial<PuppetOAOptions> {
  /* eslint-disable sort-keys */
  return {
    appId               : process.env['WECHATY_PUPPET_OA_APP_ID'],
    appSecret           : process.env['WECHATY_PUPPET_OA_APP_SECRET'],
    personalMode        : !!process.env['WECHATY_PUPPET_OA_PERSONAL_MODE'],
    port                : process.env['WECHATY_PUPPET_OA_PORT'] ? parseInt(process.env['WECHATY_PUPPET_OA_PORT']) : undefined,
    token               : process.env['WECHATY_PUPPET_OA_TOKEN'],
    webhookProxyUrl     : process.env['WECHATY_PUPPET_OA_WEBHOOK_PROXY_URL'],
    accessTokenProxyUrl : process.env['WECHATY_PUPPET_OA_ACCESS_TOKEN_PROXY'],
  }
}

export {
  qrCodeForChatie,
  envOptions,
  VERSION,
}
