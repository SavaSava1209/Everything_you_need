import Card from './Card'


const CardList = ({users}) => {
    return (
        <div>
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