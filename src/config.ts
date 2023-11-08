const WEBSITE_SORTS: WebsiteSort[] = [
  { id: 1, title: "个人博客" },
  { id: 2, title: "网盘图床" },
  { id: 3, title: "友情链接" },
];

const WEBSITE_ITEMS: WebsiteItem[] = [
  {
    sortId: 1,
    title: "博客-Notion-Vercel",
    url: "https://www.wpot.top/",
    icon: "https://od.wyy.pp.ua/api/raw/?path=/PIC/avatar.png",
    color: "#0171CD",
  },
  {
    sortId: 1,
    title: "主标题",
    description: "网站描述",
    url: "http://www.your-web-page.com/",
    icon: "",
  },
  {
    sortId: 1,
    title: "主标题",
    description: "网站描述",
    url: "http://www.your-web-page.com/",
    icon: "",
  },
  {
    sortId: 3,
    title: "EsunR Blog",
    description: "EsunR 的博客",
    url: "https://www.esunr.xyz",
    icon: "https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
  },
];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "就是这样的烂诗人",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://www.wpot.top/",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: https://od.wyy.pp.ua/api/raw/?path=/PIC/avatar.png,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/EsunR",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "",
  FOOTER_INFO: false,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * 网站分类列表
   */
  WEBSITE_SORTS,
  /**
   * 网站分类列表
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "就是这样的烂诗人",
    keywords: "就是这样的烂诗人,Blog, 泪眼之前",
    description: "在泪眼之前，忍住不哭.",
  },
};

export default GLOBAL_CONFIG;
