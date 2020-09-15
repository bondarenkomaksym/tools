module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    //правила по которым вебпак обрабатывает файлы и расширения этих файлов
    rules: [
      {
        test: /.s?css$/,
        //лоадеры работают справа на лево
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /.(jpg|png)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[name].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
};
