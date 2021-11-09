import Sequelize from "sequelize"
import { sequelize } from "../../config/db.config"

export const Doctor = sequelize.define('doctor', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    medCertId: {
        type: Sequelize.INTEGER
    },
    phone: {
        type: Sequelize.INTEGER
    },
    mobilePhone: {
        type: Sequelize.INTEGER
    },
    zipCode: {
        type: Sequelize.INTEGER
    },
    speciality: {
        type: Sequelize.TEXT
    },
    deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
}, {
    freezeTableName: true
})