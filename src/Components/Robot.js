import React, {useState, useEffect }from 'react';
import CardList from './CardList'
import Scroll from './Scroll'
import SearchBox from './SearchBox';



const Robot = ({robots}) => {
    const [searchBox, setSearchBox] = useState('')

    const onSearchChange = (event) => {
        setSearchBox(event.target.value)
    }
    const filterRobots = robots.filter(user => user.name.toLowerCase().includes(searchBox.toLowerCase()))
    return (
        <div>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
               <CardList users={filterRobots}/>
            </Scroll>
        </div>
    )
}
export default Robot
