[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

# Reservation-App-Coding-Challenge

Coding challenge where you build a Reservation App client that interacts with a RESTful API using React (Web) or Using Swift (Mobile).

This Repo contains all pre-written code needed to spin up the REST API, documentation for the routes exposed by this API, and directions on what is required for the front-end or mobile app you will be creating.

## Technical Requirements

Create a client for a Raffle application. Users are able to:

- Add Restaurants
- Search Restaurants
- Create and Update Reservations 
- List all Reservations
- View Details for Individual Reservations or Restaurants

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
| `GET`  | `/api/restaurants/:id/reservations` | Retrieve all reservations at a restaurant | n/a |
| `POST` | `/api/restaurants`                  | Create a restaurant | `{ "name": "My first Restaurant" }` |
| `PATCH` | `/api/restaurants/:id`             | Update an existing Restaurant | `{}` |
| `DELETE` | `/api/restaurants/:id`            | Delete an existing Restaurant | n/a |
| `GET`  | `/api/reservations`                 | List all reservations | n/a |
| `GET`  | `/api/reservations/:id`             | Retrieve a reservation by id | n/a |
| `POST` | `/api/reservations`                 | Create a reservation | `{}` |
| `PATCH` | `/api/reservations/:id`            | Update an existing Reservation | `{}` |
| `DELETE` | `/api/reservations/:id`           | Delete an existing Reservation | n/a |


### App Pages/Views

Your Reservation App should have the following pages or views (mobile) (and be displayed at their respective browser url [Web only]).

#### Search Restaurants (`/restaurants`)
- User can search restaurants (text search bar)
- User can filter restaurants by the filters defined in the API (pre-built filters: cuisine, location, price, Takeout/Delivery)
- If no filters are applied, User can view all Restaurants

#### Create Restaurant (`/newRestaurant`)
- User can fill out a form to create a restaurant based on the fields defined in the API (src/util/types.ts)

#### Single Restaurant (`/restaurants/:id`)
- User can view all details about the restaurant (Name, Description, Location, Price, Hours...)
- User can create a reservation for any time in the future when the restaurant is open

#### Create Reservation (`/newReservation`) ***OPTIONAL***
- If the create reservation form is not embedded in the single restaurant page, provide a form for the user to create a reservation for a given restaurant

#### All Reservations (`/reservations`)
- User can view all reservations

#### Single Reservation (`/reservations/:id`)
- User can view active reservation details
- Additional Challenge: User can update existing reservations

#### Notes

- When creating 

### Design Inspiration

This idea for the project already pulls inspiration from apps like Open Table and Resy, so feel free to do the same for your work. In the screenshots folders (`web-screenshots` or `mobile-screenshots`), we compiled some examples of the different pages from these sites. In addition to these screenshots, we encourage everyone to take a look at these sites


## Submission Guidelines

- We think this challenge would take ~8 hours to complete, so allocate your time appropriately.
- You must submit your solution no later than **Insert Date Here**
- Include a README.md file with instructions on how to run your project.
- For any questions reach out to @Billy Taggart in the [Pursuit Core Workspace](https://pursuit-core.slack.com/)


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

- Spin up the API in this REPO 
- Complete your client application according to the Technical requirements below.

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

