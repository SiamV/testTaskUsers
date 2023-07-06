import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'

export default function Page({user}) {
  const router = useRouter()
  return <div>
    <Navbar />
    <p>Пользователь: {router.query.id}</p>
    <p>Имя пользователя: {user.name}</p>
  </div>
}

export const getServerSideProps = async ({params}) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user= await res.json()
  return { props: { user } }
}
