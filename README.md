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
You need the back-end server for this app to work. You can find the intructions to setup back-end server locally here.
### Modules
- **Installation**: You need to need clone this `repo` to run local machine.
- **Setup the Google Developer Console**: main module to interact with Google Calendar API that provides an abstraction with business logic.
- **Backend**: a express server which exposes the API
- **frontend**: a React application written in javascript! It relies on well known frameworks like TaislwindCSS, formik and react router.
- **webapp-bundle**: the backend module, bundled with the frontend module as Java resources. This should be your entry point if you want to run the app as a standalone whole

### Installation

1. Clone the repo

    ```sh
    git clone https://github.com/singhvivekkumar/session-scheduler.git
    ```

2. Install NPM packages in `backend

    ```sh
    npm install
    ```

3. Start local server

    ```sh
    REACT_APP_BASE_URL=http://localhost:3001 npm start
    ```

    Please note that only `npm start` won't work as this app relies on this environment variable.

4. Visit `http://localhost:3000/` in your browser.


### Setup the Google Cloud Project
1. Go to [Google Developer Console](https://console.cloud.google.com/apis)
2. Sign in and create an Google Project 
3. Click on `CREATE PROJECT` then Enter the Name of project and click `CREATE`
4. Go to hamburger menu and click on `API and Services`
3. Enable the [Google Calendar API](https://console.cloud.google.com/apis/api/calendar-json.googleapis.com)
4. Please set up a Google [OAuth consent screen](https://developers.google.com/workspace/marketplace/configure-oauth-consent-screen#:~:text=The%20OAuth%20consent%20screen%20is,allowing%20your%20app%20to%20access.)
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
1. Create an OAuth Client ID
    1. Go to [Credentials](https://console.cloud.google.com/apis/credentials)
    1. Choose *Create Credentials* and pick *OAuth Client ID*
    1. Pick *Web Application*
    2. In 
    1. In **Authorized JavaScript origins** section add this for dev localhost server:
        - `http://localhost:300` for frontend server.
    1. In **Authorized redirect URIs** section add this for dev localhost server:
        - `http://localhost:3002/api/calendar/redirect` for backend dev server
        - *(your production servers here)*
    1. Confirm it. You can let *allowed redirect URIs* empty. We will be using Google's own sign in.
    1. Take note of your **OAuth Client ID**
    1. Store the Client Id *(one of)*:
        - Set an Environment Variable called `GOOGLE_CLIENT_ID` with the value
        - Save it on `model` module's root under with name `google_client_id.txt`.
        - Or replace the `buildConfigField:API_CLIENT_ID` value on `model` module's `build.gradle.kts` file.
1. Create a new (Google Calendar)[https://calendar.google.com/calendar/r/settings/createcalendar]
    1. Share it with the **Service Account's email address** you just created. This will make it available at the app
    1. Make sure it has **write access** to the Calendar's events when you share it
1. Run the `backend` or the `webapp-bundle` module to check if everything is working as expected.

If succeed, you should see something like this at http://localhost:8081/api/agendas:
```json
[
  {
    "id": "fsltp4vi7lcgugho31rdlc56no@group.calendar.google.com",
    "name": "Beneficios (prueba)",
    "description": "Calendario de prueba para la app de citas",
    "foregroundColor": "#000000",
    "backgroundColor": "#a47ae2",
    "available": true
  },
  {
    "id": "fpjlv6afhup6s03v5gt3ljgd74@group.calendar.google.com",
    "name": "Masajes (prueba)",
    "description": "Beneficio de masajes",
    "foregroundColor": "#000000",
    "backgroundColor": "#a47ae2",
    "available": true
  }
]
```

I encourge you to create new calendars from https://calendar.google.com and add some test events on it!

### Running the backend
```sh
./gradlew backend:run
```
Once running:
- visit https://petstore.swagger.io/?url=http://localhost:8081/api/openapi.json to explore the API

### Running the frontend (as standalone, for dev purposes)
```sh
./gradlew frontend:run -t -PapiEndpoint=http://localhost:8081/api
```
Once running, visit http://localhost:8088/ to open the app

### Running the whole webapp (frontend and backend)
```sh
./gradlew webapp-bundle:run
```
Once running:
- visit http://localhost:8081 to open the app 
- visit https://petstore.swagger.io/?url=http://localhost:8081/api/openapi.json to explore the API

Note: it may take a while to build, basically because it need to build and bundle the *frontend* module as well.

---
---
---

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd dillinger
npm i
node app
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

## Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```

Second Tab:

```sh
gulp watch
```

(optional) Third:

```sh
karma test
```

#### Building for source

For production release:

```sh
gulp build --prod
```

Generating pre-built zip archives for distribution:

```sh
gulp build dist --prod
```

## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd dillinger
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
