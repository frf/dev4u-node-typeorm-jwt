import connection from '../connectionTypeOrm';

connection.then(async connection => {
    await connection.runMigrations({
        transaction: 'none'
      });
      console.log(connection.migrations.length);
    await connection.close();
}).catch(error => console.log("TypeORM migration error: ", error));
