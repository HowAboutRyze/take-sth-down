const path = require('path');

module.exports = (options = {}, ctx) => ({
    define() {
        const { siteConfig = {} } = ctx;
        const hm = options.hm || siteConfig.hm;
        const HM_ID = hm || false;
        const IGNORE_HASH = (options.ignore_hash || siteConfig.ignore_hash) || false;
        return { HM_ID, IGNORE_HASH };
    },
    enhanceAppFiles: [
        path.resolve(__dirname, 'inject.js'),
    ]
})