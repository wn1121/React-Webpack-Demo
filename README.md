####Build Setup test
```bash
npm install
npm run start
npm run dev
```

##依赖详细
###react+webpack
```bash
npm init
npm install webpack --save-dev
npm install react react-dom --save-dev
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
npm install webpack-dev-server --save-dev
```
###sass-loader
```bash
npm install --save-dev css-loader
npm install --save-dev style-loader
npm install --save-dev node-sass
npm install --save-dev sass-loader
```
###postcss-loader 自动给 css 添加浏览器内核前缀
```bash
npm install postcss-loader precss autoprefixer --save-dev
```

###webpack-spritesmith
```bash
npm install --save-dev spritesheet-templates
npm install --save-dev webpack-spritesmith
```