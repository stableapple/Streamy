# Streamy

## Getting started

To get the frontend running locally:

- Clone this repo
- Run `npm install` to install all required dependencies in the `client` directory.
- `npm start` to start the local server in the `client` directory (this project uses create-react-app)

### Making requests to the backend API

Run `npm start` in the `api` directory.

Local web server uses port 3001 for running the backend server. To configure the port, change the scripts section in `package.json`.

### Making request to the RTMP server

Run `npm start` in the the `rtmpserver` directory.

## Functionality overview

- Authenticate users via Google using OAuth 2.0 API
- CRUD streams
- GET and display paginated lists of streams
- Live streaming using OBS software

