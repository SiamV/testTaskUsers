import Link from "next/link"
import Navbar from "../components/Navbar"
import axios from "axios"

const Users = ({users}) => {

    return <div>
        <Navbar />
        <p>Список пользователей</p>
        <div>{users.map((u) =>
            <div key={u._id}>
                <Link href={`/users/${u._id}`}>{u.name}</Link>
            </div>)}
        </div>
    </div>
}

export default Users

export const getStaticProps = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await axios.get(`http://localhost:8090//user-list`)
    return { props: { users: users.data } }
  }
