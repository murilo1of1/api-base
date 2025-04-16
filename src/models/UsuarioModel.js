import { DataTypes } from "sequelize";
import { sequelize } from "../config/postgres.js";
import Cargo from "./CargoModel.js";

const Usuario = sequelize.define(
    'usuarios',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cpf: {
            type: DataTypes.STRING(14),
            allowNull: false,
            unique: true
        },
        estudante: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        freezeTableName: true,
        timestamps: true,
        createdat: 'created_at',
        updatedat: 'updated_at',
    }
);

Usuario.belongsTo(Cargo, {
    as: 'cargo',
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    foreignKey: {
        name: 'idCargo',
        allowNull: false,
        field: 'id_cargo'
    }
})

export default Usuario;