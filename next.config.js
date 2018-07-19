const post = require('./content/posts.js')

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/aboutus': { page: '/about' },
      '/blog': { page: '/blog' },
      '/contact': { page: '/contact' },
      '/contactSuccess': { page: '/contactSuccess' },
      '/services': { page: '/services' },
      ...post.routes
    }
  }
}