# {{ name }}

> {{ description }}

## getting start

```bash
npm install
```

## file structure

* `src/*`: all source code
* `app.js`: entrance of the Jud page
* `build/*`: some build scripts
* `dist/*`: where places generated code
* `assets/*`: some assets for Web preview
* `index.html`: a page with Web preview and qrcode of Jud js bundle
* `jud.html`: Web render
* `.babelrc`: babel config (preset-2015 by default)
* `.eslintrc`: eslint config (standard by default)

## npm scripts

```bash
# build both two js bundles for Jud and Web
npm run build

# build the two js bundles and watch file changes
npm run dev

# start a Web server at 8080 port
npm run serve

# start jud-devtool for debugging with native
npm run debug
```

## notes

You can config more babel, ESLint and PostCSS plugins in `webpack.config.js`.
