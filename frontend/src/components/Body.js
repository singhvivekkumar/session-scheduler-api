import React from "react";
import Header from "./consultant/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoadingPage from "./consultant/LoadingPage";
import MainContainer from "./consultant/MainContainer";
import Error from "../Error";

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
				},
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
