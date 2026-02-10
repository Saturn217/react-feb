// import React, { useState } from 'react'
// import Button from './components/Button'
// import Navbar from './components/Navbar'
// import { useActionState } from 'react'
// import AddUser from './components/AddUser'
// import DisplayUser from './components/DisplayUser'

// const App = () => {

//   let displayObj = { color: "red", backgroundColor: "green" }
//   let nameOfUser = "pampam"
//   // let newName = 'emma'

//   const pressMe = () => {
//     alert('this button has been pressed by')
//     setnum(num + 1) 

//   }

//   // const changeName = ()=>{
//   //   setname('emma' )
//   // }

//   const [name, setname] = useState("mubby")


//   // const [first, setfirst] = useState(second)
//   // first variable name of the initial state
//   // setFirst - function that can help mutate or alter the state
//   //second - initial state itself

//   const [num, setnum] = useState(0)
//   const [practiceName, setpractice] = useState('mangala')
//   const [signIn, setsignIn] = useState("Sign In")

//   return (
//     <>
//       <Navbar />
//       <h1 style={displayObj}>Hello world</h1>

//       <h2 className='bg-danger '>My first react app</h2>

//       <h3 className='bg-primary'>{nameOfUser}</h3>


//       <Button />
//       <Button />
//       <Button />


//       <button className='btn btn-dark' onClick={() => pressMe()}>
//         {num}
//       </button>



//       <h1>{name}</h1>


//        {/* <button className='btn btn-dark' onClick={() => changeName()}>
//         {name}
//       </button>  */}


//       <button className='btn btn-dark' onClick={() => setname('josh')}>
//        click me to chnage name
//       </button>

//       <p>{practiceName}</p>
//       <button onClick={()=> setpractice('biola')}>Click to change</button>


//       <button className='btn btn-secondary' onClick={()=> setsignIn('signing in.......')}>{signIn}</button>






//     </>

//   )
// }


// props

// import React, { useState } from 'react'


// const App = () => {


//   const [allUsers, setallUsers] = useState([])


//   const [editingIndex, seteditingIndex] = useState("")


//   // const seeValue = (event) => {

//   //   console.log(event.target.value);
//   //   setfirstName(event.target.value)

//   // }

//   const submitUser = (user) => {
//     console.log('hello');
//     // let user = {
//     //   firstName,
//     //   lastName,
//     //   email,
//     //   profilePicture

//     // }
//     console.log(user);
//     let newAllUsers = [...allUsers, user]
//     setallUsers(newAllUsers)
//   }

//   const deleteUser = (index) => {
//     let newAllUsers = [...allUsers]
//     newAllUsers.splice(index, 1)
//     setallUsers(newAllUsers)

//   }



//   const editUser=(index, user)=>{
//     // let user = {
//     //   firstName,
//     //   lastName,
//     //   email,
//     //   profilePicture
//     // }
//     let newAllUsers= [...allUsers]
//     newAllUsers.splice(index, 1, user)
//     setallUsers(newAllUsers)
//   }


//   const shout = (name) => {
//     alert('shoutttt ' + name)
//   }
//   return (
//     <>

//       <Button title="stop" color='btn-danger' func={shout} />
//       <Button title="go" color='btn-success' />
//       <Button title="Get ready" color='btn-warning' />

//       <br />

//       <AddUser submitUser={submitUser} />


//       <hr />

//        <DisplayUser allUsers={allUsers} deleteUser={deleteUser} editUser={editUser}/>

//     </>
//   )
// }

// export default App


// another topic - react router dom

import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import Tag from './pages/Tag'

const App = () => {
  return (
    <>

      <Navbar />
      <Routes>

        <Route index element={<Home />} />

        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        {/* Programmatic redirection */}
        <Route path='/sp-contact' element={< Navigate to={'/contact'} />} />

        {/* dynamic- routing */}
        <Route path='/profile/:username' element={< Profile />} />

        {/* wildcard routing */}
        <Route path='*' element={<NotFound />} />

        {/* 
          assignment 
          1. Nested or children route  // 
        */}

        {/* <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route> */}

        <Route path='/dashboard' element={<Dashboard />} >
          <Route path='tag' element={<Tag />} />
          <Route path='settings' element={<Settings />} />

        </Route>

      </Routes>



    </>
  )
}

export default App

