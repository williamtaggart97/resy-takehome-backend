
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



