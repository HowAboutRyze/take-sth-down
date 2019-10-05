# baidu-analytics

> 百度统计的 vuepress 插件

## Usage

``` js
module.exports = {
    plugins: [
        [
            require('./plugins/baidu-analytics'),
            {
                hm: '5f6af0a56893d05dabfd315d9e5336d6',
                ignore_hash: true,
            }
        ],
        // other plugins
    ]
}
```

## Options

### hm

- Type: `string`
- Default: `undefined`

百度统计的 `siteId`

### ignore_hash

- Type: `booleam`
- Default: `false`

如果设置为 `true`，则同一页面下不同哈希值不会重复统计。