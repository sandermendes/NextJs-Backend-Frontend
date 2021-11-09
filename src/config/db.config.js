import Sequelize from 'sequelize'

export const sequelize = new Sequelize({
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_PATH_STORAGE
})

// const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
//     dialect: process.env.DB_DIALECT,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
// })
