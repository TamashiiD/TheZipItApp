const db = require('../dbConfig.cjs')

function get() {
    return db('ZipIt')
}

function insert(feelingvalue) {
    return db('ZipIt')
      .insert(feelingvalue)
      .then(([id]) => {
        return db('ZipIt')
          .where('id', id)
          .first(); // Retrieve the inserted record
      });
  }
  
  function edit(id, newData) {
    return db('ZipIt') 
    .where('id', id)
      .update(newData)
      .then(() => {
        return db('ZipIt');
      });
  }
  
 function remove(id){
    return db('ZipIt')
    .delete()
    .where('id', id)
    .then(()=> {
        return db('ZipIt')
    })
 }

module.exports = {
    get,
    insert,
    edit,
    remove
}