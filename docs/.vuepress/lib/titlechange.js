/**
 * 骚操作，在浏览器切换其他tab时，把title换成自定义句子
 *      容我插会儿腰     <(￣︶￣)>
 */
export default () => {
    let documentTitle = document.title;
    document.addEventListener("visibilitychange", () => {
        document.title = "hidden" === document.visibilityState ? "快回来看我！(╯°Д°)╯︵ ┻━┻" : "take-sth-down"
    })
}