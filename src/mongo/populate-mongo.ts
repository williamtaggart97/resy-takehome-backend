import { DB_NAME, mongoClient } from "../configs/mongo.config";
import { Reservation, Restaurant } from "../util";

const sampleReservations: Reservation[] = [
    {
        "createdAt": "2022-10-13T18:56:51.674Z",
        "firstName": "Billy",
        "lastName": "Taggart",
        "phoneNumber": "9110214586",
        "email": null,
        "time": "2022-05-11T18:00:00.000Z",
        "numGuests": 4,
    },
    {
        "createdAt": "2022-10-13T18:56:51.675Z",
        "firstName": "Will",
        "lastName": "Kenney",
        "phoneNumber": "4446663185",
        "email": null,
        "time": "2022-05-12T19:00:00.000Z",
        "numGuests": 2,
    }
]

const sampleRestaurants: Omit<Restaurant, '_id'>[] = [
    {
        "name": "Mizu",
        "description": "Brick walls & a display of sake bottles create a sleek setting for sushi & other Japanese dishes.",
        "phoneNumber": "7920136527",
        "openingTime": "10:00:00",
        "closingTime": "22:00:00",
        "location": "Brooklyn",
        "cuisine": "Japanese",
        "price": "$$$",
        "diningRestriction": null,
        "tables": {
            "twoPersonTables": 5,
            "fourPersonTables": 5,
            "eightPersonTables": 5
        },
        "reservations": [
            null
        ]
    },
    {
        "name": "McDonald's",
        "description": "This American classic features a variety of awesome burgers and sandwiches at an amazing price. Each location offers its own unique flare so it's always worthwhile to make another trip.",
        "phoneNumber": "9159362474",
        "openingTime": "00:00:00",
        "closingTime": "24:00:00",
        "location": "New York City",
        "cuisine": "American",
        "price": "$",
        "diningRestriction": null,
        "tables": {
            "twoPersonTables": 5,
            "fourPersonTables": 20,
            "eightPersonTables": 0
        },
        "reservations": [
            null
        ]
    },
    {
        "name": "De Mole",
        "description": "This duo of mom-&-pop joints serves signature mole sauce & Mexican standards in a casual setting.",
        "phoneNumber": "4033287558",
        "openingTime": "10:00:00",
        "closingTime": "22:00:00",
        "location": "Queens",
        "cuisine": "Mexican",
        "price": "$$",
        "diningRestriction": null,
        "tables": {
            "twoPersonTables": 5,
            "fourPersonTables": 5,
            "eightPersonTables": 5
        },
        "reservations": [
            null
        ]
    },
    {
        "name": "Roberta's Pizza",
        "description": "French restaurant with beautfiul desserts in a cozy setting. This restaurant's french cuisine brings Paris right to your city.",
        "phoneNumber": "7112205675",
        "openingTime": "10:00:00",
        "closingTime": "22:00:00",
        "location": "New York City",
        "cuisine": "Pizza",
        "price": "$$",
        "diningRestriction": null,
        "tables": {
            "twoPersonTables": 5,
            "fourPersonTables": 5,
            "eightPersonTables": 5
        },
        "reservations": [
            null
        ]
    },
    {
        "name": "Doma Restaurant",
        "description": "“Doma” means a cutting board in Korean and every food is coming from the cutting board. We prepare even a small dish with the best ingredients and reasonable prices to satisfy your food adventure. We offer a taste of authenthic Korean comfort food as known as Bunsik, so customers can taste the perfect home-cooked meal with high-quality at affordable prices. Our Doma chefs have exceptional skills with over thirty years of experience cooking in restaurants in Korea and New York. We obtain our ingredients locally and daily, ensuring that our food is as fresh as possible. Doma restaurant is located in Sunnyside in Queens, so people who don’t live in K-towns or who seek for well-prepared Korean food, can visit us for our delicious food and enjoy",
        "phoneNumber": "4734233021",
        "openingTime": "10:00:00",
        "closingTime": "22:00:00",
        "location": "Queens",
        "cuisine": "Korean",
        "price": "$$",
        "diningRestriction": null,
        "tables": {
            "twoPersonTables": 5,
            "fourPersonTables": 5,
            "eightPersonTables": 5
        },
        "reservations": [
            null
        ]
    },
    {
        "name": "Hero Thai (Formerly Three E Taste of Thai)",
        "description": "This warm, colorful neighborhood eatery provides classic Thai cuisine, plus beer & wine.",
        "phoneNumber": "7203790635",
        "openingTime": "10:00:00",
        "closingTime": "22:00:00",
        "location": "New York City",
        "cuisine": "Thai",
        "price": "$$",
        "diningRestriction": null,
        "tables": {
            "twoPersonTables": 5,
            "fourPersonTables": 5,
            "eightPersonTables": 5
        },
        "reservations": [
            null
        ]
    },
    {
        "name": "3Greeks Grill",
        "description": "High quality Greek Gyro and Souvlaki platters and sandwiches as well as other Greek specialty foods...",
        "phoneNumber": "3186689103",
        "openingTime": "10:00:00",
        "closingTime": "22:00:00",
        "location": "New York City",
        "cuisine": "Greek",
        "price": "$$",
        "diningRestriction": null,
        "tables": {
            "twoPersonTables": 5,
            "fourPersonTables": 5,
            "eightPersonTables": 5
        },
        "reservations": [
            null
        ]
    },
    {
        "name": "La Sucre",
        "description": "French restaurant with beautfiul desserts in a cozy setting. This restaurant's french cuisine brings Paris right to your city.",
        "phoneNumber": "9577617529",
        "openingTime": "10:00:00",
        "closingTime": "22:00:00",
        "location": "New York City",
        "cuisine": "French",
        "price": "$$$",
        "diningRestriction": null,
        "tables": {
            "twoPersonTables": 5,
            "fourPersonTables": 5,
            "eightPersonTables": 5
        },
        "reservations": sampleReservations
    }
]

export const populate = async () => {
    try {
        const database = await mongoClient.db(DB_NAME);
        const collection = await database.collection<Restaurant>('restaurants');
        await collection.insertMany(sampleRestaurants as Restaurant[])


        collection.createIndex({ name: 'text', description: 'text' })

        
        console.log(await collection.findOne({ name: 'La Sucre' }));
    } catch (err) {
        console.error(err);
    }
}

populate().finally(() => console.log('done'));