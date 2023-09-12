import React, { useState, useEffect } from "react";
import UserCalendar from "./UserCalendar";
import { useParams } from "react-router-dom";
import axios from "axios";

function fliterEvent(searchEventId, eventList) {
	const data = eventList.find((event) => {
		return event.id.includes(searchEventId);
	});
	console.log("data", data);
	return data;
}

const UserView = () => {
	const { id } = useParams();
	
	const [currentEvents, setCurrentEvents] = useState();

	let events;

	useEffect(() => {
		ListEvents();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const ListEvents = async () => {
		await axios
			.get("http://localhost:3002/api/calendar/list-event")
			.then((response) => {
				const ListEvents = response?.data?.data?.items;
				const event = fliterEvent(id, ListEvents);
				setCurrentEvents(event);
			})
			.catch((error) => console.log(error.message))
			.finally(() => {	
				
			});
	};

	events = [
		{
			id: currentEvents.id,
			title: currentEvents.summary,
			start: currentEvents.start.dateTime,
			end: currentEvents.end.dateTime,
		}
	];

	// earlier
	// if () {
	// 	return null;
	// }

	return (
		<>
			{/* main contianer */}
			<div className=" flex justify-center items-center h-full bg-slate-100 md:h-screen ">
				{/* container */}
				<div className=" flex flex-col rounded-md md:w-10/12 lg:w-2/3 h-full md:h-3/4 lg:flex-row p-4 md:py-10 lg:px-10 bg-white shadow-md border space-y-4 border-slate-300 lg:space-x-4 ">
					{/* section 1st details side */}
					<div className=" flex flex-col lg:w-1/3 space-y-2 ">
						<div className=" space-y-5 ">
							<p className=" text-lg text-slate-600">
								{currentEvents?.creator?.email}
							</p>
							<h2 className=" text-2xl font-semibold ">
								{currentEvents?.summary}
							</h2>
							<h3 className=" text-lg text-slate-500">
								45 min duration
							</h3>
							<h3 className=" text-sm ">
								{currentEvents?.description}
							</h3>
						</div>
					</div>
					{/* section 2nd calendar */}
					<div className=" flex flex-col justify-center items-center lg:w-2/3">
						<div className=" w-full h-full lg:w-4/5">
							{/* <input
								type="datetime-local"
								id="meeting-time"
								name="meeting-time"
								min="2018-06-07T00:00"
								max="2018-06-14T00:00"
								step="60 * 30"
							/> */}
							<UserCalendar events={events} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserView;
