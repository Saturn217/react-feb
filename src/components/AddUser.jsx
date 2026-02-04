

import React from 'react'
import { useState } from 'react'

const AddUser = ({submitUser}) => {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [profilePicture, setprofilePicture] = useState("")

    return (
        <div>

            <input type="text" placeholder='First Name' onChange={(e) => setfirstName(e.target.value)} />
            <input type="text" placeholder='Last Name' onChange={(e) => setlastName(e.target.value)} />
            <input type="text" placeholder='Email' onChange={(e) => setemail(e.target.value)} />
            <input type="text" placeholder='Profile picture' onChange={(e) => setprofilePicture(e.target.value)} />

            <button onClick={() => submitUser({ firstName, lastName, email, profilePicture })}>submit</button>
        </div>
    )
}

export default AddUser