# init_data.sh
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all