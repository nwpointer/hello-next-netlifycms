const post = require('./_content/posts.js')

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/aboutus': { page: '/about' },
      ...post.routes
    }
  }
}