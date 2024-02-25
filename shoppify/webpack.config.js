const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
 entry: path.resolve(__dirname, "src/index.js"), 
 mode:"development",
 output:{
    path: path.resolve(__dirname, "dist"),
    filename:"[name].bundle.js"
 },
 devServer:{
    port:3000
 },
 module:{
    rules:[
        {
            test: /\.(js|jsx)?$/,
            exclude:/node_modules/,
            use:[{
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env", "@babel/preset-react"],
                },
              }]
        }
    ]
 },
 plugins:[
    new HtmlWebpackPlugin(
        {
            template: path.resolve(__dirname, "src/index.html")
        }
    ),
    new ModuleFederation({
      name: "shoppify",
      remotes:{
        Components: "Components@http://localhost:3001/remoteEntry.js" 
      }
    })
 ],
 resolve: {
    extensions: [".js", ".jsx"],
  }
}