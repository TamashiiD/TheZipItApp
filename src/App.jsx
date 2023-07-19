import { useEffect, useState } from 'react'
import './App.css'
import Badge from 'react-bootstrap/Badge'
import axios from 'axios';

function App() {
  const [statement, setStatement] = useState("")
  const [characterLimit] = useState(280);
  const [button, setButtonOn] = useState(true)
  const [pastStatements, setPastStatements] = useState([])
  const [statementstohandle, setStatementstohandle] = useState([])



  function handleChange(e) {
    e.preventDefault()
    let text = e.target.value
    setStatement(text)

    if (statement.length <= characterLimit) {
      setButtonOn(false)
    }
    if (statement.length > characterLimit - 1) {
      setButtonOn(true)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8080/myapp", statement)
      .then((res) => console.log(res))
      .catch(err => console.log(err))
    setStatementstohandle(statement)
  }


  useEffect(() => {
    axios.get("http://localhost:8080/myapp")
      .then(res => {
        console.log("made a get request");
        setPastStatements(res.data)
        console.log(pastStatements)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div>
        {statementstohandle.length === 0 ? (
          <div>Share to See What Others are Saying</div>
        ) : (

          <div>
            <div>What People Are Saying:</div>
            {pastStatements.map((statement) => {
              return (<div key={statement.id}>
                Anon: {statement.feelings}&nbsp;
                Posted {statement.created_at}
              </div>);
            })}
          </div>
        )}
      </div>



      <form onSubmit={handleSubmit}>
        <label>I've been holding back! What I really wanna say is...&nbsp;</label>
        <input
          type="text" onChange={handleChange} />
        <Badge
          className='mt-3'
          bg={`${statement.length > characterLimit ? 'danger' : 'primary'}`}>
          {statement.length}/{characterLimit}
        </Badge>
        <button
          disabled={button}>
          Share and then Zip It.
        </button>
      </form>


    </>
  )
}

export default App
