import Link from "next/link"
import Navbar from "../components/Navbar"

const Users = ({users}) => {

    return <div>
        <Navbar />
        <p>Список пользователей</p>
        <div>{users.map((u) =>
            <div key={u.id}>
                <Link href={`/users/${u.id}`}>{u.name}</Link>
            </div>)}
        </div>
    </div>
}

export default Users

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    return { props: { users } }
  }
