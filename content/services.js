module.exports = {
	load: ({slug}) => {
		switch(slug) {
			
			case 'babies-first-bath': return require('content/services/babies-first-bath.json');

			case 'breast-feeding-support': return require('content/services/breast-feeding-support.json');

			case 'overnight-stays': return require('content/services/overnight-stays.json');

			default: return require('./services.json')
		}
	},
	routes: ({
		
		'/service/babies-first-bath': { page: '/service', query: { slug: "babies-first-bath"} },

		'/service/breast-feeding-support': { page: '/service', query: { slug: "breast-feeding-support"} },

		'/service/overnight-stays': { page: '/service', query: { slug: "overnight-stays"} },

	})
}
