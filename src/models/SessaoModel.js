import { DataTypes } from "sequelize";
import { sequelize } from "../config/postgres.js";
import Filme from "./FilmeModel.js";
import Sala from "./SalaModels.js";

const Sessao = sequelize.define(
    'sessoes',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        lugares: {
            type: DataTypes.JSONB
        },
        dataInicio: {
            field: 'data_inicio',
            type: DataTypes.DATE,
            allowNull: false
        },
        dataFim: {
            field: 'data_fim',
            type: DataTypes.DATE,
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

Sessao.belongsTo(Filme, {
    as: 'filme',
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    foreignKey: {
        name: 'idFilme',
        allowNull: false,
        field: 'id_filme'
    }
});

Sessao.belongsTo(Sala, {
    as: 'sala',
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    foreignKey: {
        name: 'idSala',
        allowNull: false,
        field: 'id_sala'
    }
});

export default Sessao;