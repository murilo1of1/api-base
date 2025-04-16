import { DataTypes } from "sequelize";
import { sequelize } from "../config/postgres.js";
import PadraoLugar from "./PadraoLugarModel.js";

const Sala = sequelize.define(
    'salas',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        observacao: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        freezeTableName: true,
        timestamps: true,
        createdat: 'created_at',
        updatedat: 'updated_at',
    }
);

Sala.belongsTo(PadraoLugar, {
    as: 'padraoLugar',
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    foreignKey: {
        name: 'idPadraoLugares',
        allowNull: false,
        field: 'id_padrao_lugares'
    }
});

export default Sala;