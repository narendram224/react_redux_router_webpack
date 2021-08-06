import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../redux/Actions/User.action';

const UserPage = () => {
    const dispatch = useDispatch();
    const state = useSelector(state=>state.users.all)
    const route = useSelector(state=>state.router)
    useEffect(() => {
       dispatch(getAllUsers())
    }, [])
    return (
        <div>
          <ul>
              {state.map((user)=>{
                  return (
                      <li key={user.id} >{user.title}</li>
                  )
              })}
          </ul>
        </div>
    )
}

export default UserPage
