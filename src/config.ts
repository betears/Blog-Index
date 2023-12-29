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
    icon: "https://pic.wyiyy.eu.org/file/72f018ab8ea99f1aadbf9.png",
    color: "#0171CD",
  },
    {
    sortId: 1,
    title: "博客-Notion-Vercel",
    url: "https://b.wpot.top/",
    icon: "https://pic.wyiyy.eu.org/file/72f018ab8ea99f1aadbf9.png",
    color: "#0171CD",
  },
  {
    sortId: 1,
    title: "博客-Notion-Vercel",
    url: "http://www.free.hr/",
    icon: "https://pic.wyiyy.eu.org/file/72f018ab8ea99f1aadbf9.png",
    color: "#DDF4FF",
  },
  {
    sortId: 1,
    title: "博客-Notion-Vercel",
    url: "http://wyiyy.eu.org/",
    icon: "https://pic.wyiyy.eu.org/file/72f018ab8ea99f1aadbf9.png",
  },
       {
    sortId: 1,
    title: "博客-Gridea-CloudflarePages",
    url: "http://aal.hr/",
    icon: "https://pic.wyiyy.eu.org/file/72f018ab8ea99f1aadbf9.png",
    color: "#74A99C",
  },
  {
    sortId: 1,
    title: "博客-Gridea-Vercel",
    url: "http://yiyy.eu.org/",
    icon: "https://pic.wyiyy.eu.org/file/72f018ab8ea99f1aadbf9.png",
  },
    {
    sortId: 1,
    title: "打赌的耳朵-google-blogger",
    url: "https://blog.wpot.top/",
    icon: "",
  },
      {
    sortId: 1,
    title: "就是这样的烂诗人-heliohost",
    url: "https://one.wpot.top/",
    icon: "",
  },
        {
    sortId: 1,
    title: "今日热点新闻-vercel",
    url: "https://read.hr/",
    icon: "",
  },
    {
    sortId: 2,
    title: "图床",
    url: "https://pic.wpot.top/",
    icon: "",
    color: "#0171CD",
  },
  {
    sortId: 2,
    title: "图床",
    url: "https://pic.wyiyy.eu.org/",
    icon: "",
    color: "#0171CD",
  },
    {
    sortId: 2,
    title: "OneDrive网盘",
    url: "https://od.wyy.pp.ua/",
    icon: "",
    color: "#0171CD",
  },
    {
    sortId: 2,
    title: "导航",
    url: "https://dh.wyy.pp.ua/",
    icon: "",
    color: "#0171CD",
  },
  {
    sortId: 3,
    title: "EsunR Blog",
    description: "EsunR 的博客",
    url: "https://www.esunr.xyz",
    icon: "https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
  },
   {
    sortId: 3,
    title: "Sink.Blog",
    description: "Sink.Blog",
    url: "https://blog.5ink.cc",
    icon: "",
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
  LOGO_URL: "https://pic.wyiyy.eu.org/file/72f018ab8ea99f1aadbf9.png",
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/EsunR",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "",
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
