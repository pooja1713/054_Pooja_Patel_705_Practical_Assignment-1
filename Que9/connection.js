const mysql=require("mysql");

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodejs_crud",

})

con.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connection success..!");
    }
})
module.exports.con=con;