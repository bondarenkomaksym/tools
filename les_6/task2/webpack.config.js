module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    //правила по которым вебпак обрабатывает файлы и расширения этих файлов
    rules: [
      {
        test: /.js$/,
        //лоадеры работают справа на лево
        use: ["babel-loader"],
      },
    ],
  },
};
