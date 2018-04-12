module.exports = {
	load: ({slug}) => {
		switch(slug) {
			
			case 'home': return require('content/pages/home.json');

			default: return require('./pages.json')
		}
	},
	routes: ({
		
		'/page/home': { page: '/page', query: { slug: "home"} },

	})
}
