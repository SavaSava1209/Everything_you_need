import React, {useState, useEffect }from 'react';
import './App.css';
import Navbars from './Components/Navbars';
import Robot from './Components/Robot'


function App() {

  const [users, setUsers] = useState([])
  

  useEffect(() => {  
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(console.log)
  },[])

  
 
 
  return (   
    <div className="App"> 
      <h1>Everything you need!</h1>  
      <Navbars />
      <Robot robots={users}/>
    </div>
  );
}

export default App;
