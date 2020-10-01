/**
 * 尝试 SEO
 */

import titlechange from './titlechange';

export default (Vue, siteData, currentRouter) => {
    if (typeof window === 'undefined') {
        return;
    }
    let currentPageArr, descriptionMeta, head, keywordsMeta, defaultKeywords;

    defaultKeywords = 'html,css,js,vue,react,webpack,git';

    descriptionMeta = document.getElementsByName('description')[0];
    currentPageArr = siteData.pages.filter(p => p.path === currentRouter.path);

    // 改<meta name="description" content="">的content
    currentPageArr.length && currentPageArr[0].frontmatter && currentPageArr[0].frontmatter.abstract && (descriptionMeta.content = currentPageArr[0].frontmatter.abstract);
    
    // 改title
    titlechange(document.title);

    // 改<meta name="keywords" content="">
    if(document.getElementsByName('keywords').length) {
        keywordsMeta = document.getElementsByName('keywords')[0];
        if(currentPageArr[0].frontmatter.tags) {
            keywordsMeta.content = currentPageArr[0].frontmatter.tags.join(',');
        } else {
            keywordsMeta.content = defaultKeywords;
        }
    } else {
        head = document.getElementsByTagName('head');
        keywordsMeta = document.createElement('meta');
        keywordsMeta.name = 'keywords';
        if(currentPageArr[0].frontmatter.tags) {
            keywordsMeta.content = currentPageArr[0].frontmatter.tags.join(',');
        } else {
            keywordsMeta.content = defaultKeywords;
        }
        head[0].appendChild(keywordsMeta)
    }
}

