import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import axios from 'axios'
import Link from "next/link"

export default function Page({ user }) {
  const router = useRouter()
  const deleteUser = async (idUser) => {
    const response = await axios.delete(`http://localhost:3000/api/users/${idUser}`)
  }

  return <div>
    <Navbar />
    <p>User Id : {router.query.id}</p>
    <p>User name: {user.name}</p>
    <p>Email: {user.email}</p>
    <p>Registration date: {user.register_date}</p>
    <button
      type='button'
      onClick={() => {
        deleteUser(router.query.id)
      }}>delete
    </button>
    <Link href={`/users/userform`}>
      <button>update</button>
    </Link>
  </div>
}

export const getServerSideProps = async ({ params }) => {
  const user = await axios.get(`http://localhost:3000/api/users/${params.id}`)
  return { props: { user: user.data.data } }
}
