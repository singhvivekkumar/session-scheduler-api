import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import axios from "axios";

const ViewEvents = () => {
	const [listAllEvents, setListAllEvents] = useState([]);

	useEffect(() => {
		ListEvents();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const ListEvents = async () => {
		await axios
			.get("http://localhost:3002/api/calendar/list-event")
			.then((response) => {
				console.log("by api",response?.data?.data?.items);
				setListAllEvents(response?.data?.data?.items);
				console.log("state",listAllEvents)
			})
			.catch((error) => console.log(error.message));
	};

	return listAllEvents?.length === 0 ? null : (
		<div className=" bg-slate-100 flex flex-col md:flex-row flex-wrap justify-center items-baseline space-y-6 px-4 space-x-10 ">
			{listAllEvents?.map((item) => {
				return <EventCard key={item?.id} props={item} />;
			})}
		</div>
	);
};

export default ViewEvents;
