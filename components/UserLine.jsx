const UserLine = ({user}) => {

    return <tr>
        <td className="text-left px-6 py-4 whitespace-nowrap">{user.firstName}</td>
        <td className="text-left px-6 py-4 whitespace-nowrap">{user.lastName}</td>
        <td className="text-left px-6 py-4 whitespace-nowrap">{user.email}</td>
        <td className="text-right px-6 py-4 whitespace-nowrap">
            <a href="" className="text-indigo-600 hover:text-indigo-400 hover:cursor-pointer px-4">Edit</a>
            <a href="" className="text-indigo-600 hover:text-indigo-400 hover:cursor-pointer">Delete</a>
        </td>
    </tr>
}

export default UserLine
