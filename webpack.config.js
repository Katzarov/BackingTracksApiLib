import path from "path";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "backing-tracks-api.js",
    path: path.resolve("dist"),
    library: {
      name: "BackingTracksApi",
      type: "commonjs-module",
    },
  },
};
