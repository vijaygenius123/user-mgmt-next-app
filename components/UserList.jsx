import UserLine from "./UserLine";
import {useEffect, useState} from "react";

const UserList = () => {

    const USER_API = "http://localhost:8080/api/v1/users"
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(USER_API, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const users = await response.json()
                setUsers(users)
                setLoading(false)
            } catch (err) {
                setUsers(null)
            }
            setLoading(false)
        }
        fetchData()
    }, [])
    return <div className="container mx-auto my-8">
        <div className="flex shadow border-b">
            <table className="min-w-full">
                <thead className="bg-gray-50">
                <tr>
                    <th className="text-left font-medium text-gray-500 tracking-wide py-3 px-6 ">First Name</th>
                    <th className="text-left font-medium text-gray-500 tracking-wide py-3 px-6">Last Name</th>
                    <th className="text-left font-medium text-gray-500 tracking-wide py-3 px-6">Email</th>
                    <th className="text-right font-medium text-gray-500 tracking-wide py-3 px-6">Actions</th>
                </tr>
                </thead>
                {!loading && (
                    <tbody className="bg-white">
                    {
                        users && users.map(user => <UserLine key={user.id} user={user}/>)
                    }
                    </tbody>)
                }
            </table>

        </div>

    </div>
}

export default UserList
