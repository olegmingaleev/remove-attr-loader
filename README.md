# remove-attr-loader

Webpack loader. Removed specified HTML attributes

## Install

```bash
npm i -D remove-attr-loader
```

## Usage

Add the loader in your webpack config. For example:

**webpack.config.js**

```javascript
    module.exports = {
        module: {
            rules: {
                test: '/\.html$/',
                loader: 'remove-attr-loader',
                options: {
                    attributes: [
                        /ng-.+/,
                        /automation-id/
                    ]
                }
            }
        }
    }
```

## Licence

MIT (http://www.opensource.org/licenses/mit-license.php)