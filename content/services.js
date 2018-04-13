module.exports = {
	load: ({slug}) => {
		switch(slug) {
			
			case 'belly-sifting-and-rebozo-work': return require('content/services/belly-sifting-and-rebozo-work.json');

			case 'breastfeeding-education': return require('content/services/breastfeeding-education.json');

			case 'hand-and-foot-massage': return require('content/services/hand-and-foot-massage.json');

			case 'post-partum-hourly-packages': return require('content/services/post-partum-hourly-packages.json');

			case 'pre-and-post-birth-consults': return require('content/services/pre-and-post-birth-consults.json');

			default: return require('./services.json')
		}
	},
	routes: ({
		
		'/service/belly-sifting-and-rebozo-work': { page: '/service', query: { slug: "belly-sifting-and-rebozo-work"} },

		'/service/breastfeeding-education': { page: '/service', query: { slug: "breastfeeding-education"} },

		'/service/hand-and-foot-massage': { page: '/service', query: { slug: "hand-and-foot-massage"} },

		'/service/post-partum-hourly-packages': { page: '/service', query: { slug: "post-partum-hourly-packages"} },

		'/service/pre-and-post-birth-consults': { page: '/service', query: { slug: "pre-and-post-birth-consults"} },

	})
}
