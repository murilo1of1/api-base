import { DataTypes } from "sequelize";
import { sequelize } from "../config/postgres.js";

const Filme = sequelize.define(
    'filmes',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: true
        },
        autor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duracaoMin: {
            field: 'duracao_min',
            type: DataTypes.INTEGER,
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

export default Filme;