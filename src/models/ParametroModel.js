import { DataTypes } from "sequelize";
import { sequelize } from "../config/postgres.js";

const Parametro = sequelize.define(
    'parametros',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        chave: {
            type: DataTypes.STRING
        },
        valor: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: true,
        createdat: 'created_at',
        updatedat: 'updated_at',
    }
);

export default Parametro;