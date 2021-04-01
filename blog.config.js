const BLOG = {
  title: 'WMCD',
  author: 'WMCD',
  email: 'wmcd03@outlook.comt',
  link: 'https://wzhnb.icu',
  description: 'This gonna be an awesome website.',
  lang: 'en-US',
  appearance: 'auto', // ['light', 'dark', 'auto'],
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#111827', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // if leave this empty, current year will be used.
  postsPerPage: 7,
  showAbout: true, // WIP
  showArchive: true, // WIP
  socialLink: 'https://telegram.me/wmcd03',
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  analytics: {
    provider: '', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk
    provider: '', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: 'https://github.com/WMCD03/WarM-ColD', // The repository of store comments
      owner: 'WMCD03',
      admin: ['WMCD03'],
      clientID: '904226587b0a27ddcef9',
      clientSecret: '43017aa7bcc29466099ac5a3434bf4e81d676e82',
      distractionFreeMode: false
    }
  }
}
// export default BLOG
module.exports = BLOG
