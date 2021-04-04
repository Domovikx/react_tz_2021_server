const MONGO_USER_NAME = 'domovikx';
const MONGO_PASSWORD = 'c5NSAXyh9X5qsIcq';
const MONGO_DB_NAME = 'tz2021server';
const MONGO_CLUSTER = 'cluster0.54q1n';

export const MONGO_URI = `mongodb+srv://${MONGO_USER_NAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

export const PORT_SERVER = 3000;
export const URL_SERVER = `http://localhost:${PORT_SERVER}`;

export const JWT_KEY = '5VNEgYKQlX';
