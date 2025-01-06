import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { navbarZh,sidebarZh, } from './configs/index.js'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'PF-GUGUBot',
  description: 'PFingan服务器 MCDR的QQ机器人插件，集QQ群管理和白名单管理一体，添加许多功能。',

  theme: defaultTheme({
    logo: '/logo.svg',
    navbar: navbarZh,
    sidebar: sidebarZh,
  }),

  bundler: viteBundler(),
})
