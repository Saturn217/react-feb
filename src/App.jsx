import React, { useState } from 'react'
import Button from './components/Button'
import Navbar from './components/Navbar'
import { useActionState } from 'react'
import AddUser from './components/AddUser'
import DisplayUser from './components/DisplayUser'

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


// import React, { useState } from 'react'


const App = () => {

  
  const [allUsers, setallUsers] = useState([])


  const [editingIndex, seteditingIndex] = useState("")


  // const seeValue = (event) => {

  //   console.log(event.target.value);
  //   setfirstName(event.target.value)

  // }

  const submitUser = (user) => {
    console.log('hello');
    // let user = {
    //   firstName,
    //   lastName,
    //   email,
    //   profilePicture

    // }
    console.log(user);
    let newAllUsers = [...allUsers, user]
    setallUsers(newAllUsers)
  }

  const deleteUser = (index) => {
    let newAllUsers = [...allUsers]
    newAllUsers.splice(index, 1)
    setallUsers(newAllUsers)

  }



  const editUser=(index, user)=>{
    // let user = {
    //   firstName,
    //   lastName,
    //   email,
    //   profilePicture
    // }
    let newAllUsers= [...allUsers]
    newAllUsers.splice(index, 1, user)
    setallUsers(newAllUsers)
  }


  const shout = (name) => {
    alert('shoutttt ' + name)
  }
  return (
    <>

      <Button title="stop" color='btn-danger' func={shout} />
      <Button title="go" color='btn-success' />
      <Button title="Get ready" color='btn-warning' />

      <br />

      <AddUser submitUser={submitUser} />
     

      <hr />

       <DisplayUser allUsers={allUsers} deleteUser={deleteUser} editUser={editUser}/>

    </>
  )
}

export default App

