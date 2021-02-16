function  debug(obj = {}){
	return JSON.stringify(obj, null, 10)
}

module.exports = debug