import React, {useState, useEffect }from 'react';
import './App.css';
import Navbars from './Components/Navbars'
import CardList from './Components/CardList'
import Scroll from './Components/Scroll'


function App() {

  const [users, setUsers] = useState([])
  const [searchBox, setSearchBox] = useState('')

  useEffect(() => {  
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(console.log)
  },[])

  const onSearchChange = (event) => {
    setSearchBox(event.target.value)
  }
  const filterRobots = users.filter(user => user.name.toLowerCase().includes(searchBox.toLowerCase()))
 
  return (
   
    <div className="App">   
      <Navbars />
      <input placeholder='name' type='search' onChange={onSearchChange} style={{padding:'10px', marginBottom:'20px'}}/>
      <Scroll>
        <CardList users = {filterRobots} />
      </Scroll>
    </div>
  );
}

export default App;
