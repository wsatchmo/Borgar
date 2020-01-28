# Borgar

### Make da borgar, eet da borgar! 

```diff
+ How it Works +
```
###### - Site utilizes a MySQL Database to create, read, and update burgers
###### - Users can head to the bottom of the page to fill in the "Add Borgar" form, then watch their borgar pop into the list
###### - Clicking "MONCH!" will move the specified borgar to the "Done Been Eeted" section, signifying it has in fact been eaten 
###### - Database persists -- any additions a user makes should remain indefinitely, even after reloading the page or closing the broswer

```diff
- Heroku Deployment -
```
This app is deployed on Heroku at https://immense-depths-25404.herokuapp.com/burgers -- please check it out there!

```diff
! Notes !
```
##### If you download this project for coding purposes, be sure to install the Node packages in the command line:

```js
cd Borgar //Navigate to the correct directory
npm install //Install Node.js packages
```

##### Remember to add your MySQL Workbench information in the connection.js file:

```js
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "", //Change to your own
        database: "borgars_db"
    });
```

```diff
# Have fun coding! #
```