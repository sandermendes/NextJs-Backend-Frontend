import Sequelize from 'sequelize'

export const sequelize = (process.env.DB_DIALECT === 'sqlite') ? ( new Sequelize({
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_PATH_STORAGE
})) : (process.env.DB_DIALECT === 'mariadb') && (
    new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    })
)

// const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
//     dialect: process.env.DB_DIALECT,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
// })
