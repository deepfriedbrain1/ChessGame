const pgp = require('pg-promise')();

const connection = pgp(process.env.DATABASE_URL);
//issue with pg-promise and heroku
//const connection = pgp("postgres://czidcsjpcohbwz:bad6dd64bef3e64e6c587e654f4b0bea12d39275fe3bb6c9981059343e0f8023@ec2-107-20-211-10.compute-1.amazonaws.com:5432/df8th96p9vhkqn");
//const connection = pgp("DATABASE_URL=postgres://gajaenchandrasegaram@localhost:5432/test_database");
console.log(connection);

module.exports = connection

