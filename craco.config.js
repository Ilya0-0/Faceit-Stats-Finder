const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@components": resolvePath("./src/Components"),
      "@styles": resolvePath("./src/styles"),
      "@hooks": resolvePath("./src/hooks"),
    },
  },
};
