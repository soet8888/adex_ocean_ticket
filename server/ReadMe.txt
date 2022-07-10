//migration create 
sequelize migration:create --name add-area_id-in-users
// model create 
npx sequelize-cli model:generate --name Article --attributes name:string,desc:string,price:integer,active:boolean,postedAt:date
// generate seed
npx sequelize-cli seed:generate --name demo-user