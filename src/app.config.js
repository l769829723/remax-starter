const pages = ["pages/index/index"];

module.exports.ali = {
  pages,
  window: {
    defaultTitle: "Ali Mini Program template",
    titleBarColor: "#FFFFFF",
  },
};

module.exports.wechat = {
  pages,
  window: {
    navigationBarTitleText: "WeChat Mini Program template",
    navigationBarBackgroundColor: "#FFFFFF",
    navigationBarTextStyle: "black",
  },
  useExtendedLib: {
    weui: true,
  },
};

module.exports.toutiao = {
  pages,
  window: {
    navigationBarTitleText: "Toutiao Mini Program template",
    navigationBarBackgroundColor: "#FFFFFF",
  },
};

module.exports.web = {
  pages,
  title: "Remax Web Template",
};
