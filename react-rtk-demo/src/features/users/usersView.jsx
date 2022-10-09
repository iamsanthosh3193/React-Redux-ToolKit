import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchUsers} from './usersSlice'

export const UserView = () => {

  const dispatch = useDispatch();
  const users = useSelector(state => state.user)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className='users-section'>
      <h2>Users</h2>
      {users.loading && <div>Fetching Users...</div>}
      {!users.loading && users.users ? (
        users.users.map(user => 
          <div key={user.id}>{user.name}</div>
        )
      ): null}
      {!users.loading && users.error.length ? (
        <div>Error while fetching users</div>
      ) : null}
    </div>
  )
}
