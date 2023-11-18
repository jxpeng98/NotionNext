const CONFIG = {
  FOLIO_HOME_BANNER_ENABLE: true,

  FOLIO_SITE_CREATE_TIME: '2022-07-26', // 建站日期，用于计算网站运行的第几天

  FOLIO_NAME: 'Hello World', // 个人姓名

  FOLIO_BIBLIOGRAPHY: 'I am a Student in the University of Electronic Science and Technology of China.', // 个人简介
  FOLIO_ADDRESS: 'China', // 个人地址
  FOLIO_EMAIL: 'abc@gmail.com', // 个人邮箱
  FOLIO_PHONE: '+123456789', // 个人电话

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  FOLIO_NOTICE_BAR: [
    // { title: '欢迎访问中文版', url: 'https://zh.pengjiaxin.com' },
    { title: 'Academia Page', url: 'https://www.jiaxinpeng.com' },
    { title: 'PLOG', url: 'https://plog.pengjiaxin.com' },
    { title: 'Welcome to English Page', url: 'https://www.pengjiaxin.com' }
  ],

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  FOLIO_INFOCARD_GREETINGS: [
    'Welcome',
    '欢迎',
    'Bienvenue',
    'Benvenuto'
  ],

  FOLIO_INFO_CARD_URL: 'https://github.com/jxpeng98', // 个人资料底部按钮链接

  FOLIO_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  FOLIO_SOCIAL_CARD_TITLE_1: '交流频道',
  FOLIO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  FOLIO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  FOLIO_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  FOLIO_MENU_INDEX: true, // 显示首页
  FOLIO_MENU_CATEGORY: true, // 显示分类
  FOLIO_MENU_TAG: true, // 显示标签
  FOLIO_MENU_ARCHIVE: true, // 显示归档
  FOLIO_MENU_SEARCH: true, // 显示搜索

  FOLIO_POST_LIST_COVER: false, // 列表显示文章封面
  FOLIO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  FOLIO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  FOLIO_POST_LIST_SUMMARY: true, // 文章摘要
  FOLIO_POST_LIST_PREVIEW: false, // 读取文章预览
  FOLIO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  FOLIO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  FOLIO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  FOLIO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  FOLIO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  FOLIO_WIDGET_ANALYTICS: false, // 显示统计卡
  FOLIO_WIDGET_TO_TOP: true,
  FOLIO_WIDGET_TO_COMMENT: true, // 跳到评论区
  FOLIO_WIDGET_DARK_MODE: true, // 夜间模式
  FOLIO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
