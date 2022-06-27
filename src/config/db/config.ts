import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
  host:'localhost',
  port:55000,
  username:'postgres',
  password:'postgrespw',
  type: 'postgres',
  database: 'postgres',
  synchronize:true,
  entities:["dist/models/**/*.entity.js"]
};

export default config
