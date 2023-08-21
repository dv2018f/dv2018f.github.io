/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1c9aac032aa7b73185b8add750be66a8"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/image-20230331220454586-1692265484651.bffd1b5f.png",
    "revision": "bffd1b5f46a82489ff48152403802b58"
  },
  {
    "url": "assets/img/image-20230508141743625.edd87461.png",
    "revision": "edd874616e6ca4e61e1cf87907a36ef3"
  },
  {
    "url": "assets/img/image-20230508143345112.bbe84740.png",
    "revision": "bbe847400d50bc169b0ede174a1a2e6a"
  },
  {
    "url": "assets/img/image-20230508143526209.c0cdbe58.png",
    "revision": "c0cdbe58a95c3f83f84151b101d0b3fa"
  },
  {
    "url": "assets/img/image-20230508143735046.07160d98.png",
    "revision": "07160d9847d3efbec68645152bfea96b"
  },
  {
    "url": "assets/img/image-20230508162025990.0de42961.png",
    "revision": "0de4296137076a0a61d24f9401f811f0"
  },
  {
    "url": "assets/img/image-20230817135104286.61498121.png",
    "revision": "614981216dbef930a2ab5574787e6076"
  },
  {
    "url": "assets/img/image-20230817140002437.491cd8e3.png",
    "revision": "491cd8e35dd51c21f0a7307cd293a861"
  },
  {
    "url": "assets/img/image-20230817140310516.03661455.png",
    "revision": "036614559678572f9f7d1a11e15dfa96"
  },
  {
    "url": "assets/img/image-20230817140352658.9800a8ce.png",
    "revision": "9800a8ce09b5577a708032c65af2833e"
  },
  {
    "url": "assets/img/image-20230817140433772.c1febccb.png",
    "revision": "c1febccb562dcca52c4e97799aa4109a"
  },
  {
    "url": "assets/img/image-20230817140545598.cb0857f3.png",
    "revision": "cb0857f38fb6983aa2c7816a75319bc9"
  },
  {
    "url": "assets/img/image-20230817142053092.196c8f7c.png",
    "revision": "196c8f7cc99bc80625ceecbd7a37512a"
  },
  {
    "url": "assets/img/image-20230817142137863.1faf7f0b.png",
    "revision": "1faf7f0ba0fc551191c98eb065889d36"
  },
  {
    "url": "assets/img/image-20230817142244123.19c93cf4.png",
    "revision": "19c93cf48ab45a2898c9aa74710d1cb5"
  },
  {
    "url": "assets/img/image-20230817142315032.ad963b76.png",
    "revision": "ad963b76b2142d450b468957ab85d35e"
  },
  {
    "url": "assets/img/image-20230817142349384.0cea24c5.png",
    "revision": "0cea24c5e343c5c2d19f4f11002daa52"
  },
  {
    "url": "assets/img/image-20230817142413961.57b325b4.png",
    "revision": "57b325b4319ebd425d46965c033c6ba3"
  },
  {
    "url": "assets/img/image-20230817142442063.8835b155.png",
    "revision": "8835b1558dbfc6b287c8e1a415d533d9"
  },
  {
    "url": "assets/img/image-20230817142512981.b1f90765.png",
    "revision": "b1f907659e55790023dc5223a662d8ff"
  },
  {
    "url": "assets/img/image2023-4-10_10-54-5.ad30c73c.png",
    "revision": "ad30c73c3f8662fe6377c9fd9d8249dd"
  },
  {
    "url": "assets/img/image2023-4-10_16-41-17.a29e66b3.png",
    "revision": "a29e66b3b58edefedf1968338169f391"
  },
  {
    "url": "assets/img/image2023-4-11_18-3-38.b44a4050.png",
    "revision": "b44a40502fae687c7f783e496de01483"
  },
  {
    "url": "assets/img/image2023-4-3_14-49-30.a7d4ec47.png",
    "revision": "a7d4ec4780ecca247b82a64bdd438bc1"
  },
  {
    "url": "assets/img/image2023-4-3_16-55-24.1fdf4a0a.png",
    "revision": "1fdf4a0afe50f166dcd15fce049c49cf"
  },
  {
    "url": "assets/img/image2023-4-3_18-15-18.80643006.png",
    "revision": "8064300670ac5655c9d1a71568ab50c5"
  },
  {
    "url": "assets/img/image2023-4-4_14-11-9.abb29c3f.png",
    "revision": "abb29c3f74c9951c8d6a652dbba339b9"
  },
  {
    "url": "assets/img/image2023-4-4_14-13-47.21e97c4a.png",
    "revision": "21e97c4aef503be91e48535b3970e8fa"
  },
  {
    "url": "assets/img/paixu.cc526703.png",
    "revision": "cc5267036da0bff01670b4ebb327fdb5"
  },
  {
    "url": "assets/img/spi01.5865bcd8.png",
    "revision": "5865bcd82a5f3752232c63932f83b99a"
  },
  {
    "url": "assets/img/spi03.7ef86f63.png",
    "revision": "7ef86f63d3fd723644cfa81b114dbd31"
  },
  {
    "url": "assets/img/spi04.8d557ea3.png",
    "revision": "8d557ea3809d611197d8630f77a92c32"
  },
  {
    "url": "assets/img/spi05.9bdf8685.png",
    "revision": "9bdf868596b943b90bcd2b76664ef1b1"
  },
  {
    "url": "assets/js/1.dee12e52.js",
    "revision": "5ae6fbc10754afc622a1c78d59260560"
  },
  {
    "url": "assets/js/10.7cb23ded.js",
    "revision": "1b2a0b12fa280b281dc6b706b7e8cd5e"
  },
  {
    "url": "assets/js/11.3c0e6cff.js",
    "revision": "27e7fd780c9099f947ff7cee9a8ac74e"
  },
  {
    "url": "assets/js/12.9a98cc53.js",
    "revision": "f0339ddf3fc43ff2087ed9a07e9794f6"
  },
  {
    "url": "assets/js/13.be2e261a.js",
    "revision": "eefb62ed7c0727d6d1b3d3a14326d858"
  },
  {
    "url": "assets/js/14.39e712f1.js",
    "revision": "d7ee83872f3e6152c2622783cd98d5af"
  },
  {
    "url": "assets/js/15.6f34a449.js",
    "revision": "fb36babd6f06f825596d98ea25a0849b"
  },
  {
    "url": "assets/js/16.5a265be9.js",
    "revision": "87b853dbbfeeb29855882ebc207581ab"
  },
  {
    "url": "assets/js/17.5e66ecff.js",
    "revision": "7386d3d1c85e4bff9da54eb910afcbf8"
  },
  {
    "url": "assets/js/18.295df760.js",
    "revision": "53da912c2771b7ebfdab61af58403457"
  },
  {
    "url": "assets/js/19.9901ba74.js",
    "revision": "77db8b932cee169277a70ed676487e9b"
  },
  {
    "url": "assets/js/20.850e9636.js",
    "revision": "0bb27fdc00926184b2f2fa40c6c73368"
  },
  {
    "url": "assets/js/21.6366be06.js",
    "revision": "38e9194b5c62383dd9a9aec051cebcef"
  },
  {
    "url": "assets/js/22.35a889d2.js",
    "revision": "687f35c56a357202294cc2298aab6dd3"
  },
  {
    "url": "assets/js/4.5c1b3a6f.js",
    "revision": "f7910d41adae3be2df211c6e12cb2d01"
  },
  {
    "url": "assets/js/5.21d8025e.js",
    "revision": "067b7c93be8f9bdfe7c9175f0a92b0dd"
  },
  {
    "url": "assets/js/6.04490967.js",
    "revision": "85df4e1cd71075ccad57a536c3e2080b"
  },
  {
    "url": "assets/js/7.d2977ab4.js",
    "revision": "cb614665d97825dccfaf522ea2332bfa"
  },
  {
    "url": "assets/js/8.7985293c.js",
    "revision": "58bf27e34ed97092b6bcee3462659a3a"
  },
  {
    "url": "assets/js/9.addcb2d4.js",
    "revision": "e69c4f04e04d9fb795dcd3f70e74136e"
  },
  {
    "url": "assets/js/app.fbba6942.js",
    "revision": "646d13421a02061b99b4d24451c2ba19"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.529f4ac8.js",
    "revision": "823150742c17267bb2338e3e5216cd46"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "ff5e98240c8fd06e3975a36f6e4fad52"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "e3ee379dc875cf9a106c6ffb5ca6756c"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "0c24f4f59a160bdede12193534bf72ad"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7641320c830869d5d95956f0bb523ef2"
  },
  {
    "url": "categories/工作随笔/index.html",
    "revision": "edd0b629de5dee42132fb32c46d976d9"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "67d1008014d7b165d3391b47a78d1dad"
  },
  {
    "url": "css/style.css",
    "revision": "e11eec74f3d0d1b2430f651360cdec67"
  },
  {
    "url": "guide/index.html",
    "revision": "49a7815cd8a1d3eff8ada50c698dd682"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/dvsc_logo.svg",
    "revision": "6ca5a4332a3d0e3042803ae689b1548d"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "img/xingkong01.jpg",
    "revision": "b8eb99e653426d0bf01fa4f803e0a44f"
  },
  {
    "url": "index.html",
    "revision": "7efdeb1f0cb584242ed89018cf0979c9"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "8e63f78655ec8637a1b2cff5abc33742"
  },
  {
    "url": "tags/AI/index.html",
    "revision": "06ec7b694078c80b6a493fb81c24f853"
  },
  {
    "url": "tags/chatGPT/index.html",
    "revision": "485bd3628aab69a4b069baaeae4429ae"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "e48480279769f36d2786a30a361bcfd2"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "33ce8b7eed0f413fb2714b87494079e1"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c9ea173518d71c3602af690cd5fac29f"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "1def46b0f429f35aeeb17a9cf16105e5"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "6e57d5206519f6e2f92967dc279fcf17"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "126eb393c8421b8002577d453be25c52"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "8dbdf48c25d67a5439ca09315cf26675"
  },
  {
    "url": "tags/工作/index.html",
    "revision": "a3296feca7e5ca9fe23d71c5eca804e9"
  },
  {
    "url": "tags/性能优化/index.html",
    "revision": "c620ff01600fb42c0b6dc78cafa4d853"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "9661a4e8412e1ecb2c1feed0a34ad391"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "fb587f3da94184f3229763ebf1280de1"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "1806974ab8cad307adfcd7208db6d762"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "17f7fb9717aacbd163c169e1d73c63d9"
  },
  {
    "url": "timeline/index.html",
    "revision": "2a22602fbeb811d2769787f604d14fc4"
  },
  {
    "url": "tx.jpg",
    "revision": "7f222ff21b52799dc1f1950b9cefff73"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "工作随笔/ChatGPT_Bito.html",
    "revision": "4408de04c03c3404f62f2ed96e3a46f9"
  },
  {
    "url": "工作随笔/drools.html",
    "revision": "1952320993b8741ac9ae7e55f8429383"
  },
  {
    "url": "工作随笔/SPI.html",
    "revision": "47ed738ddf32684ce4eb84a3a35c105d"
  },
  {
    "url": "工作随笔/workReport.html",
    "revision": "87668997fb19dec4cb201ce2ddf999e6"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c0fe6d16e4fc283186ee6e227497c939"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "5293c12cab30e392039850e2744cf1ed"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "0cfb5f7df999296fcebd7ef659e9c578"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f2b252bb5468d638ccc8c2b44f6cf53f"
  },
  {
    "url": "生活分享/life.html",
    "revision": "bb814da373621003c309ea9c93a6e77c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
