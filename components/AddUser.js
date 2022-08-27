import React, {useState, Fragment} from 'react'
import {Transition, Dialog} from "@headlessui/react";
import {mergeLeft} from "ramda";

const USER_API = "http://localhost:8080/api/v1/users"

const AddUser = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState({
        id: null,
        firstName: '',
        lastName: '',
        email: ''
    })


    function handleChange(evt) {
        const {target: {name, value}} = evt
        setUser(mergeLeft({
            [name]: value
        }))
    }

    async function handleSave() {
        const response = await fetch(USER_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        if(!response.ok){
            throw new Error("Something went wrong")
        }
        closeModal()
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return <>
        <div className={"container mx-auto my-8"}>
            <div className={"h-12"}>
                <button className={"rounded bg-slate-600 text-white px-6 py-2 font-semibold"} onClick={openModal}>
                    Add User
                </button>
            </div>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as={"div"} className={"fixed inset-0 z-10 overflow-y-auto"} onClose={closeModal}>
                <div className={"min-h-screen px-4 text-center"}>
                    <Transition.Child
                        as={Fragment}
                        enter={"ease-out duration-400"}
                        enterFrom={"opacity-0 scale-75"}
                        enterTo={"opacity-100 scale-100"}
                        leave={"ease-in duration-200"}
                        leaveFrom={"opacity-100 scale-100"}
                        leaveTo={"opacity-0 scale-95"}
                    >
                        <div
                            className={"inline-block w-full max-w-md p-6 m-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded"}>
                            <Dialog.Title as={"h3"} className={"text-lg font-medium leading-6 text-gray-900"}>Add New
                                User</Dialog.Title>
                            <Dialog.Description>
                                <div className={"flex max-w-md mx-auto flex-col"}>
                                    <div className="h-14 my-4">
                                        <label htmlFor="firstName"
                                               className={"block text-gray-600 text-sm font-normal"}>
                                            First Name
                                        </label>
                                        <input type="text" id={"firstName"} name={"firstName"}
                                               className={"h-10 w-96 border mt-2 px-2 py-2"}
                                               onChange={handleChange}
                                               value={user.firstName}/>
                                    </div>
                                    <div className="h-14 my-4">
                                        <label htmlFor="lastName" className={"block text-gray-600 text-sm font-normal"}>
                                            Last Name
                                        </label>
                                        <input type="text" id={"lastName"} name={"lastName"}
                                               className={"h-10 w-96 border mt-2 px-2 py-2"}
                                        onChange={handleChange}
                                        value={user.lastName}/>
                                    </div>
                                    <div className="h-14 my-4">
                                        <label htmlFor="email" className={"block text-gray-600 text-sm font-normal"}>
                                            Email
                                        </label>
                                        <input type="text" id={"email"} name={"email"}
                                               className={"h-10 w-96 border mt-2 px-2 py-2"}
                                               onChange={handleChange}
                                               value={user.email}/>
                                    </div>
                                    <div className={"h-14 my-4 space-x-4"}>
                                        <button
                                            className={"rounded text-white font-semibold bg-green-400 hover:bg-green-700 px-6 py-2"}
                                            onClick={handleSave}
                                            >
                                            Save
                                        </button>
                                        <button
                                            className={"rounded text-white font-semibold bg-red-400 hover:bg-red-700 px-6 py-2"}
                                            onClick={closeModal}>
                                            Cancel
                                        </button>
                                    </div>
                                </div>

                            </Dialog.Description>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    </>
}

export default AddUser
