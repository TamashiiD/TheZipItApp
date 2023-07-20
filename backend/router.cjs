
const express = require('express');
const knex = require('knex');

// Replace these variables with your CockroachDB connection details
const dbConfig = {
  client: 'pg',
  connection: {
    host: 'your_cockroachdb_host',
    user: 'Tamashii',
    password: 'Orihime791',
    database: 'thebadstuff',
    port: 26257, // Default CockroachDB port
  },
};

// Create a Knex instance to connect to CockroachDB
const db = knex(dbConfig);

const app = express();
const port = 3000; // Choose any available port

app.use(express.json());

// GET request to fetch data from CockroachDB
app.get('/data', async (req, res) => {
  try {
    const data = await db.select('*').from('your_table_name');
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data.' });
  }
});

// POST request to add data to CockroachDB
app.post('/data', async (req, res) => {
  try {
    const { column1, column2, column3 } = req.body;
    await db('your_table_name').insert({ column1, column2, column3 });
    res.json({ message: 'Data added successfully!' });
  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).json({ error: 'Failed to add data.' });
  }
});

// DELETE request to remove data from CockroachDB
app.delete('/data/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db('your_table_name').where('id', id).del();
    res.json({ message: 'Data deleted successfully!' });
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ error: 'Failed to delete data.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


















// const router = require('express').Router()
// const App = require('./models.cjs')


// // Routes
// router.get('/', (req, res) => {
//   App.get()
//   .then(text => {
//     res.status(200).json(text)
// })
// .catch(err=>{
//     next(err)
// })
// });

// router.post('/', (req, res)=>{
  
//   const feelingvalue = req.body
//   App.insert(feelingvalue)
//   .then(inserted=> {
//     res.status(200).json(inserted)
//   })
//   .catch(err=> {
//     res.status(500).json({message: err.message})
//   })
// })



// router.put('/', (req, res)=> {
//   App.edit(req.body.id, req.body)
//   .then(changed=> {
//     res.status(200).json(changed)
//   })
//   .catch(err=> {
//     res.status(500).json({message: err.message})
//   })
// })

// router.delete('/', (req, res)=> {
//   App.remove(req.body.id)
//   .then(changed=> {
//     res.status(200).json(changed)
//   })
//   .catch(err=> {
//     res.status(500).json({message: err.message})
//   })
// })

// module.exports = router; 
