import React from 'react';

const TicketRaise = () => {
	return (
		<div className="container mx-auto text-center p-20 rounded-lg shadow-md">
			<div className="bg-[#f9f9f9] p-4 border border-gray-300 rounded-md w-[55%] mx-auto">
				<h1 className="mb-4 text-3xl font-bold">Welcome to Ticket Raise</h1>
				<p>Create and manage tickets for your small startup.</p>
				<div className="ticket bg-white border border-gray-300 p-4 mt-6">
					<h2 className="text-xl mb-2">Create a New Ticket</h2>
					<form className="form1" action="#">
						<label className="font-bold" htmlFor="ticket-title">Ticket Title:</label>
						<input
							type="text"
							id="ticket-title"
							name="ticket-title"
							required
							className="p-2 mt-1 border border-gray-300 rounded w-full"
						/>
						<label className="font-bold" htmlFor="ticket-description">Ticket Description:</label>
						<textarea
							id="ticket-description"
							name="ticket-description"
							rows="4"
							required
							className="p-2 mt-1 border border-gray-300 rounded w-full"
						></textarea>
						<button
							type="submit"
							className="mt-4 ml-2 p-2 bg-green-500 text-white border border-black rounded cursor-pointer transition duration-300 hover:bg-blue-500 hover:border-blue-800"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default TicketRaise;
