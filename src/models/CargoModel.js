import { DataTypes } from "sequelize";
import { sequelize } from "../config/postgres.js";

const Cargo = sequelize.define(
    'cargos',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: true,
        createdat: 'created_at',
        updatedat: 'updated_at',
    }
);

export default Cargo;