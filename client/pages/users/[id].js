import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import axios from 'axios'

export default function Page({ user }) {
  const router = useRouter()
  const deleteUser = (idUser) => {
    console.log(idUser)
  }

  return <div>
    <Navbar />
    <p>Пользователь: {router.query.id}</p>
    <p>Имя пользователя: {user.name}</p>
    <button
      type='button'
      onClick={() => {
        deleteUser(router.query.id)
      }}>delete
    </button>
  </div>
}

export const getServerSideProps = async ({ params }) => {
  const user = await axios.get(`http://localhost:8090//user/${params.id}`)
  return { props: { user: user.data } }
}


// export const deleteOrderThunkCreator = (id) => async (dispatch) => {
//   try {
//       let response = await axios.delete(`/api/v1/delete/order/${id}`)
//       if (response.status === 200) {
//           dispatch(setDeleteStatus(true))
//       }
//   } catch (e) {
//   }
// }
