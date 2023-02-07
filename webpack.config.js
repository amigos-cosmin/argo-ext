const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const groupKind = "aquasecurity.github.io/*";

const config = {
  entry: {
    extension: "./src/index.tsx",
  },
  output: {
    filename: "extensions.js",
    path: __dirname + `/dist/resources/${groupKind}/ui`,
    libraryTarget: "window",
    library: ["extensions", "resources", groupKind],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".ttf", ".scss"],
  },
  externals: {
    react: "React",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          allowTsInNodeModules: true,
          configFile: path.resolve("./src/tsconfig.json"),
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "raw-loader", "sass-loader"],
      },

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css",
    }),
  ],
};

module.exports = config;
