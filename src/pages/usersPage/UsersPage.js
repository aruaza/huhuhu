import React, { useEffect, useState } from 'react'

function UsersPage() {

    const [users, setUsers] = useState([])
    const [selectedUserId, setUserId] = useState(null)
    const [selectData, setUserData] = useState(null)

    async function getUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
    }

    async function getInfo(userId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const userData = await response.json()
        setUserData(userData)
    }

    useEffect(() => {
        getUsers()
    }, [])

    const BtnClick = async (userId) => {
        setUserId(userId)
        await getInfo(userId)
    }

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                        <button value={user.id} onClick={() => BtnClick(user.id)}>more</button>
                    </li>
                ))}
            </ul>

            <ul>
                {selectData && (
                    <>
                        <li>name: {selectData.name}</li>
                        <li>username: {selectData.username}</li>
                        <li>email: {selectData.email}</li>
                    </>
                )}
            </ul>
        </>
    )
}

export default UsersPage