import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config()

const dbDatabase: string = "dumbways"
const dbHost: string = "localhost"
const dbUsername: string = "root"
const dbPassword: any = "root"
const dbDialect = "mysql"

export const sequelizeConnection: any = new Sequelize(dbDatabase, dbUsername, dbPassword, {
    host: dbHost,
    dialect: dbDialect
})