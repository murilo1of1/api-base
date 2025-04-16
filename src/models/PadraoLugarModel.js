import { DataTypes } from "sequelize";
import { sequelize } from "../config/postgres.js";

const PadraoLugar = sequelize.define(
    'padraoLugares',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        lugares: {
            type: DataTypes.JSONB,
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

export default PadraoLugar;