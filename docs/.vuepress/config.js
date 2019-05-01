module.exports = {
  title: '一蓑烟雨、汪汪汪',
  description: '一蓑烟雨、汪汪汪的个人站点',
  sidebarDepth: 2,
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '前端面试之道',link: '/interview/'},
      { text: 'JavaScript书籍', items: [
          { text: '你不知道的JavaScript(上)', link: '/books/你不知道的javascript/你不知道的javascript上'}, 
          { text: '你不知道的JavaScript(中)', link: '/books/你不知道的javascript/你不知道的javascript中'}
        ]
      },
      { text: 'JavaScript设计模式', link: '/designPattern/'},
      { text: '数据结构和算法', link: '/algorithm/'},
      { text: 'Vue.js', items: [
        { text: 'Vue基础知识', link: '/vue/' },
        { text: 'Vue原理剖析', link: '/vue/principle.md' }
      ]},
      { text: 'Webpack',link: '/webpack/'},
      // { text: 'CSS奇淫技巧',link: '/css/'},
      { text: 'Git',link: '/git/'},
      { text: 'Github',link: 'https://github.com/wangtunan/blog'}
  ]}
}