module.exports = {
  plugins: [require("autoprefixer"), require("postcss-nested"), require("postcss-pxtorem")({
      rootValue: 16,
      propList: ["*"]
  })]
};
