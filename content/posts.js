module.exports = {
	load: ({slug}) => {
		switch(slug) {
			
			case 'having-a-doula-their-benefits-and-purpose-2018-04-12': return require('content/posts/having-a-doula-their-benefits-and-purpose-2018-04-12.json');

			case 'test-2018-04-01': return require('content/posts/test-2018-04-01.json');

			case 'test-2018-04-02': return require('content/posts/test-2018-04-02.json');

			default: return require('./posts.json')
		}
	},
	routes: ({
		
		'/post/having-a-doula-their-benefits-and-purpose-2018-04-12': { page: '/post', query: { slug: "having-a-doula-their-benefits-and-purpose-2018-04-12"} },

		'/post/test-2018-04-01': { page: '/post', query: { slug: "test-2018-04-01"} },

		'/post/test-2018-04-02': { page: '/post', query: { slug: "test-2018-04-02"} },

	})
}
