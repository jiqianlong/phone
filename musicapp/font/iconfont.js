;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-207" viewBox="0 0 1025 1024">'+
      ''+
      '<path d="M674.769775 864.317688l-446.337431 0c-1.987356 0-3.970619-0.212858-5.912947-0.635504-3.182635-0.691788-19.852069-4.985787-35.627091-21.617357-13.22175-13.940146-28.981422-40.231166-28.981422-86.315925 0-70.074253-0.453346-568.868877-0.464603-581.584066-0.045028-3.433357 0.02149-22.315285 6.358106-43.135449 10.102563-33.195599 31.593024-55.261185 60.517138-62.128923 2.107089-0.500421 4.267392-0.753189 6.432811-0.753189l518.717304 0c0.680531 0 1.362086 0.024561 2.041594 0.074705 2.712915 0.199554 27.236601 2.31483 52.451052 14.930754 37.027041 18.526824 57.417395 50.765586 57.417395 90.778777 0 87.514274 0.105406 531.204285 0.106429 535.676348 0.002047 8.467242-3.851909 16.47602-10.467901 21.760627l-158.878978 126.864331C687.206612 862.173759 681.082854 864.317688 674.769775 864.317688zM233.483625 808.642044l431.536644 0 140.78708-112.419672c-0.01842-75.190006-0.104382-443.407565-0.104382-522.290861 0-18.472586-8.102927-31.309555-25.502014-40.397973-13.848044-7.234099-28.528075-9.297183-32.103679-9.710618l-513.376413 0c-21.115913 7.976031-21.616334 49.090353-21.6061 49.518116 0.005117 0.188297 0.007163 0.376595 0.007163 0.564892 0.00307 5.104496 0.46358 511.195643 0.46358 581.841952C213.584482 794.057184 228.033235 805.638496 233.483625 808.642044z"  ></path>'+
      ''+
      '<path d="M487.981851 227.7907l-188.297373 0c-16.95495 0-30.700659-13.745708-30.700659-30.700659s13.745708-30.700659 30.700659-30.700659l188.297373 0c16.95495 0 30.700659 13.745708 30.700659 30.700659S504.937825 227.7907 487.981851 227.7907z"  ></path>'+
      ''+
      '<path d="M721.306857 383.340703l-421.622378 0c-16.95495 0-30.700659-13.745708-30.700659-30.700659s13.745708-30.700659 30.700659-30.700659l421.622378 0c16.95495 0 30.700659 13.745708 30.700659 30.700659S738.26283 383.340703 721.306857 383.340703z"  ></path>'+
      ''+
      '<path d="M721.306857 534.797286l-421.622378 0c-16.95495 0-30.700659-13.745708-30.700659-30.700659s13.745708-30.700659 30.700659-30.700659l421.622378 0c16.95495 0 30.700659 13.745708 30.700659 30.700659S738.26283 534.797286 721.306857 534.797286z"  ></path>'+
      ''+
      '<path d="M631.251591 796.776239c-16.95495 0-30.700659-13.745708-30.700659-30.700659l0-126.896055c0-16.95495 13.745708-30.700659 30.700659-30.700659l130.989477 0c16.95495 0 30.700659 13.745708 30.700659 30.700659s-13.745708 30.700659-30.700659 30.700659l-100.288818 0 0 96.195397C661.95225 783.031554 648.207565 796.776239 631.251591 796.776239z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
