import { BsCalendar2Plus } from "react-icons/bs";

const MainContainer = () => {
  return (
	<main className=" flex flex-col justify-center p-2 md:px-10 lg:px-20">
		{/* section 1 */}
		<div className=" flex flex-col justify-center py-2 md:px-4 border-b shadow-md ">
			{/* row 1 */}
			<div className=" flex justify-between items-center">
				{/* col 1 */}
				<div className="">
					<span className=" text-lg font-medium">Calender</span>
				</div>
				{/* col 2 */}
				<div>
					<button className="flex items-center p-2 px-2 bg-blue-600 text-white text-lg rounded-full font-semibold hover:bg-blue-700 cursor-pointer "> <BsCalendar2Plus/> Create</button>
				</div>
			</div >

			{/* row 2 */}
			<div className=" flex justify-between items-center">

			</div>
		</div>

		{/* section 2 */}
		<div>

		</div>
	</main>
  )
}

export default MainContainer;