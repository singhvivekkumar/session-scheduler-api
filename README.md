# Get The Session
## _Appointment Scheduling Web App, Based on - Nodejs_


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## About
An appointment scheduling system is a web application that allows users to book appointments with consultants . The goal is to provide user with seamless way to view available time slots and book appointment, similiar to paltform like calendly. It also provide an interface for consultants to manage their availability and appointments.


## Features
---
### Admin (Consultant)
- Admin can sing up or create to their account via google account.
- Admin can allow `google calendar` to intergate with `Get The Session` for good experience.
- Admin can schedule a new event according to their availability.
- Admin can restrict user to book appointment .
- Admin can view list all events in their primary google calendar.
- Admin can generate link for sharing the event to their client.
- Admin can also delete the event from events list.
- Admin receive email when new appointment is scheduled and also get notificaiton remainder before an appointment.

### User (Client)
- This allows users to see a list of available appointments in a calendar view.
- This allows users to search for available appointments by date and time.
- This allows users to make appointment online by filling the deatils.
-  This allows users to receive emial about confirmation of appointments .


## Tech

Tech stack which followed in this project:
- [React.js]() - UI library for frontend management
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app 
- [Mongodb]() - database to store tokens.
- 
Tools which followed in this project:
- [VS code]() - Source code editor for debugging, snippets and code refactoring.
- [git]() - for version control system
- [Google Developer Console]()-  for Create Credentials 

## GET STARTED
You need the front-end and back-end server for this app to work. You can find the intructions to setup servers locally here.
### Modules
- **Installation**: You need to need clone this `repo` to run local machine.
- **Setup the Google Developer Console**: main module to interact with Google Calendar API that provides an abstraction with business logic.
- **Backend**: a express server which exposes the API
- **frontend**: a React application written in javascript! It relies on well known frameworks like TaislwindCSS, formik and react router.

### Installation

* Clone the repo

    ```sh
    git clone https://github.com/singhvivekkumar/session-scheduler.git
    ```

### Setup the Google Cloud Project
1. Go to [Google Developer Console](https://console.cloud.google.com/apis)
2. Sign in and create an Google Project 
3. Click on `CREATE PROJECT` then Enter the Name of project and click `CREATE`
4. Go to hamburger menu and click on `API and Services`
5. Enable the [Google Calendar API](https://console.cloud.google.com/apis/api/calendar-json.googleapis.com)
6. Please set up a Google [OAuth consent screen](https://developers.google.com/workspace/marketplace/configure-oauth-consent-screen#:~:text=The%20OAuth%20consent%20screen%20is,allowing%20your%20app%20to%20access.)
    1. Select the project that you want to use for your OAuth consent screen.
    7. Select the User type for your app.
        - Internal means that your app will only be used by users within your organization.
        - External means that your app will be used by users outside of your organization.
    4. Select on of them and Click `CREATE`.
    5. In the  name field, enter a name for your app.
    6. In the Support email field, enter an email address where users can contact you for support.
    10. Click Add or remove scopes.
    11. In the Scopes dialog, select the scopes that your app needs to access.
        - A scope is a permission that your app requests from the user.
        - In our project, app needs to access the user's calendar and three more 
            1.See your primary Google Account email address.
2.See your personal info, including any personal info you've made publicly available
3.See your personal info, including any personal info you've made publicly available
4 By search select calendar api
        - You would select all these scope.
    14. Click Save and continue.
    15. In the Test users section, you can add test users for your app.
    16. Test users are real users who can test your app and give you feedback.
    17. Click Save and continue.
7. Create an OAuth Client ID
    1. Go to [Credentials](https://console.cloud.google.com/apis/credentials)
    2. Choose *Create Credentials* and pick *OAuth Client ID*
    3. Pick *Web Application*
    4. In **Authorized JavaScript origins** section add this for dev localhost server:
        - `http://localhost:3000` for frontend server.
    5. In **Authorized redirect URIs** section add this for dev localhost server:
        - `http://localhost:3002/api/calendar/redirect` for backend dev server
        - *(your production servers here)*
    6. Confirm it. You can let *allowed redirect URIs* empty. We will be using Google's own sign in.
    7. Take note of your **OAuth Client ID**
    8. Store the Client credentials:
        - Set an Environment Variable called `CLIENT_ID` with the value
        - Set an Environment Variable called `CLIENT_SECRET` with the value
        - Set an Environment Variable called `REDIRECT_URL` with the value
        - Save it on `.env` file.

### Setup MongoDB
1. Create a MongoDB Atlas account. You can create an account for free at https://www.mongodb.com/cloud/atlas/signup.
2. Create a cluster. A cluster is a group of MongoDB servers that work together to provide high availability and scalability. You can create a cluster in the MongoDB Atlas console.
3. Connect to your cluster. You can connect to your cluster using the MongoDB Compass GUI or the MongoDB command-line tools.
4. Setup mongoDB with express js [visit](https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial)

If succeed, you should see something like this at http://localhost:3002/api/calendar:
- You redireact on event list page of frontend with all events

I encourge you to create new calendars from https://calendar.google.com and add some test events on it!

### Running the backend
* Go to `api` folder of session-schedular by: 
    ```sh
    cd api
    ```
* create new `.env` file to `api` folder
* Add the following environments variable to `.env` file of `api` folder
    ```
    PORT=3002
    CLIENT_ID= <YOUR_GOOGLE_CLIENT_ID>  
    CLIENT_SECRET=<YOUR_GOOGLE_SECRET_ID>
    REDIRECT_URL=http://localhost:3002/api/calendar/redirect
    API_KEY=<YOUR_GOOGLE_API_KEY>
    MONGODB_URI="mongodb+srv://<YOUR_MONDODB_USER_ID>:<YOUR_MONGODB_PASSWORD>@cluster0.gjor0co.mongodb.net/?retryWrites=true&w=majority"

    ```
* Install the dependencies and devDependencies and start the server
* Install NPM packages in `api`

    ```sh
    npm install
    ```
    ```sh
    npm start
    ```
Once running:
- visit http://localhost:3002/api/calender/redirect to explore the API

### Running the frontend 
* Go to `frontend` folder of session-schedular by:
    ```sh
    cd frontend
    ```
* Install the dependencies and devDependencies and start the server
* Install NPM packages in `api`
    ```sh
    npm install
    ```
    ```sh
    npm start
    ```
Once running, visit http://localhost:3000 to open the app

Note: it may take a while to build, basically because it need to build and bundle the *frontend* module as well.

> Note: This `APP` is not is production ready.


## License

MIT

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
