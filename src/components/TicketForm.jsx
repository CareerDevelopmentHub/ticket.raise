import React from 'react'

const TicketForm = () => {
    return (
        <div className="container mx-auto text-center p-20 rounded-lg shadow-md">
            <div className="bg-[#f9f9f9] p-4 border border-gray-300 rounded-md w-[65%] mx-auto">
                <h1 id="head" className="text-center text-black rounded-md text-3xl my-5 font-bold">Ticket Raise</h1>
                <div className="ticket-form bg-[#f9f9f9] p-4 border border-gray-300 rounded-md">
                    <h2 id="head2" className="text-center underline text-2xl font-mono font-bold">Create a New Ticket</h2>
                    <form id="ticket-form">
                        <label htmlFor="name" className="block mt-5 font-bold text-center">Name :</label>
                        <input type="text" placeholder="Enter Your Name" id="name" required className="block w-full p-2 border border-gray-300 rounded" />

                        <div className="flex justify-center items-center h-full my-7">
                            <div className="text-center">
                                <label htmlFor="gender" className="block font-bold">Gender :</label>
                                <div className="flex items-center justify-center mt-2">
                                    <input type="radio" name="gender" id="male" className="mr-2" />
                                    <label htmlFor="male" className="mr-4 font-bold">Male</label>
                                    <input type="radio" name="gender" id="female" className="mr-2" />
                                    <label htmlFor="female" className="font-bold">Female</label>
                                </div>
                            </div>
                        </div>


                        <label htmlFor="contact" className="block mt-5 font-bold text-center">Contact No :</label>
                        <input type="number" placeholder="Enter Your Contact" id="contact" required className="block w-full p-2 border border-gray-300 rounded" />

                        <label htmlFor="email" className="block mt-5 font-bold text-center">Email :</label>
                        <input type="text" placeholder="Enter Your Email" id="email" required className="block w-full p-2 border border-gray-300 rounded" />

                        <label htmlFor="state" className="block mt-5 font-bold text-center">State :</label>
                        <select name="state" id="state" required className="block w-full p-2 border border-gray-300 rounded">
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Maharahtra">Maharahtra</option>
                        </select>

                        <label htmlFor="title" className="block mt-5 font-bold text-center">Title:</label>
                        <input type="text" id="title" required className="block w-full p-2 border border-gray-300 rounded" />

                        <label htmlFor="description" className="block mt-5 font-bold text-center">Description:</label>
                        <textarea id="description" required className="block w-full p-2 border border-gray-300 rounded"></textarea>

                        <button
                            type="submit"
                            id="submit"
                            className="mt-4 ml-2 p-2 bg-green-500 text-white border border-black rounded cursor-pointer transition duration-300 hover:bg-blue-500 hover:border-blue-800"
                        >
                            Create Ticket
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TicketForm