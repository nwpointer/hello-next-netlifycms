module.exports = {
	load: ({slug}) => {
		switch(slug) {
			
			case 'jeorme-2018-04-02': return require('content/testimonials/jeorme-2018-04-02.json');

			case 'sally-bery-2018-04-02': return require('content/testimonials/sally-bery-2018-04-02.json');

			default: return require('./testimonials.json')
		}
	},
	routes: ({
		
		'/testimonial/jeorme-2018-04-02': { page: '/testimonial', query: { slug: "jeorme-2018-04-02"} },

		'/testimonial/sally-bery-2018-04-02': { page: '/testimonial', query: { slug: "sally-bery-2018-04-02"} },

	})
}
