const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: ["postcss-preset-env", tailwindcss],
  use: [
    "style-loader",
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            [
              "postcss-preset-env",
              {
                // Options
              },
            ],
          ],
        },
      },
    },
  ],
};
