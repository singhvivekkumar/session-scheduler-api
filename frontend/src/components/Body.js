import React from "react";
import Header from "./consultant/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoadingPage from "./consultant/LoadingPage";
import MainContainer from "./consultant/MainContainer";
import Error from "../Error";
import CreateEvent from "./consultant/CreateEvent";
import ViewEvents from "./consultant/ViewEvents";

const AppLayout = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
};

const Body = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <AppLayout />,
			errorElement: <Error/>,
			children: [
				{
					path: "/",
					element: <LoadingPage />,
					
				},
				{
					path: "/main",
					element: <MainContainer/>,
					children: [
						{
							path: "/main",
							element:<ViewEvents/>
						}
					]
				},
				{
					path: "/createEvent",
					element: <CreateEvent/>
				}
			],
		},
	]);
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default Body;
