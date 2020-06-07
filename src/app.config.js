const pages = ["pages/index/index"];

module.exports.ali = {
  pages,
  window: {
    defaultTitle: "WeLearn",
    titleBarColor: "#FFFFFF",
  },
};

module.exports.wechat = {
  pages,
  window: {
    navigationBarTitleText: "WeLearn",
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
    navigationBarTitleText: "WeLearn",
    navigationBarBackgroundColor: "#FFFFFF",
  },
};

module.exports.web = {
  pages,
  title: "Remax Web Template",
};
