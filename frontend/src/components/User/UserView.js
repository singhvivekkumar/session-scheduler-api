import React from "react";
import UserCalendar from "./UserCalendar";

const UserView = () => {
	return (
		<>
			{/* main contianer */}
			<div className=" flex justify-center items-center bg-slate-100 h-screen ">
				{/* container */}
				<div className=" flex flex-col rounded-md md:w-10/12 lg:w-2/3 h-3/4 lg:flex-row p-4 md:py-10 lg:px-10 bg-white shadow-md border space-y-4 border-slate-300 lg:space-x-4 ">
					{/* section 1st details side */}
					<div className=" flex flex-col lg:w-1/3 space-y-2 ">
						<p className=" text-slate-600 text-xl font-medium text-left ">
							Auther Name
						</p>
						<div className=" space-y-5 ">
							<h2 className=" text-2xl font-semibold ">
								get the session
							</h2>
							<h3 className=" text-lg text-slate-500">
								45 min duration
							</h3>
							<h3 className=" text-sm ">
								Web conferencing details provided upon
								confirmation.
							</h3>
						</div>
					</div>
					{/* section 2nd calendar */}
					<div className=" flex flex-col max-h-fit lg:w-2/3">
						<h2 className=" text-xl font-semibold text-center text-slate-800 ">
							Select Date Time
						</h2>
						<div className=" w-full lg:w-4/5">
							{/* <input
								type="datetime-local"
								id="meeting-time"
								name="meeting-time"
								min="2018-06-07T00:00"
								max="2018-06-14T00:00"
								step="60 * 30"
							/> */}
							<UserCalendar />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserView;
