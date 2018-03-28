module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/aboutus': { page: '/about' },
      '/post/hello-nextjs': { page: '/post', query: { title: "hello-nextjs"} },
      '/post/learn-nextjs': { page: '/post', query: { title: "learn-nextjs"} },
      '/post/deploy-nextjs': { page: '/post', query: { title: "deploy-nextjs"} }
    }
  }
}