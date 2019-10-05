/**
 * global HM_ID, IGNORE_HASH 
 */

export default ({ router }) => {
    if(process.env.NODE_ENV === 'production' && HM_ID && typeof window !== 'undefined') {
        let last_url = window.location.pathname;
        window._hmt = window._hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?" + HM_ID;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();

        router.afterEach(function(to) {
            let current = to.fullPath;
            if (IGNORE_HASH) {
                current = to.path;
                if (last_url === current) {
                    return;
                }
                last_url = current;
            }
            _hmt.push(['_trackPageview', current])
        })
    }
}