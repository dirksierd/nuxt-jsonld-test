// https://nuxt.com/docs/api/configuration/nuxt-config

import { env, nodeless, cloudflare } from 'unenv'
const prodEnv = env(nodeless, cloudflare, {})
const devEnv = env({}, {}, {})

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  nitro: {
    unenv: process.env.NODE_ENV === 'development' ? devEnv : prodEnv,
  },
  modules: ['nuxt-security']
})
