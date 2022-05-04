export interface Restaurant {
    id: string;
    name: string;
    description: string;
    phoneNumber?: string;
    openingTime?: string; // dateString
    closingTime?: string; // dateString
    location: string;
    tables?: TableConfig;
}

export interface TableConfig {
    twoPersonTables: number;
    fourPersonTables: number;
    eightPersonTables: number;
}

export interface Reservation {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string; // phone number of the primary guest
    email?: string; // email of the primary guest
    time: string; // dateString
    numGuests: number;
    restaurantId: string;
}