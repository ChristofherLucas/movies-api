import { DataTypes } from 'sequelize';
import { DB } from 'src/config/DB';
import { IUser } from 'src/Interfaces/Data/IUser';
import { IModel } from 'src/Interfaces/Model/IModel';

const User: IModel<IUser> = DB.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,

    createdAt: false,

    updatedAt: false
  }
);

export { User };
