module.exports = {
	load: ({slug}) => {
		switch(slug) {
			
			case 'about': return require('content/pages/about.json');

			case 'blog': return require('content/pages/blog.json');

			case 'contact': return require('content/pages/contact.json');

			case 'home': return require('content/pages/home.json');

			case 'services': return require('content/pages/services.json');

			default: return require('./pages.json')
		}
	},
	routes: ({
		
		'/page/about': { page: '/page', query: { slug: "about"} },

		'/page/blog': { page: '/page', query: { slug: "blog"} },

		'/page/contact': { page: '/page', query: { slug: "contact"} },

		'/page/home': { page: '/page', query: { slug: "home"} },

		'/page/services': { page: '/page', query: { slug: "services"} },

	})
}
