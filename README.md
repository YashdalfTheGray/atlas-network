# atlas-network
Gives atlas the ability to walk around and inspect network resources

## Installation

Clone the repository and run `npm install` to install dependencies.

## Running

Running `npm start` from the command line will start the express server.

There are some environment variables needed to run the server and they are listed below

* `PORT` - the port to run the server on, defaults to 8090
* `ACCESS_TOKEN` - a user defined key to use to authenticate calls to the server

## Docker

This project can be run as a Docker container. Make sure you have Docker installed and run `npm run docker` to start the server as a Docker container. The server maps to the host's port 8090.

## Capabilities

### `GET /net/public-ip`

Will return the public IP (v4) of the machine

### `GET /poi`

Will return the names of the known Points of Interest on the network. This can be used to check up on critical servers and/or devices on the network.
