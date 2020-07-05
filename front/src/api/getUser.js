import axios from 'axios'

export default async function getUser() {
    const res = await axios.post('http://localhost:3000/auth', {
        action: 'get_user',
    })
    const error = res.data.error
    const user = res.data.data

    return user
}
