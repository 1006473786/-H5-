import type { Options } from './type'
import type { Plugin } from 'postcss'
const defaultOptions = {
    viewPortWidth: 375, // 看用的几倍图，这里width按照375px
    mediaQuery: false,
    unitToConvert:'px'
}
export const pxToViewport = (options: Options = defaultOptions): Plugin => {
    const opt = Object.assign({}, defaultOptions, options)
    return {
        postcssPlugin: 'postcss-px-to-viewport',
        //css节点都会经过这个钩子
        Declaration(node) {
            const value = node.value
            //匹配到px 转换成vw
            if (value.includes(opt.unitToConvert)) {
                const num = parseFloat(value)
                const transformValue = (num / opt.viewPortWidth) * 100
                node.value = `${transformValue.toFixed(2)}vw` //转换之后的值
            }    
        },
    }
}

