const db = require('../dbConfig.cjs')

function get() {
    return db('ZipIt')
}

function insert(text){
    return db('ZipIt')
    .insert(text)
    .then(([id]) => {
        return db('ZipIt')
            .where('id', id)
})}

module.exports = {
    get,
    insert
}