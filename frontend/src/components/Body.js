import React from "react";
import { GoogleLogin } from "react-google-login";
import { CLIENT_ID } from '../config/server-config';
const Body = () => {
	const responseGoogle = (response) => {
		console.log('response', response);
	}

	const responseError = (error) => {
		console.log(error);
	}

	return (
		<div>
			<h1>Google Calendar API</h1>
			<div>
				<GoogleLogin
					clientId={CLIENT_ID}
					buttonText="Sign in & Authorize Calendar"
					onSuccess={responseGoogle}
					onFailure={responseError}
					cookiePolicy={"single_host_origin"}
					responseType="code"
					accessType="offline"
					scope="openid email profile https://www.googleapis.com/auth/calendar"
				/>
			</div>
		</div>
	);
};

export default Body;
