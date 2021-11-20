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
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    mobilePhone: {
        type: Sequelize.STRING
    },
    zipCode: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    number: {
        type: Sequelize.STRING
    },
    neighborhood: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    stateProvince: {
        type: Sequelize.STRING
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