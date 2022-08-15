import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useParams} from 'react-router-dom'
const UserList = () => {
    let {id_user} = useParams();
    const [users,setUsers]= useState([])
    let filltered = users.filter(element => element.id == id_user)
  useEffect(() => {
    const getDataUSers = async () => {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(data); }
    getDataUSers()  }, [])

  return (
    <div>
            <h1>This is a usresList Page</h1>
        {filltered && filltered.map(element=>
        <div>
          <h2>My name is: {element.name}</h2>
          <h2>My phone number is: {element.phone}</h2>
          <h2>My Email is: {element.email}</h2></div>)}
    </div>
  )
}
export default UserList




