import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from '../components/Search'


const Fetch = () => {
    const [number, setNumber] = useState(0)
    const [name, setName] = useState("pampam")
    const [allUsers, setallUsers] = useState([])

    const [searchTerm, setSearchTerm] = useState("")
    const [filtered, setfilter] = useState([])

    useEffect(() => {
        console.log("useEffect called");

        const makeRequest = async () => {

            try {
                let data = await axios.get("https://jsonplaceholder.typicode.com/users")
                console.log(data.data);
                setallUsers(data.data)
                setfilter(data.data) // initialize filter with all users
            }
            catch (error) {
                console.log(error);
            }


        }
        makeRequest()
    }, [name])

    useEffect(() => {
        console.log('effect of search');
        
        let copiedUsers = [...allUsers]

        if (searchTerm === "") {
            setfilter(allUsers)
            return
        }
        let newFilter = copiedUsers.filter((user)=> user.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setfilter(newFilter)
    }, [searchTerm, allUsers])

    

// without dependency array, useEffect will runs onload
// And when any  state  changes  in tye componenet, useEffect will runs again
// with empty dependency array, useEffect will runs only onload, when any changes it doesnt run
// with dependency array having a state, useEffect will runs onload, it then runs when that particular satte changes


return (
    <div >



        <Search setSearchTerm={setSearchTerm} />

        <button className='btn btn-dark' onClick={() => setNumber(number + 1)}>{number}</button>
        <button className='btn btn-info' onClick={() => setName("mangala")}>{name}</button>


        <div className='d-flex flex-wrap gap-3 mt-3'>


            {
                filtered.map((user, index) =>
                    <div className="card" style={{ width: '18rem' }} key={index}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> <strong>User Details</strong></h5>
                                <p className="card-text"><strong>Name:</strong> {user.name}</p>
                            <p className="card-text"><strong>Email:</strong> {user.email}</p>
                            <p className="card-text"><strong>Username:</strong> {user.username}</p>
                            <p className="card-text"> <strong>Address:</strong> {user.address.street + " " + user.address.suite + " " + user.address.city}</p>

                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                )
            }

        </div>
    </div>



)
}

export default Fetch