import './App.css';
import {useState} from 'react'
import axios from 'axios'
function App() {
  const [res, setRes] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.post('http://localhost:8888/', {
      id : data.get('pid'),
      name : data.get('pname'),
      price : data.get('price')
    }).then((response)=>{
      console.log(response.data);
      setRes(response.data)
    }).catch((err)=>{console.log(err)})
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Product id: <input type="text" name='pid' /></label>
        <br />
        <label>Product name: <input type="text" name='pname' /></label>
        <br />
        <label>Product price: <input type="text" name='price' /></label>
        <br />
        <br />
        <input type='submit' value='Store' />
        <br />
        <br />
        {res}
      </form>
    </div>
  );
}

export default App;
