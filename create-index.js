const fs = require('fs');
const { singular } = require('pluralize');
const { mapKeys } = require('lodash');
const {mapContent, listFromRecords} = require('./mapContent');

const rootName = 'content'
const root = __dirname + '/' + rootName

// cleans up old indexes
filesInDirectory(root).map(fs.unlinkSync)
// reads content for new indexes
const content = require('require-all')(root);


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
			case '${record.slug}': return require('${rootName}/${type}/${record.slug}.json');
`

mapKeys(content, (records, type) => {
	if(Object.keys(records).length){
		const json = JSON.stringify(records)
		fs.writeFileSync(root + `/${type}.json`, json);
		
		const text = switchRequireTemplate(records, type)	
		fs.writeFileSync(root + `/${type}.js`, text);
	}
})

function filesInDirectory(dir){
	return fs.readdirSync(dir)
		.map( p => root + '/' + p)
		.filter(p => fs.statSync(p).isFile())

}

