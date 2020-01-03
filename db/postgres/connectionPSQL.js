const pg = require('pg');
const connectionString = 'postgres://localhost:5432/sdcamenities';

const client = new pg.Client(connectionString);
client.connect();


// var conString = "postgres://YourUserName:YourPassword@localhost:5432/YourDatabase";

