import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({props}) => {
	// const { summary } ={props}
	console.log(props, props.summary);
	return (
		<div class="max-w-md w-1/4 p-6 bg-white rounded-lg shadow-lg ">
			<h1 class="text-2xl font-semibold text-left text-gray-500 mt-8 mb-6">
				{props?.summary}
			</h1>
			<p class="text-sm text-gray-600 text-justify mt-8 mb-6">
			{props?.location}
			</p>

			{/* delete visit */}
			<div class="flex justify-around space-x-2 my-4">
				{/* copy link */}
				<button class="bg-gradient-to-r from-green-400 to-green-400 hover:to-blue-500 text-white px-2 py-2 rounded-md ">
					Copy Link
				</button>
				{/* delete */}
				<button class="bg-gradient-to-r from-red-600 to-red-500 hover:to-red-700 text-white px-4 py-2 rounded-md ">
					Delete
				</button>
			</div>
			{/* something else */}
			<p class="text-xs text-gray-600 text-center mt-8">
				&copy; 2023 Vivek
			</p>
		</div>
	);
};

export default EventCard;
