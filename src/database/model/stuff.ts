import { Sequelize, Model, Optional, DataTypes } from "sequelize"
import { sequelizeConnection } from "../../config/connection"
import { DataType } from "sequelize-typescript"

interface StuffAttributes {
  id?: number
  name?: string | null
  price?: number | null
  dateBought?: Date | null
  createdAt?: Date
  updatedAt?: Date
}

export interface StuffInput extends Optional<StuffAttributes, "id"> { }
export interface StuffOutput extends Required<StuffAttributes> {}

export default class Stuff extends Model<StuffAttributes, StuffInput> implements StuffAttributes {
  public id!: number
  public name!: string
  public price!: number
  public dateBought!: Date
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Stuff.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  dateBought: {
    allowNull: false,
    type: DataTypes.DATE
  }
}, {
  timestamps: true,
  sequelize: sequelizeConnection
})