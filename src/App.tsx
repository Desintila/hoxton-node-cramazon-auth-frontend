import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Homepage from './components/Homepage'
import Login from './components/login'

import Register from './components/register'
import { User } from './types'
function App() {




  const [user, setUser] = useState<User | null>(null)

  function signIn(email: string, password: string) {
    fetch('http://localhost:4000/sign-in', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(resp => resp.json())
      .then((data) => {
        if (data.error) {
          alert(data.error)
        }
        else {
          setUser(data.user)
          localStorage.token = data.token
        }

      })

  }



  function signUp(email: string, name: string, password: string) {
    fetch('http://localhost:4000/sign-up', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        name: name,
        password: password
      })
    }).then(resp => resp.json())
      .then((data) => {
        if (data.error) {
          alert(data.error)
        }
        else {
          setUser(data.user)
          localStorage.token = data.token
        }

      })

  }


  function Logout() {
    localStorage.removeItem('token')
    setUser(null)
  }

  useEffect(() => {
    fetch('http://localhost:4000/validate', {
      headers: {
        Authorization: localStorage.token
      }
    }).then(resp => resp.json())
      .then(data => {
        if (data.error) {
          console.log('Something wrong')
        }
        else {
          setUser(data)
        }
      })
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path='homepage' element={<Homepage />} />
        <Route path='login' element={<Login signIn={signIn} logOut={Logout} user={user} />} />
        <Route path='sign-up' element={<Register signUp={signUp} />} />
      </Routes>
    </div>
  )
}

export default App
