CREATE TABLE IF NOT EXISTS "Restaurants" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" text NOT NULL,
    "description" text NOT NULL,
    "phoneNumber" varchar(255),
    "openingTime" timestamptz,
    "closingTime" timestamptz,
    "location" text NOT NULL,
    "tables" jsonb
);

CREATE TABLE IF NOT EXISTS "Reservations" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    "firstName" text NOT NULL,
    "lastName" text NOT NULL,
    "phoneNumber" varchar(255) NOT NULL,
    "email" varchar(255),
    "time" timestamptz NOT NULL,
    "numGuests" int NOT NULL,
    "restaurantId" uuid NOT NULL REFERENCES "Restaurants" (id) ON DELETE CASCADE 
); 

