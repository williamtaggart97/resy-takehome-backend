[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

# Reservation-App-Coding-Challenge

Coding challenge where you build a Reservation App client that interacts with a RESTful API using React (Web) or Using Swift (Mobile).

This Repo contains all pre-written code needed to spin up the REST API, documentation for the routes exposed by this API, and directions on what is required for the front-end or mobile app you will be creating.

## Prerequisites

### Web

- Heroku Account
- Node.js account
- Knowledge or JavaScript and React

### Mobile

- Heroku Account
- Xcode installed
- Knowledge of Swift

## Getting Started

### Web

1. Create a new React App.
   - You may use `create-react-app`

### Mobile

1. Create a new Swift Xcode Project for your app.

### All

- Complete your client application according to the Technical requirements below.

## Technical Requirements

Create a client for a Raffle application. Users are able to:

- Create raffles
- List all raffles
- Add participants users to raffles
- Draw a winner from a raffle, etc.

**Notes**:

- You may use any 3rd-party libraries or packages for functionality or styling.
  - **Web** We recommend you use something like Bootstrap or Material UI or others to style you app.
  - **Mobile** You must write your networking layer natively, do not use Alamofire or equivalents for Network Requests.

### API

Use the details and endpoints of the API below to accomplish the Reservation App functionality. This API accepts and returns JSON payloads.

| Method | Endpoint                        | Description                                                | Example JSON Body Payload |
| ------ | ------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `GET`  | `/api/restaurants`                  | List restaurants (empty query string = all restaurants) | n/a |
| `GET`  | `/api/restaurants/:id`              | Retrieve a restaurant by id | n/a | 
| `POST` | `/api/restaurants`                  | Create a restaurant | `{ "name": "My first Restaurant" }` |
| `GET`  | `/api/restaurants/:id/reservations` | Retrieve all reservations at a restaurant | n/a |
| `PATCH` | `/api/restaurants/:id`             | Update an existing Restaurant | `{}` |
| `DELETE` | `/api/restaurants/:id`            | Delete an existing Restaurant | n/a |
| `GET`  | `/api/reservations`                 | List all reservations | n/a |
| `GET`  | `/api/reservations/:id`             | Retrieve a reservation by id | n/a |
| `POST` | `/api/reservations`                 | Create a reservation | `{}` |
| `PATCH` | `/api/reservations/:id`            | Update an existing Reservation | `{}` |
| `DELETE` | `/api/reservations/:id`           | Delete an existing Reservation | n/a |

#### Notes

- When creating 

### Wireframes

Your application doesn't have to look exactly as the wireframes below, however it should have all the main components, accomplish all the functionality and be visually pleasing.

- Web Wireframes can be found [here](./Web-Raffle-App-Wireframes.pdf)
- Mobile Wireframes can be found [here](./Mobile-Raffle-App-Wireframes.pdf)

### App Pages/Views

Your Reservation App should have the following pages or views (mobile) (and be displayed at their respective browser url [Web only]).

#### Search Restaurants `/restaurants`
- User can search restaurants (text search bar)
- User can filter restaurants by the filters defined in the API (pre-built filters: cuisine, location, price, Takeout/Delivery)
- If no filters are applied, User can view all Restaurants

#### Create Restaurant `/newRestaurant`
- User can fill out a form to create a restaurant based on the fields defined in the API (src/util/types.ts)

#### Single Restaurant `/restaurants/:id`
- User can view all details about the restaurant (Name, Description, Location, Price, Hours...)
- User can create a reservation for any time in the future when the restaurant is open

#### Create Reservation `/newReservation` ***OPTIONAL***
- If the create reservation form is not embedded in the single restaurant page, provide a form for the user to create a reservation for a given restaurant

#### All Reservations `/reservations`
- User can view all reservations

#### Single Reservation `/reservations/:id`
- User can view active reservation details
- Additional Challenge: User can update existing reservations

#### Home `/`

Display a form to add a new raffle with name and token fields and a submit button. Show a success message upon successful raffle creation and an error message otherwise.

Should also display a list of all raffles and when you click in one of the raffles of the list it should take the user to that raffle's page/view.


## Submission Guidelines

- We think this challenge would take ~7 hours to complete, so allocate your time appropriately.
- You must submit your solution no later than **Monday, May 31st at 11:59pm.**
- Include a README.md file with instructions on how to run your project.
- Submit your code compressed in a zip file using the [submission form](https://docs.google.com/forms/d/e/1FAIpQLSeY0nBqtXTV06b2CmAreHLJzVHlG0cQHUx9g1RKPYer0hNVVQ/viewform?usp=sf_link)
  - **Web** make sure to remove your `node_modules/` folder before compressing
- For any questions reach out to @Alejo in the [Pursuit Core Workspace](https://pursuit-core.slack.com/)


## Restaurant Reservation Service
This repo contains the backend for a Restaurant/Reservation Service that will allow fellows to spin up and host a pre-made backend. The backend will include all the necessary backend functionality to meet the technical requirements described below. 

For front-end development, please follow directions below to host your own copy of this back-end and create a separate repo where you will develop your front-end. See the screenshots folder for design inspiration from OpenTable and Resy. While you are not expected to mimic the exact functionality of these services, you may also reference  https://www.opentable.com/ and https://www.resy.com/ for inspiration.

## Technical Specification

#### API BASE: '/api'

### Restaurants: /restaurants

- Get all restaurants: GET /restaurants
- Add a restaurant: POST /restaurants
- Update a restaurant: PATCH /restaurants
- Get individual restaurant: GET /restaurants/:restaurantId
- Search/filter restaurants: GET /restaurants

### Reservations: /reservations
	
- View all reservations 
- Make a reservation
- Cancel a reservation
- Find available reservations (search by time or location) (bonus?)

#### TIP: run the 'heroku apps' command to see if your app is already running

### Step-By-Step - heroku deployment
1. In the terminal, confirm you are within the resy-takehome-backend directory
2. Run `heroku login` and login with your heroku credentials
3. Run `heroku container:login` 
2. Run `bash ./scripts/start-heroku.sh -n {put your name here}-takehome-api`, ex: `bash ./scripts/start-heroku.sh -n billy-takehome-api`
3. Wait for the command to complete
4. Once complete, run heroku open

### Stopping the app - heroku 
1. In the terminal, confirm you are within the resy-takehome-backend directory
2. Copy `bash ./scripts/stop-heroku.sh -n {name}-takehome-api` and paste in the terminal, then hit return / enter

### Step-By-Step - local deployment
1. In the terminal, confirm you are within the resy-takehome-backend directory
2. Copy `bash ./scripts/start-local.sh` and paste in the terminal, then hit return / enter
3. Wait for the command to complete
4. Once complete, access the server at `localhost:49160`

### Stopping the app - local 
1. In the terminal, confirm you are within the resy-takehome-backend directory
2. Copy `bash ./scripts/stop-local.sh` and paste in the terminal, then hit return / enter



