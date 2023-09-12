import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
// import { formatDate } from "@fullcalendar/core";
// import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
// import { INITIAL_EVENTS, createEventId } from "../../utils/helper";
import axios from "axios";

// const RESOURCES = [
// 	{ id: "a", title: "Auditorium A" },
// 	{ id: "b", title: "Auditorium B", eventColor: "green" },
// 	{ id: "c", title: "Auditorium C", eventColor: "orange" },
// ];

const UserCalendar = () => {
	// const [weekendsVisible] = useState(false);
	const [currentEvents, setCurrentEvents] = useState([]);
	let events;

	const handleDateSelect = (arg) => {
		console.log(arg);
	};
	// const handleEventClick = (arg) => {
	// 	console.log(arg);
	// };
	// // const handleEvents = (arg) => {};
	// const renderEventContent = (arg) => {
	// 	console.log(arg);
	// };

	useEffect(() => {
		ListEvents();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const ListEvents = async () => {
		await axios
			.get("http://localhost:3002/api/calendar/list-event")
			.then((response) => {
				console.log("by api", response?.data?.data?.items);
				setCurrentEvents(response?.data?.data?.items);
				console.log("state", currentEvents);
			})
			.catch((error) => console.log(error.message));
	};

	if (currentEvents.length === 0) {
		console.log("state", currentEvents);
		return null;
	} else {
		events = [
			{
				id: currentEvents[11].id,
				title: currentEvents[11].summary,
				start: currentEvents[11].start.dateTime,
				end: currentEvents[11].end.dateTime, 
			},
		];
	}

	

	return (
		<FullCalendar
			plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
			headerToolbar={{
				left: "title",
				center: "",
				right: "",
			}}
			initialView="dayGridMonth"
			// timeZone="local"
			editable={true}
			events={events}
			selectable={true}
			// selectMirror={true}
			// dayMaxEvents={true}
			// weekends={weekendsVisible}
			// initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
			// select={handleDateSelect}
			// eventContent={renderEventContent} // custom render function
			// eventClick={handleEventClick}
			// eventsSet={handleEvents} // called after events are initialized/added/changed/removed
			/* you can update a remote database when these fire:
		eventAdd={function(){}}
		eventChange={function(){}}
		eventRemove={function(){}}
		*/
		/>
	);
};

export default UserCalendar;
