import axios from 'axios'

export default async function logIn(username, password) {
  const res = await axios.post('http://localhost:3000/auth', {
    action: 'login',
    name: username,
    password
  })

  return res
}
