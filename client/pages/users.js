import Link from "next/link"
import Navbar from "../components/Navbar"
import axios from "axios"

const Users = ({ users }) => {

    return <div>
        <Navbar />
        <p>Список пользователей</p>
        <div>{users.map((u) =>
            <div key={u._id}>
                <Link href={`/users/${u._id}`}>{u.name}</Link>
            </div>)}
        </div>
        <Link href={`/users/userform`}>
            <button>Add user</button>
        </Link>

    </div>
}

export default Users

export const getStaticProps = async () => {
    const users = await axios.get("http://localhost:3000/api/users")
    return { props: { users: users.data.data } }
}
