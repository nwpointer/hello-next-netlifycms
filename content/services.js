module.exports = {
	load: ({slug}) => {
		switch(slug) {
			
			case 'breastfeeding-education': return require('content/services/breastfeeding-education.json');

			case 'post-partum-hourly-packages': return require('content/services/post-partum-hourly-packages.json');

			default: return require('./services.json')
		}
	},
	routes: ({
		
		'/service/breastfeeding-education': { page: '/service', query: { slug: "breastfeeding-education"} },

		'/service/post-partum-hourly-packages': { page: '/service', query: { slug: "post-partum-hourly-packages"} },

	})
}
