// import { NavbarOptions } from '@vuepress/theme-default'

export const sidebarZh = [
  {
    text: '快速入门',
    children: [
      {
        text: '安装与配置',
        link: '/guide/getting-started.md',
      },
      {
        text: '基础操作',
        link: '/guide/basics/',
      },
    ],
  },
  {
    text: '常见问题',
    link: '/faq/',
  },
  {
    text: '文档',
    children: [
      {
        text: 'API 参考',
        link: '/docs/api/',
      },
      {
        text: '组件使用',
        link: '/docs/components/',
      },
      {
        text: '主题定制',
        link: '/docs/theme/',
      },
    ],
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
    text: '深入了解',
    children: [
      {
        text: '架构设计',
        link: '/advanced/architecture/',
      },
      {
        text: '插件开发',
        link: '/advanced/plugin-development/',
      },
      {
        text: '主题扩展',
        link: '/advanced/theme-extension/',
      },
    ],
  },
  {
    text: '支持与反馈',
    link: '/support/',
  },
  {
    text: '资源链接',
    children: [
      {
        text: '官方文档',
        link: 'https://v2.vuepress.vuejs.org/zh/',
      },
      {
        text: 'GitHub 仓库',
        link: 'https://github.com/vuepress/vuepress-next',
      },
      {
        text: '社区交流',
        link: 'https://discord.com/invite/HBherRA',
      },
    ],
  },
]
