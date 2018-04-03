const arrayFromObjects = ((obj, keyName="id") =>{
	return Object.keys(obj).map(key => ({
		[keyName]: key,
		...obj[key]
	}))
})

const listFromRecords = obj => arrayFromObjects(obj, "slug");


module.exports = {arrayFromObjects, listFromRecords}
