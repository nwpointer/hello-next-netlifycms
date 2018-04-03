const fs = require('fs');
const { singular } = require('pluralize');
const { mapKeys } = require('lodash');
const {mapContent, listFromRecords} = require('./mapContent');

const root = '/_content'
const content = require('require-all')(__dirname + root);

switchRequireTemplate = (records, type) => (
`module.exports = {
	load: ({slug}) => {
		switch(slug) {
			${ listFromRecords(records).map(switchCases(type)).join('') }
			default: return require('./${type}.json')
		}
	},
	routes: ({
		${ listFromRecords(records).map(route(type)).join('') }
	})
}
`)

const route = type => record => `
		'/${singular(type)}/${record.slug}': { page: '/${singular(type)}', query: { slug: "${record.slug}"} },
`

const switchCases = type => record => `
			case '${record.slug}': return require('..${root}/${type}/${record.slug}.json');
`

mapKeys(content, (records, type) => {
	if(Object.keys(records).length){
		const json = JSON.stringify(records)
		fs.writeFileSync(__dirname + root + `/${type}.json`, json);
		
		const text = switchRequireTemplate(records, type)	
		fs.writeFileSync(__dirname + root + `/${type}.js`, text);
	}
})


