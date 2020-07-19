# Installation developer environment

Install the dependencies and dev dependencies

## Dependencies

npm i react react-dom react-helmet

## Development Dependencies

### Sass (CSS with superpowers)

```sh
npm i -D sass
```

### Babel

```sh
npm i -D @babel/core @babel/preset-env @babel/preset-react
```

### Webpack

```sh
npm i -D webpack webpack-cli webpack-dev-server
```

### Webpack Loaders and plugins

```sh
npm i -D babel-loader file-loader html-webpack-plugin sass-loader css-loader svg-inline-loader mini-css-extract-plugin
```

### Loaders

| Loaders           | README |
| ----------------- | ------ |
| babel-loader      | readme |
| file-loader       | readme |
| sass-loader       | readme |
| css-loader        | readme |
| svg-inline-loader | readme |

### Plugins

| Plugins                 | README |
| ----------------------- | ------ |
| html-webpack-plugin     | readme |
| mini-css-extract-plugin | readme |

# Scripts

Start scripts at different environments

## Development

```sh
npm run build:dev
npm run server:dev
```

## Production

```sh
npm run build
```
