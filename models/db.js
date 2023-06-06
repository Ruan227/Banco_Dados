//conexão 

/*npm install --save sequelize
npm install --save mysql2
raiz 
*/


const Squelize = require('sequelize')
const sequelize = new Squelize('gastos_deputados', 'root', 'ruanpascoal227', {
  host: 'localhost',
  dialect: 'mysql'
});
sequelize.authenticate()
.then(function(){
    console.log("certo")
}).catch(function(){
    console.log("ERROR")
})
module.exports = sequelize;