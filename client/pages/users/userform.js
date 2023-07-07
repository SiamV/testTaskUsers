import { useState } from "react"
import Navbar from "../../components/Navbar"
import axios from "axios"

const UserForm = (id) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [status, setStatus] = useState(true)

    const addUser = async () => {
        try {
            const response = await axios.post(`http://localhost:3000/api/users`, {
                name: name,
                email: email,
                password: password,
                register_date: new Date().toLocaleDateString()
            })
            response.status === 200 ? console.log("good") : console.log("something wrong")
        } catch (e) {
            console.log(e)
        }
    }

    const updateUser = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/api/users`, {
                name: name,
                email: email,
                password: password,
                register_date: new Date().toLocaleDateString()
            })
            response.status === 200 ? console.log("good") : console.log("something wrong")
        } catch (e) {
            console.log(e)
        }
    }


    return <>
        <Navbar />
        {status ? <div>Заполните поля</div>
            : <div>Исправьте данные пользователя</div>}

        <form>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" required
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" required
                    onChange={(e) => setEmail(e.target.value)} />
            </div>

            {status ?
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" required
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                : <div></div>}

            {status ?
                <button type="button" onClick={() => { addUser() }}>add new user</button>
                : <button type="button" onClick={() => { updateUser() }}>update</button>}
        </form>
    </>
}

export default UserForm
