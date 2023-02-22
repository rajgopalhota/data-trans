import './App.css';
import { useState } from 'react';
import axios from 'axios';
import App1 from './App1'
function App() {
    const [result, setResult] = useState(null);
    function getProducts() {
        axios.get("http://localhost:8888/products", {
            params: {}
        }).then((response) => {
            console.log(response.data);
            setResult(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }
    function deleteProduct(id) {
        axios.delete(`http://localhost:8888/delete/${id}`,
            {
                params: {}
            }).then((response) => {
                console.log(response.data);
                getProducts();
            }).catch((error) => {
                console.log(error);
            })
    }
    if (result == null) {
        return (
            <div className="App">
                <App1 />
                <button onClick={() => getProducts()}>GetProductData</button>
            </div>
        );
    } else {
        return (
            <div className="App">
                <App1 />
                <table border="1">
                    <tr>
                        <th>PID</th>
                        <th>PNAME</th>
                        <th>PRICE</th>
                        <th>ACTIONS</th>
                    </tr>
                    {
                        result.map((obj) => (
                            <tr key={obj.id}>
                                <td>{obj.id}</td>
                                <td>{obj.name}</td>
                                <td>{obj.price}</td>
                                <td><button onClick={() => deleteProduct(obj.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        );
    }
}

export default App;