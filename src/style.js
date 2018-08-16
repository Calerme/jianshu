import { injectGlobal } from 'styled-components'

injectGlobal`
* {
  box-sizing: border-box;
}

html {
  font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
}

@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1534402633159'); /* IE9*/
  src: url('./static/iconfont.eot?t=1534402633159#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./static/iconfont.ttf?t=1534402633159') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./static/iconfont.svg?t=1534402633159#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
