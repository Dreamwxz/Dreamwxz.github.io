// import { NavbarOptions } from '@vuepress/theme-default'

export const navbarZh = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '使用指南',
    link: '/guide/',
  },
  {
    text: '常见问题',
    link: '/faq/',
  },
  {
    text: `了解最新版`,
    children: [
      {
        text: '更新日志',
        link: 'https://github.com/vuepress/core/blob/main/CHANGELOG.md',
      },
      {
        text: '下载最新版',
        link: 'https://github.com/LoosePrince/PF-GUGUBot/releases',
      },
    ],
  },
  {
    text: '支持与反馈',
    link: '/faq/',
  },
  {
    text: 'Github',
    link: 'https://github.com/LoosePrince/PF-GUGUBot',
  },
]