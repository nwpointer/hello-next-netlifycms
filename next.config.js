const post = require('./content/posts.js')

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/aboutus': { page: '/aboutus' },
      '/blog': { page: '/blog' },
      '/contact': { page: '/contact' },
      '/services': { page: '/services' },
      ...post.routes
    }
  }
}