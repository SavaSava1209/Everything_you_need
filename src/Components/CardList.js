import Card from './Card'
import '../css/cardList.css'

const CardList = ({users}) => {
    return (
        <div className= 'container'>
            {users.map((user,i) => {

                return (
                    <div>
                        <Card key={i} id={user.id} username={user.username} email= {user.email} name={user.name} />
                    </div>
                )
            })}
        </div>
    )
}
export default CardList