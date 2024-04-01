const mysql = require('mysql');

// конфигурация пакета

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "gll2@vnhK",
    database: "DBMaze"
  });


  connection.connect(function(err){
    if (err) {
      console.log(err);
      return err;

    }

    else{
      console.log("Подключение к серверу успешно установлено");
    }
 });